// src/components/ejes/EjeDetalle.jsx
import Gallery from '@ui/Gallery';
import PropTypes from 'prop-types';
import { memo } from 'react';

const styles = {
  h3: {
    fontFamily: '"Archivo", sans-serif',
    fontWeight: 800,
    fontSize: 'clamp(20px,3vw,26px)',
    margin: '0 0 8px',
    color: '#111',
    display: 'flex',
    gap: 8,
    alignItems: 'center',
  },
  card: {
    background: '#FFFFFF',
    border: '1px solid #E5E7EB',
    borderRadius: 12,
    padding: '14px 16px',
    boxShadow: '0 4px 14px rgba(0,0,0,0.05)',
    marginBottom: 12,
  },
  cardTitle: { margin: '0 0 8px', color: '#111', fontWeight: 700 },
  ul: { margin: 0, paddingLeft: 18, color: '#374151', lineHeight: 1.6 },
  p: { marginTop: 0, color: '#374151', lineHeight: 1.7 },
};

function EjeDetalle({ emoji, data, galeria, cols = 3 }) {
  const titleId = `eje-${(data?.titulo || 'detalle').toLowerCase().replace(/\s+/g, '-')}`;

  return (
    <article aria-labelledby={titleId}>
      <h3 id={titleId} style={styles.h3}>
        {emoji ? <span aria-hidden>{emoji}</span> : null} {data?.titulo}
      </h3>

      {data?.resumen && <p style={styles.p}>{data.resumen}</p>}

      {Array.isArray(data?.bloques) &&
        data.bloques.map((b, i) => (
          <div style={styles.card} key={`${b?.titulo || 'bloque'}-${i}`}>
            {b?.titulo ? <p style={styles.cardTitle}>{b.titulo}</p> : null}

            {Array.isArray(b?.lista) && (
              <ul style={styles.ul}>
                {b.lista.map((li, idx) => (
                  <li key={idx}>{li}</li>
                ))}
              </ul>
            )}

            {b?.extra ? <p style={{ marginTop: 8, color: '#374151' }}>{b.extra}</p> : null}
          </div>
        ))}

      {Array.isArray(galeria) && galeria.length > 0 && (
        <div style={{ marginTop: 12 }}>
          <Gallery images={galeria} title={`Galería – ${data?.titulo || ''}`} cols={cols} />
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
