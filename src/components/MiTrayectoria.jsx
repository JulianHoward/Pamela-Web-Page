// src/components/MiTrayectoria.jsx
import { memo, useEffect, useRef, useState } from 'react';

// Imágenes en public/assets/trayectoria/
const slides = [
  '/assets/trayectoria/Ballet Municipal-convertido-de-jpg.webp',
  '/assets/trayectoria/entrada de artistas de la Opera de Paris-convertido-de-jpg.webp',
  '/assets/trayectoria/escribiendo danza-convertido-de-JPG.webp',
  '/assets/trayectoria/IMG_3013-convertido-de-JPG (1).webp',
  '/assets/trayectoria/IMG_3013-convertido-de-JPG.webp',
  '/assets/trayectoria/paso de la antorcha olimpica-convertido-de-jpg.webp',
  '/assets/trayectoria/PUZZLE Laurent Philippe 1-convertido-de-jpg.webp',
  '/assets/trayectoria/waldo maluenda (3)-convertido-de-jpg.webp',
  '/assets/trayectoria/waldo maluenda-convertido-de-jpg.webp',
];

function MiTrayectoria() {
  const trackRef = useRef(null);
  const [active, setActive] = useState(0);

  const onScroll = () => {
    const el = trackRef.current;
    if (!el) return;
    setActive(Math.round(el.scrollLeft / el.clientWidth));
  };

  const goTo = (i) => {
  const el = trackRef.current;
  if (!el) return;

  // Nuevo índice circular
  let next;
  if (i < 0) {
    next = slides.length - 1; // si es menor a 0, ir al último
  } else if (i >= slides.length) {
    next = 0; // si supera el último, ir al primero
  } else {
    next = i;
  }

  el.scrollTo({ left: next * el.clientWidth, behavior: 'smooth' });
};


  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener('scroll', onScroll, { passive: true });
    return () => el.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section
      id="trajectory"
      aria-labelledby="trajectory-title"
      style={{ backgroundColor: '#F3ECE6' }}
    >
      <main
        id="about"
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          margin: 0,
          paddingBottom: 20,
          scrollMarginTop: 72,
        }}
      >
        <div
          style={{
            width: 'min(1100px, 92vw)',
            margin: '0 auto',
            padding: '12px 0 clamp(20px, 3vw, 40px) 0',
            flex: 1,
          }}
        >
          {/* Cabecera */}
          <header style={{ marginBottom: 'clamp(16px, 3vw, 28px)', marginTop: 0 }}>
            <h2
              id="trajectory-title"
              style={{
                fontFamily: '"Archivo", sans-serif',
                fontWeight: 800,
                fontSize: 'clamp(26px, 4vw, 40px)',
                margin: '0 0 6px 0',
                color: '#111',
                lineHeight: 1.2,
              }}
            >
              Mi Trayectoria
            </h2>
            <p style={{ margin: '6px 0 0', color: '#6B7280' }}>Un recorrido habitado</p>
          </header>

          {/* Carrusel */}
          <div style={{ position: 'relative', marginBottom: 'clamp(16px, 3vw, 28px)' }}>
            {/* Contenedor hover para mostrar flechas */}
            <div
              style={{
                position: 'relative',
              }}
              className="carousel-hover-area"
            >
              <button
                type="button"
                onClick={() => goTo(active - 1)}
                aria-label="Anterior"
                className="carousel-arrow left-arrow"
              >
                ‹
              </button>

              <div
                ref={trackRef}
                style={{
                  display: 'grid',
                  gridAutoFlow: 'column',
                  gridAutoColumns: '100%',
                  overflowX: 'hidden',
                  scrollSnapType: 'x mandatory',
                  scrollBehavior: 'smooth',
                  borderRadius: 12,
                }}
              >
                {slides.map((src, idx) => (
                  <div
                    key={idx}
                    style={{
                      scrollSnapAlign: 'start',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <div
                      style={{
                        width: '100%',
                        height: 'clamp(260px, 52vh, 560px)',
                        borderRadius: 12,
                        boxShadow: '0 8px 30px rgba(0,0,0,0.18)',
                        overflow: 'hidden',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        background: 'transparent',
                      }}
                    >
                      <img
                        src={encodeURI(src)}
                        alt={`Slide ${idx + 1} de mi trayectoria`}
                        loading={idx === 0 ? 'eager' : 'lazy'}
                        decoding="async"
                        style={{
                          maxWidth: '100%',
                          maxHeight: '100%',
                          width: 'auto',
                          height: 'auto',
                          objectFit: 'contain',
                          display: 'block',
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <button
                type="button"
                onClick={() => goTo(active + 1)}
                aria-label="Siguiente"
                className="carousel-arrow right-arrow"
              >
                ›
              </button>
            </div>

            {/* Dots */}
            
          </div>

          {/* Layout 2 columnas */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1.2fr 0.9fr',
              gap: 'clamp(18px, 3.5vw, 40px)',
            }}
          >
            {/* Columna principal */}
            <div>
              <div
                style={{
                  borderLeft: '4px solid #731425',
                  paddingLeft: '18px',
                  marginBottom: '16px',
                }}
              >
                <h3
                  style={{
                    fontFamily: '"Archivo", sans-serif',
                    fontWeight: 800,
                    fontSize: 'clamp(20px, 3vw, 26px)',
                    margin: '0 0 6px',
                    color: '#111',
                  }}
                >
                  Un recorrido habitado
                </h3>
                <p style={{ margin: 0, color: '#374151', lineHeight: 1.7 }}>
                  Nací en Sucre, Bolivia, donde crecí entre la danza clásica y las danzas
                  tradicionales bolivianas y latinoamericanas. A los 15 años, integré el Ballet
                  Municipal de Sucre, lo que me llevó a bailar profesionalmente en varios países de
                  América Latina y en Estados Unidos. Desde entonces, la danza se convirtió en mi
                  profesión y casi todas mis decisiones han estado guiadas por mis deseos de bailar,
                  transmitir y acompañar.
                </p>
              </div>

              <div
                style={{
                  background: '#FFFFFF',
                  border: '1px solid #E5E7EB',
                  borderRadius: 12,
                  padding: '14px 16px',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.05)',
                  marginBottom: 14,
                }}
              >
                <p style={{ margin: 0, fontStyle: 'italic', color: '#111' }}>
                  “Entonces se abrió un nuevo camino lleno de preguntas… y también surgió una
                  evidencia: <strong>todxs pueden bailar</strong>.”
                </p>
              </div>

              <div style={{ color: '#222', fontSize: 18, lineHeight: 1.75 }}>
                <p>
                  Fue a los 16 años cuando ocurrió un giro decisivo: participé en un taller de
                  “psicoballet” en el hospital psiquiátrico y tuve la oportunidad de bailar por
                  primera vez con personas con diversidad funcional. Esta experiencia tan profunda y
                  significativa marcó mi forma de vivir la danza.
                </p>
                <p>
                  Entonces se abrió un nuevo camino lleno de preguntas sin respuesta: ¿qué aporta
                  ese lado caluroso y potencializador de la danza a nuestras vidas? ¿cómo explicar
                  esas conexiones “extrañas” que se crean mientras bailamos? ¿qué ocurre en el
                  cuerpo y en la mente cuando el movimiento se transforma en un acto creativo
                  compartido? Y también surgió una evidencia: todxs pueden bailar, y la danza nos
                  ofrece mucho más que un simple entretenimiento.
                </p>
                <p>
                  Con esas preguntas y esa certeza, decidí estudiar Psicología, con una perspectiva
                  de trabajo clínico y también de transformación social. Es un camino que no he
                  dejado, pues me ayuda a comprender mejor cómo el cuerpo, el movimiento y el
                  psiquismo se entrelazan en la experiencia humana, individual y colectiva.
                </p>

                <h3
                  style={{
                    fontFamily: '"Archivo", sans-serif',
                    fontWeight: 800,
                    fontSize: 'clamp(20px, 3vw, 26px)',
                    margin: '16px 0 6px',
                    color: '#111',
                  }}
                >
                  De Bolivia a Francia: tejiendo puentes
                </h3>
                <p>
                  Con la curiosidad que siempre me acompaña, un mundo de posibilidades se abrió
                  frente a mí cuando llegué a Francia. Descubrí que la danza no solo se baila:
                  también se piensa, se estudia, se lee y, sobre todo, es una fuente inagotable de
                  experiencias y conocimientos. Poco a poco, fui explorando diferentes facetas de la
                  danza y comprendí que cada formación o curso alimentaba no solo mi práctica
                  artística, sino también mi manera de acompañar a los demás a través del
                  movimiento.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div style={{ display: 'grid', gap: 14, alignContent: 'start' }}>
              {/* Card: Estudios */}
              <div
                style={{
                  background: '#FFFFFF',
                  border: '1px solid #E5E7EB',
                  borderRadius: 12,
                  padding: 18,
                  boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
                }}
              >
                <h4
                  style={{
                    margin: '0 0 8px',
                    fontSize: 'clamp(16px, 2.2vw, 18px)',
                    color: '#111',
                    fontFamily: '"Archivo", sans-serif',
                  }}
                >
                  Tuve la suerte de poder estudiar:
                </h4>
                <ul
                  style={{
                    margin: 0,
                    paddingLeft: 18,
                    color: '#374151',
                    lineHeight: 1.65,
                  }}
                >
                  <li>Diploma Estatal de maestra de danza contemporánea (RIDC)</li>
                  <li>
                    Maestría en Arte-terapia con especialidad en Danza-Movimiento-Terapia
                    (Universidad PRES Sorbonne Paris)
                  </li>
                  <li>
                    Licenciatura en Artes del Espectáculo Coreográfico (Universidad Paris VIII
                    Saint-Denis)
                  </li>
                  <li>
                    Certificado “La Danza como mediación en la Relación de Ayuda” (Free Dance Song)
                  </li>
                  <li>Formación en Danza y terapia del movimiento (Conservatorio de Issy)</li>
                  <li>
                    Formaciones cortas en clínica del Autismo, AFCMD/Laban/Kestenberg, Notación
                    Benesh, Pedagogía, entre otras.
                  </li>
                </ul>
              </div>

              {/* Card: Cruces técnicos */}
              <div
                style={{
                  background: '#FFFFFF',
                  border: '1px solid #E5E7EB',
                  borderRadius: 12,
                  padding: 18,
                  boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
                }}
              >
                <h4
                  style={{
                    margin: '0 0 8px',
                    fontSize: 'clamp(16px, 2.2vw, 18px)',
                    color: '#111',
                    fontFamily: '"Archivo", sans-serif',
                  }}
                >
                  Cruces técnicos que me nutren
                </h4>
                <p style={{ margin: 0, color: '#374151' }}>
                  Danza contemporánea, técnica Acogny, danzas afro-diaspóricas, improvisación y
                  técnicas somáticas. Estos cruces nutren mi danza, mi pedagogía y mi enfoque
                  terapéutico desde el movimiento.
                </p>
                <p style={{ marginTop: 12, color: '#6B7280', fontSize: 14 }}>
                  Y este camino no se detiene aquí: sigo aprendiendo de manera continua, asistiendo
                  a cursos, talleres y encuentros que enriquecen mi práctica.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Responsive: una columna en pantallas pequeñas */}
        <style>{`
          @media (max-width: 920px) {
            #about > div > div:nth-of-type(3) {
              grid-template-columns: 1fr !important;
            }
          }

          /* Flechas solo visibles al acercar el mouse */
          .carousel-hover-area {
            position: relative;
          }
          .carousel-arrow {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            z-index: 2;
            border: none;
            border-radius: 999px;
            padding: 10px;
            background: rgba(0,0,0,0.3);
            color: #fff;
            cursor: pointer;
            opacity: 0;
            transition: opacity 0.3s;
            pointer-events: none;
          }
          .carousel-arrow.left-arrow {
            left: 8px;
          }
          .carousel-arrow.right-arrow {
            right: 8px;
          }
          .carousel-hover-area:hover .carousel-arrow {
            opacity: 1;
            pointer-events: auto;
          }
        `}</style>
      </main>
    </section>
  );
}

export default memo(MiTrayectoria);
