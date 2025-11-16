// src/components/Inicio.jsx
import { memo } from 'react';

const HEADER_H = 64; // altura del AppBar (el Header compensa el scroll real)

function Inicio() {
  return (
    <section
      id="home"
      aria-labelledby="home-title"
      style={{
        backgroundColor: '#F8F4F1',
        minHeight: `calc(100vh - ${HEADER_H}px)`,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: '16px 0 24px',
        margin: 0,
        // si algún día navegas con #hash, esto ayuda a que el header no tape el título
        scrollMarginTop: HEADER_H + 8,
      }}
    >
      <div
        style={{
          width: 'min(1100px, 92vw)',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 12,
        }}
      >
        {/* FOTO principal */}
        <img
          src="/assets/IMG_4303-convertido-de-JPG.webp"
          alt="Retrato de Pamela Paniagua con manto tradicional"
          style={{
            display: 'block',
            width: '100%',
            height: 'auto',
            maxHeight: '60vh',
            objectFit: 'contain',
            borderRadius: 12,
            margin: '12px 0',
          }}
          loading="eager"
          decoding="async"
          fetchPriority="high"
          sizes="(max-width: 768px) 92vw, 1100px"
        />

        {/* TEXTO */}
        <div
          style={{
            maxWidth: 900,
            margin: '0 auto',
            textAlign: 'center',
            padding: 'clamp(10px, 2vw, 18px) 0',
            lineHeight: 1.45,
          }}
        >
          <h1
            id="home-title"
            style={{
              fontFamily: '"Archivo", sans-serif',
              fontWeight: 800,
              letterSpacing: '-0.2px',
              fontSize: 'clamp(24px, 3.6vw, 38px)',
              margin: '0 0 6px',
              color: '#111',
            }}
          >
            Pamela Cecilia Paniagua Sanchez
          </h1>

          <p
            style={{
              fontFamily: '"Archivo", sans-serif',
              fontWeight: 600,
              fontSize: 'clamp(14px, 2vw, 18px)',
              margin: '0 0 8px',
              color: '#222',
            }}
          >
            Artista coreográfica – Pedagoga – Danza-movimiento-Terapeuta
          </p>

          <p
            style={{
              fontSize: 'clamp(14px, 1.9vw, 18px)',
              color: '#333',
              margin: 0,
            }}
          >
            Franco-boliviana, vivo y trabajo entre Francia y Bolivia, entre tradición y modernidad,
            entre creación y transmisión. Para mí, la danza es un lenguaje, una fuerza de
            transformación íntima y colectiva. Se nutre de la experiencia y de las vivencias de cada
            persona y merece ser accesible a la mayor cantidad de gente posible.
          </p>
        </div>
      </div>
    </section>
  );
}

export default memo(Inicio);
