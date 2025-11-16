// src/components/Contacto.jsx
import { memo } from 'react';

function Contacto() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      style={{
        backgroundColor: '#731425',
        color: 'white',
        padding: '40px 16px',
        textAlign: 'center',
        scrollMarginTop: 72,
      }}
    >
      <div style={{ width: 'min(900px, 92vw)', margin: '0 auto' }}>
        <h2
          id="contact-title"
          style={{
            fontFamily: '"Archivo", sans-serif',
            fontWeight: 800,
            letterSpacing: '-0.2px',
            fontSize: 'clamp(22px, 3.2vw, 34px)',
            margin: '0 0 8px',
            lineHeight: 1.2,
          }}
        >
          Contacto
        </h2>

        <p style={{ margin: '0 0 16px', opacity: 0.95 }}>
          Puedes contactarme a través de los siguientes enlaces:
        </p>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 16,
            flexWrap: 'wrap',
          }}
        >
          <a
            href="https://www.instagram.com/pamepani"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram de Pamela: pamepani (abre en una pestaña nueva)"
            style={{
              color: 'white',
              fontSize: '18px',
              textDecoration: 'none',
              padding: '10px 14px',
              border: '1px solid rgba(255,255,255,0.5)',
              borderRadius: 999,
              transition: 'background .2s, transform .1s',
            }}
            onMouseOver={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')}
            onMouseOut={(e) => (e.currentTarget.style.background = 'transparent')}
          >
            Instagram: @pamepani
          </a>

          <a
            href="mailto:pamela.paniagua.sanchez@gmail.com"
            aria-label="Enviar correo a pamela.paniagua.sanchez@gmail.com"
            style={{
              color: 'white',
              fontSize: '18px',
              textDecoration: 'none',
              padding: '10px 14px',
              border: '1px solid rgba(255,255,255,0.5)',
              borderRadius: 999,
              transition: 'background .2s, transform .1s',
            }}
            onMouseOver={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')}
            onMouseOut={(e) => (e.currentTarget.style.background = 'transparent')}
          >
            Correo: pamela.paniagua.sanchez@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}

export default memo(Contacto);
