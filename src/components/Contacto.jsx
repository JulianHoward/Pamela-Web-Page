// src/components/Contacto.jsx
import { memo } from 'react';
import { useLanguage } from '../hooks/useLanguage';

function Contacto() {
  const { t } = useLanguage();

  const linkStyle = {
    color: 'white',
    fontSize: 'clamp(15px, 4.5vw, 17px)', // Un poco más grande en móviles para legibilidad
    textDecoration: 'none',
    padding: '14px 20px', // Aumentamos el área táctil (mínimo 44px de altura recomendado)
    border: '1px solid rgba(255,255,255,0.4)',
    borderRadius: 12, // Cambiamos de 999 a 12 para un look más moderno en bloques
    transition: 'background .2s, transform .1s',
    display: 'flex', // Flex para alinear iconos o texto mejor
    flexDirection: 'column',
    alignItems: 'center',
    gap: '4px',
    wordBreak: 'break-all', 
    width: '100%', // En mobile ocupan todo el ancho
    maxWidth: '400px', // Pero no infinitamente en desktop
    boxSizing: 'border-box',
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      style={{
        backgroundColor: '#731425',
        color: 'white',
        padding: 'clamp(50px, 10vw, 80px) 20px', // Más aire en los bordes
        textAlign: 'center',
        scrollMarginTop: 72,
      }}
    >
      <div style={{ width: 'min(600px, 100%)', margin: '0 auto' }}>
        <h2
          id="contact-title"
          style={{
            fontFamily: '"Archivo", sans-serif',
            fontWeight: 800,
            fontSize: 'clamp(28px, 8vw, 36px)', // Título más impactante
            margin: '0 0 16px',
            lineHeight: 1.1,
          }}
        >
          {t.contacto.titulo}
        </h2>

        <p style={{ 
          margin: '0 0 32px', 
          opacity: 0.9,
          fontSize: '1.05rem',
          lineHeight: 1.6 
        }}>
          {t.contacto.intro}
        </p>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column', // Stack vertical en mobile por defecto
            alignItems: 'center',
            gap: 16, // Espacio generoso entre botones
          }}
        >
          <a
            href="https://www.instagram.com/pamepani"
            target="_blank"
            rel="noopener noreferrer"
            style={linkStyle}
            onMouseOver={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')}
            onMouseOut={(e) => (e.currentTarget.style.background = 'transparent')}
          >
            <span style={{ fontWeight: 700, fontSize: '0.8rem', textTransform: 'uppercase', opacity: 0.8 }}>Instagram</span>
            <span>@pamepani</span>
          </a>

          <a
            href="mailto:pamela.paniagua.sanchez@gmail.com"
            style={linkStyle}
            onMouseOver={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')}
            onMouseOut={(e) => (e.currentTarget.style.background = 'transparent')}
          >
            <span style={{ fontWeight: 700, fontSize: '0.8rem', textTransform: 'uppercase', opacity: 0.8 }}>Email</span>
            <span style={{ fontSize: '0.95em' }}>pamela.paniagua.sanchez@gmail.com</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default memo(Contacto);