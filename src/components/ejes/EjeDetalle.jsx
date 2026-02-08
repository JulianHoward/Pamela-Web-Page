// src/components/ejes/EjeDetalle.jsx
import Gallery from '@ui/Gallery';
import PropTypes from 'prop-types';
import { memo, useEffect,useState } from 'react';

const styles = {
  h3: {
    fontFamily: '"Archivo", sans-serif',
    fontWeight: 800,
    fontSize: 'clamp(20px, 4vw, 26px)',
    margin: '0 0 12px',
    color: '#111',
    display: 'flex',
    gap: 8,
    alignItems: 'center',
  },
  card: {
    background: '#FFFFFF',
    border: '1px solid #E5E7EB',
    borderRadius: 12,
    // Padding dinámico: 12px en móvil, hasta 20px en escritorio
    padding: 'clamp(12px, 3vw, 20px)',
    boxShadow: '0 4px 14px rgba(0,0,0,0.05)',
    marginBottom: 12,
  },
  cardTitle: { 
    margin: '0 0 8px', 
    color: '#111', 
    fontWeight: 700,
    fontSize: '1rem' 
  },
  ul: { 
    margin: 0, 
    paddingLeft: 18, 
    color: '#374151', 
    lineHeight: 1.6,
    fontSize: '0.95rem'
  },
  p: { 
    marginTop: 0, 
    color: '#374151', 
    lineHeight: 1.7,
    fontSize: '0.95rem'
  },
};

function EjeDetalle({ emoji, data, galeria, cols = 3 }) {
  // --- Lógica Responsive ---
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth < 768;
  const isTablet = windowWidth >= 768 && windowWidth < 1024;

  // Cálculo de columnas para la galería
  const responsiveCols = isMobile ? 1 : isTablet ? 2 : cols;

  const titleId = `eje-${(data?.titulo || 'detalle').toLowerCase().replace(/\s+/g, '-')}`;

  return (
    <article aria-labelledby={titleId} style={{ width: '100%' }}>
      {/* Título con Emoji */}
      <h3 id={titleId} style={styles.h3}>
        {emoji ? <span aria-hidden="true">{emoji}</span> : null} 
        {data?.titulo}
      </h3>

      {/* Resumen - Corrección de Sintaxis Aplicada aquí */}
      {data?.resumen && (
        <p style={styles.p}>
          {data.resumen}
        </p>
      )}

      {/* Bloques de Contenido */}
      {Array.isArray(data?.bloques) &&
        data.bloques.map((b, i) => (
          <div style={styles.card} key={`${b?.titulo || 'bloque'}-${i}`}>
            {b?.titulo ? <p style={styles.cardTitle}>{b.titulo}</p> : null}

            {Array.isArray(b?.lista) && (
              <ul style={styles.ul}>
                {b.lista.map((li, idx) => (
                  <li key={idx} style={{ marginBottom: 4 }}>{li}</li>
                ))}
              </ul>
            )}

            {/* Texto Extra con corrección de seguridad */}
            {b?.extra ? (
              <p style={{ ...styles.p, marginTop: 10, fontStyle: 'italic', fontSize: '0.9rem' }}>
                {b.extra}
              </p>
            ) : null}
          </div>
        ))}

      {/* Galería Responsive */}
      {Array.isArray(galeria) && galeria.length > 0 && (
        <div style={{ marginTop: 24 }}>
          <Gallery 
            images={galeria} 
            title={`Galería – ${data?.titulo || ''}`} 
            cols={responsiveCols} 
          />
        </div>
      )}
    </article>
  );
}

EjeDetalle.propTypes = {
  emoji: PropTypes.string,
  data: PropTypes.shape({
    titulo: PropTypes.string.isRequired,
    resumen: PropTypes.string,
    bloques: PropTypes.arrayOf(
      PropTypes.shape({
        titulo: PropTypes.string,
        lista: PropTypes.arrayOf(PropTypes.string),
        extra: PropTypes.string,
      })
    ),
  }).isRequired,
  galeria: PropTypes.arrayOf(PropTypes.string),
  cols: PropTypes.number,
};

EjeDetalle.defaultProps = {
  emoji: '',
  galeria: [],
  cols: 3,
};

export default memo(EjeDetalle);