// src/components/Inicio.jsx
import { memo } from 'react';
import { useLanguage } from '../hooks/useLanguage';

const HEADER_H = 64;

function Inicio() {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      aria-labelledby="home-title"
      style={{
        backgroundColor: '#F8F4F1',
        // Usamos min-height para que llene la pantalla, restando el header
        minHeight: `calc(100vh - ${HEADER_H}px)`,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px 20px', 
        margin: 0,
        scrollMarginTop: HEADER_H,
        boxSizing: 'border-box',
      }}
    >
      <div
        style={{
          width: 'min(1100px, 100%)',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 'clamp(16px, 4vw, 24px)', // Espaciado dinámico
        }}
      >
        {/* Contenedor de la Imagen */}
        <div style={{ 
          width: '100%', 
          display: 'flex', 
          justifyContent: 'center',
          perspective: '1000px' // Sutil efecto de profundidad
        }}>
          <img
            src="/assets/IMG_4303-convertido-de-JPG.webp"
            alt="Retrato de Pamela Paniagua"
            style={{
              display: 'block',
              width: '100%',
              maxWidth: '700px',
              // En móvil (vertical) limitamos más el alto para ver el texto abajo
              height: 'auto',
              maxHeight: 'clamp(280px, 45vh, 550px)', 
              objectFit: 'cover',
              borderRadius: 24, // Bordes más suaves para mobile
              boxShadow: '0 20px 40px rgba(115, 20, 37, 0.12)', // Sombra con tono de marca
              border: '1px solid rgba(255,255,255,0.6)'
            }}
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
        </div>

        {/* Bloque de Texto */}
        <div
          style={{
            maxWidth: '800px',
            textAlign: 'center',
            padding: '0 10px',
          }}
        >
          <h1
            id="home-title"
            style={{
              fontFamily: '"Archivo", sans-serif',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              // Tamaño optimizado para impacto en mobile
              fontSize: 'clamp(28px, 7vw, 48px)',
              margin: '0 0 8px',
              color: '#111',
              lineHeight: 1.1,
              textWrap: 'balance',
            }}
          >
            {t.inicio.titulo}
          </h1>

          <p
            style={{
              fontFamily: '"Archivo", sans-serif',
              fontWeight: 700,
              // Un poco más pequeño y sutil en mobile
              fontSize: 'clamp(14px, 3vw, 18px)',
              margin: '0 0 16px',
              color: '#731425', // Color institucional para resaltar cargo/subtítulo
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
            }}
          >
            {t.inicio.subtitulo}
          </p>

          <p
            style={{
              fontSize: 'clamp(16px, 3.5vw, 19px)',
              color: '#4B5563', // Gris más legible
              lineHeight: 1.6,
              margin: '0 auto',
              maxWidth: '600px',
              fontWeight: 400,
            }}
          >
            {t.inicio.descripcion}
          </p>
        </div>
      </div>
    </section>
  );
}

export default memo(Inicio);