// src/components/MisEjes.jsx
import { memo, useState } from 'react'; // React y hooks primero
import { useLanguage } from '../hooks/useLanguage';
import { EJE_DATA } from '../constants/ejesData';
import Gallery from './ui/Gallery';

const HEADER_H = 64;

// Imágenes desde constants (fallback a arrays vacíos si no existen)
const artImages = EJE_DATA?.artistico?.imagenes ?? [];
const pedImages = EJE_DATA?.formativo?.imagenes ?? EJE_DATA?.pedagogico?.imagenes ?? [];
const therImages = EJE_DATA?.terapeutico?.imagenes ?? [];

function MisEjes() {
  const [expandedEje, setExpandedEje] = useState(null);
  const { t } = useLanguage();
  return (
    <section
      id="axes"
      style={{
        backgroundColor: '#F8F4F1',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        margin: 0,
        padding: '20px 0 28px',
        scrollMarginTop: HEADER_H + 8,
      }}
    >
      <div
        style={{
          width: 'min(1100px, 92vw)',
          margin: '0 auto',
        }}
      >
        {/* Título */}
        <header style={{ margin: '0 0 clamp(16px,3vw,28px) 0' }}>
          <h2
            style={{
              fontFamily: '"Archivo", sans-serif',
              fontWeight: 800,
              fontSize: 'clamp(26px, 4vw, 40px)',
              margin: 0,
              color: '#111',
            }}
          >
            {t.ejes.titulo}
          </h2>
          <p style={{ margin: '8px 0 0', color: '#374151', lineHeight: 1.6 }}>{t.ejes.intro}</p>
        </header>

        {/* 3 Tarjetas resumen */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 'clamp(16px,3vw,24px)',
            marginBottom: 'clamp(28px,4vw,40px)',
          }}
        >
          {/* Artístico */}
          <div
            onClick={() => setExpandedEje(expandedEje === 'artistico' ? null : 'artistico')}
            style={{
              background:
                expandedEje === 'artistico'
                  ? 'linear-gradient(135deg, #731425 0%, #9a1f35 100%)'
                  : '#FFFFFF',
              border: expandedEje === 'artistico' ? '2px solid #731425' : '1px solid #E5E7EB',
              borderRadius: 16,
              padding: '24px 20px',
              boxShadow:
                expandedEje === 'artistico'
                  ? '0 12px 32px rgba(115, 20, 37, 0.2)'
                  : '0 4px 12px rgba(0,0,0,0.05)',
              cursor: 'pointer',
              transition: 'all 0.35s cubic-bezier(0.4, 0.0, 0.2, 1)',
              transform:
                expandedEje === 'artistico' ? 'translateY(-6px) scale(1.02)' : 'translateY(0)',
              position: 'relative',
              overflow: 'hidden',
            }}
            onMouseEnter={(e) => {
              if (expandedEje !== 'artistico') {
                e.currentTarget.style.boxShadow = '0 12px 28px rgba(0,0,0,0.12)';
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.borderColor = '#DDD';
              }
            }}
            onMouseLeave={(e) => {
              if (expandedEje !== 'artistico') {
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.05)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = '#E5E7EB';
              }
            }}
          >
            <h3
              style={{
                fontFamily: '"Archivo", sans-serif',
                fontWeight: 800,
                fontSize: 'clamp(18px,2.8vw,23px)',
                margin: '0 0 10px',
                color: expandedEje === 'artistico' ? '#FFFFFF' : '#111',
                transition: 'color 0.3s ease',
                textAlign: 'center',
              }}
            >
              {t.ejes.artistico.titulo}
            </h3>
            <p
              style={{
                margin: 0,
                color: expandedEje === 'artistico' ? 'rgba(255,255,255,0.95)' : '#666',
                lineHeight: 1.5,
                fontSize: '0.95rem',
                transition: 'color 0.3s ease',
                textAlign: 'center',
              }}
            >
              {t.ejes.artistico.descripcion}
            </p>
          </div>

          {/* Pedagógico/Formativo */}
          <div
            onClick={() => setExpandedEje(expandedEje === 'pedagogico' ? null : 'pedagogico')}
            style={{
              background:
                expandedEje === 'pedagogico'
                  ? 'linear-gradient(135deg, #731425 0%, #9a1f35 100%)'
                  : '#FFFFFF',
              border: expandedEje === 'pedagogico' ? '2px solid #731425' : '1px solid #E5E7EB',
              borderRadius: 16,
              padding: '24px 20px',
              boxShadow:
                expandedEje === 'pedagogico'
                  ? '0 12px 32px rgba(115, 20, 37, 0.2)'
                  : '0 4px 12px rgba(0,0,0,0.05)',
              cursor: 'pointer',
              transition: 'all 0.35s cubic-bezier(0.4, 0.0, 0.2, 1)',
              transform:
                expandedEje === 'pedagogico' ? 'translateY(-6px) scale(1.02)' : 'translateY(0)',
              position: 'relative',
              overflow: 'hidden',
            }}
            onMouseEnter={(e) => {
              if (expandedEje !== 'pedagogico') {
                e.currentTarget.style.boxShadow = '0 12px 28px rgba(0,0,0,0.12)';
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.borderColor = '#DDD';
              }
            }}
            onMouseLeave={(e) => {
              if (expandedEje !== 'pedagogico') {
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.05)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = '#E5E7EB';
              }
            }}
          >
            <h3
              style={{
                fontFamily: '"Archivo", sans-serif',
                fontWeight: 800,
                fontSize: 'clamp(18px,2.8vw,23px)',
                margin: '0 0 10px',
                color: expandedEje === 'pedagogico' ? '#FFFFFF' : '#111',
                transition: 'color 0.3s ease',
                textAlign: 'center',
              }}
            >
              {t.ejes.pedagogico.titulo}
            </h3>
            <p
              style={{
                margin: 0,
                color: expandedEje === 'pedagogico' ? 'rgba(255,255,255,0.95)' : '#666',
                lineHeight: 1.5,
                fontSize: '0.95rem',
                transition: 'color 0.3s ease',
                textAlign: 'center',
              }}
            >
              {(EJE_DATA?.formativo?.descripcion || EJE_DATA?.pedagogico?.descripcion) ??
                'Clases para todas las edades, formaciones, talleres EAC y transmisión en instituciones.'}
            </p>
          </div>

          {/* Terapéutico */}
          <div
            onClick={() => setExpandedEje(expandedEje === 'terapeutico' ? null : 'terapeutico')}
            style={{
              background:
                expandedEje === 'terapeutico'
                  ? 'linear-gradient(135deg, #731425 0%, #9a1f35 100%)'
                  : '#FFFFFF',
              border: expandedEje === 'terapeutico' ? '2px solid #731425' : '1px solid #E5E7EB',
              borderRadius: 16,
              padding: '24px 20px',
              boxShadow:
                expandedEje === 'terapeutico'
                  ? '0 12px 32px rgba(115, 20, 37, 0.2)'
                  : '0 4px 12px rgba(0,0,0,0.05)',
              cursor: 'pointer',
              transition: 'all 0.35s cubic-bezier(0.4, 0.0, 0.2, 1)',
              transform:
                expandedEje === 'terapeutico' ? 'translateY(-6px) scale(1.02)' : 'translateY(0)',
              position: 'relative',
              overflow: 'hidden',
            }}
            onMouseEnter={(e) => {
              if (expandedEje !== 'terapeutico') {
                e.currentTarget.style.boxShadow = '0 12px 28px rgba(0,0,0,0.12)';
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.borderColor = '#DDD';
              }
            }}
            onMouseLeave={(e) => {
              if (expandedEje !== 'terapeutico') {
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.05)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = '#E5E7EB';
              }
            }}
          >
            <h3
              style={{
                fontFamily: '"Archivo", sans-serif',
                fontWeight: 800,
                fontSize: 'clamp(18px,2.8vw,23px)',
                margin: '0 0 10px',
                color: expandedEje === 'terapeutico' ? '#FFFFFF' : '#111',
                transition: 'color 0.3s ease',
                textAlign: 'center',
              }}
            >
              {t.ejes.terapeutico.titulo}
            </h3>
            <p
              style={{
                margin: 0,
                color: expandedEje === 'terapeutico' ? 'rgba(255,255,255,0.95)' : '#666',
                lineHeight: 1.5,
                fontSize: '0.95rem',
                transition: 'color 0.3s ease',
                textAlign: 'center',
              }}
            >
              {EJE_DATA?.terapeutico?.descripcion ??
                'Danza-Movimiento-Terapia: acompañamientos individuales y grupales, y proyectos con estructuras médico-sociales.'}
            </p>
          </div>
        </div>

        {/* Párrafo puente */}
        {!expandedEje && (
          <div
            style={{
              background:
                'linear-gradient(to right, rgba(115, 20, 37, 0.08), rgba(115, 20, 37, 0.04))',
              borderLeft: '4px solid #731425',
              borderRadius: '0 8px 8px 0',
              paddingLeft: 20,
              paddingRight: 20,
              paddingTop: 16,
              paddingBottom: 16,
              marginBottom: 'clamp(20px,4vw,32px)',
            }}
          >
            <p style={{ margin: 0, color: '#333', lineHeight: 1.8, fontSize: '1.05rem' }}>
              <strong>La danza es el hilo conductor</strong> alrededor del cual he podido
              diversificar mis prácticas. Mi interés por las diferentes dimensiones de la danza me
              ha proporcionado una caja de herramientas amplia y sólida, útil tanto para el trabajo
              artístico como para el trabajo de acompañamiento y transmisión. Para mí, la danza es
              un espacio de <strong>emancipación, de poesía y de cuidado</strong> donde cada persona
              tiene su lugar.
            </p>
          </div>
        )}

        {/* ---- Desarrollo por Ejes (Condicional) ---- */}
        {expandedEje && (
          <div
            style={{
              animation: 'fadeIn 0.4s ease-in-out',
              display: 'block',
              marginTop: 'clamp(20px,3vw,28px)',
            }}
          >
            <style>{`
              @keyframes fadeIn {
                from {
                  opacity: 0;
                  transform: translateY(10px);
                }
                to {
                  opacity: 1;
                  transform: translateY(0);
                }
              }
            `}</style>
            {/* COLUMNA PRINCIPAL: Artístico + Pedagógico */}
            <div style={{ display: 'block' }}>
              {/* ARTÍSTICO */}
              {expandedEje === 'artistico' && (
                <section aria-labelledby="eje-artistico">
                  <h3
                    id="eje-artistico"
                    style={{
                      fontFamily: '"Archivo", sans-serif',
                      fontWeight: 800,
                      fontSize: 'clamp(22px,3.2vw,28px)',
                      margin: '0 0 16px',
                      color: '#731425',
                      textAlign: 'center',
                    }}
                  >
                    EJE ARTÍSTICO
                  </h3>
                  <p
                    style={{
                      marginTop: 0,
                      color: '#555',
                      lineHeight: 1.75,
                      fontSize: '1rem',
                      textAlign: 'center',
                    }}
                  >
                    Desarrollo una práctica coreográfica{' '}
                    <strong>sensible, inclusiva y anclada en lo vivo</strong>, explorando la danza
                    como un espacio de encuentro y creación colectiva.
                  </p>

                  <div
                    style={{
                      background: 'linear-gradient(to bottom, #FAFAFA, #FFFFFF)',
                      border: '1px solid #E8E8E8',
                      borderRadius: 14,
                      padding: '18px 20px',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                      marginBottom: 14,
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <p
                      style={{
                        margin: '0 0 10px',
                        color: '#222',
                        fontWeight: 700,
                        fontSize: '1.05rem',
                      }}
                    >
                      He trabajado como bailarina y/o asistente coreográfica con:
                    </p>
                    <ul style={{ margin: 0, paddingLeft: 18, color: '#555', lineHeight: 1.6 }}>
                      <li>Cie. Regards en Lignes – bailarina</li>
                      <li>Handidanse – bailarina y coreógrafa</li>
                      <li>Cie. Les Ouvreurs des Possibles – performer y artista coreográfica</li>
                      <li>La Fine Compagnie – bailarina</li>
                      <li>Cie. Afrokadanse – bailarina</li>
                      <li>Cie. Corps Pluriel – bailarina</li>
                      <li>Grupo Batuk Nago – bailarina</li>
                      <li>Cie. Wild Souls – bailarina y performer</li>
                      <li>
                        Ballet Municipal de Sucre (Bolivia) – bailarina, profesora y coreógrafa
                      </li>
                    </ul>
                  </div>

                  <div
                    style={{
                      background: 'linear-gradient(to bottom, #FAFAFA, #FFFFFF)',
                      border: '1px solid #E8E8E8',
                      borderRadius: 14,
                      padding: '18px 20px',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                    }}
                  >
                    <p
                      style={{
                        margin: '0 0 10px',
                        color: '#222',
                        fontWeight: 700,
                        fontSize: '1.05rem',
                      }}
                    >
                      También soy creadora e impulsora de proyectos propios:
                    </p>
                    <ul style={{ margin: 0, paddingLeft: 18, color: '#374151', lineHeight: 1.6 }}>
                      <li>
                        <strong>LesDansesPartagées:</strong> Encuentro Coreográfico anual que reúne
                        a grupos diversos de bailarines. 6 versiones. La primera en Sucre-Bolivia.
                      </li>
                      <li>
                        <strong>Anim’Halles:</strong> colectivo amateur intergeneracional
                        (creaciones: Mycelium, Ayni, En invierno se ve mejor el río, Piezas
                        sueltas…).
                      </li>
                      <li>
                        <strong>La petite graine:</strong> espectáculo para bebés de 0 a 3 años, en
                        gira en París.
                      </li>
                      <li>
                        <strong>Hermanas:</strong> creación en curso entre danzas tradicionales
                        bolivianas y contemporánea.
                      </li>
                    </ul>
                    <p style={{ marginTop: 10, color: '#555', lineHeight: 1.7 }}>
                      Actualmente doy forma a mi propia compañía, un espacio que articula creación,
                      investigación en danzas tradicionales y contemporáneas, danza y <em>Care</em>,
                      trabajo inclusivo y transmisión intergeneracional.
                    </p>
                  </div>

                  {/* GALERÍA DEL EJE ARTÍSTICO */}
                  <div style={{ marginTop: 24 }}>
                    <h4
                      style={{
                        margin: '0 0 14px',
                        color: '#731425',
                        fontWeight: 700,
                        fontSize: '0.95rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                        textAlign: 'center',
                      }}
                    >
                      Galería Visual
                    </h4>
                    <Gallery images={artImages} title="Galería del Eje Artístico" cols={3} />
                  </div>
                </section>
              )}

              {/* PEDAGÓGICO */}
              {expandedEje === 'pedagogico' && (
                <section aria-labelledby="eje-pedagogico">
                  <h3
                    id="eje-pedagogico"
                    style={{
                      fontFamily: '"Archivo", sans-serif',
                      fontWeight: 800,
                      fontSize: 'clamp(22px,3.2vw,28px)',
                      margin: '0 0 16px',
                      color: '#731425',
                      textAlign: 'center',
                    }}
                  >
                    EJE PEDAGÓGICO
                  </h3>

                  <div
                    style={{
                      color: '#555',
                      lineHeight: 1.75,
                      fontSize: '1rem',
                      textAlign: 'justify',
                    }}
                  >
                    <p style={{ marginTop: 0 }}>
                      <strong>Maestra de Danza Contemporánea.</strong> Diploma Estatal (RIDC) del
                      Ministerio de Cultura. Acreditada por el Ministerio de Educación Nacional
                      francés para intervenciones artísticas en el medio educativo.
                    </p>
                    <p>
                      Mi labor pedagógica combina técnica, sensibilidad y apertura a la diversidad.
                      Como latinoamericana, incorporo la riqueza de las danzas tradicionales a la
                      danza contemporánea y a la exploración corporal de manera viva y sensible.
                    </p>

                    <h4 style={{ margin: '12px 0 6px', color: '#111' }}>Para niñxs</h4>
                    <p>
                      Cursos de descubrimiento e iniciación que acompañan el desarrollo infantil,
                      preservando el placer de bailar y estimulando la creatividad.
                    </p>

                    <h4 style={{ margin: '12px 0 6px', color: '#111' }}>Para adultxs</h4>
                    <p>
                      La técnica al servicio de la poética y la creación. Clases como espacios de
                      sensaciones profundas y aprendizajes enriquecedores.
                    </p>

                    <h4 style={{ margin: '12px 0 6px', color: '#111' }}>Trabajo en</h4>
                    <ul style={{ margin: 0, paddingLeft: 18 }}>
                      <li>Escuelas públicas (proyectos EAC – Educación Artística y Cultural)</li>
                      <li>Escuelas de danza</li>
                      <li>Centros culturales y de animación de la Alcaldía de París</li>
                    </ul>
                    <p style={{ marginTop: 8 }}>
                      Enseño danza contemporánea desde el nivel Inicial hasta el 2.º Ciclo.
                    </p>

                    <hr style={{ border: 0, borderTop: '1px solid #E5E7EB', margin: '14px 0' }} />

                    <h4 style={{ margin: '0 0 6px', color: '#111' }}>
                      Formadora / Intervenciones especiales
                    </h4>
                    <p>
                      Acompaño a docentes, profesionales y colectivos a explorar la danza como
                      herramienta de expresión y transformación. Imparto masterclass sobre:
                    </p>
                    <ul style={{ margin: 0, paddingLeft: 18 }}>
                      <li>Danza y diversidad funcional: de la inclusión a la Terapia</li>
                      <li>Introducción a la Danza-Movimiento-Terapia</li>
                      <li>Pedagogía aplicada a la danza</li>
                    </ul>
                    <p style={{ marginTop: 8 }}>
                      Intervenciones en: GRETA Hauts de Seine, Instituto Profesional Free Dance
                      Song, Conservatorios de Sèvres y Meudon, Centro Terapéutico Sol en Casa,
                      Escuela Bailarte… Tutora de prácticas para estudiantes universitarios.
                    </p>
                  </div>

                  {/* GALERÍA DEL EJE PEDAGÓGICO */}
                  <div style={{ marginTop: 24 }}>
                    <h4
                      style={{
                        margin: '0 0 14px',
                        color: '#731425',
                        fontWeight: 700,
                        fontSize: '0.95rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                        textAlign: 'center',
                      }}
                    >
                      Galería Visual
                    </h4>
                    <Gallery images={pedImages} title="Galería del Eje Pedagógico" cols={3} />
                  </div>
                </section>
              )}
            </div>

            {/* TERAPÉUTICO */}
            {expandedEje === 'terapeutico' && (
              <section aria-labelledby="eje-terapeutico">
                <h3
                  id="eje-terapeutico"
                  style={{
                    fontFamily: '"Archivo", sans-serif',
                    fontWeight: 800,
                    fontSize: 'clamp(22px,3.2vw,28px)',
                    margin: '0 0 16px',
                    color: '#731425',
                    textAlign: 'center',
                  }}
                >
                  EJE TERAPÉUTICO
                </h3>

                <div
                  style={{
                    background: 'linear-gradient(to bottom, #FAFAFA, #FFFFFF)',
                    border: '1px solid #E8E8E8',
                    borderRadius: 14,
                    padding: '18px 20px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                  }}
                >
                  <p
                    style={{
                      marginTop: 0,
                      color: '#555',
                      lineHeight: 1.7,
                      fontSize: '1rem',
                      textAlign: 'justify',
                    }}
                  >
                    Cuerpo y mente son inseparables. Mi enfoque integra técnicas somáticas (AFCMD,
                    somato-psicopedagogía de Denis Bois, Laban, Bartenieff, Pilates) y
                    Danza-Movimiento-Terapia.
                  </p>

                  <h4 style={{ margin: '12px 0 6px', color: '#111', textAlign: 'center' }}>
                    Experiencia clínica
                  </h4>
                  <p style={{ marginTop: 0, textAlign: 'center' }}>
                    Acompañamientos individuales y colectivos en:
                  </p>
                  <ul style={{ margin: 0, paddingLeft: 18 }}>
                    <li>centros de día, hogares de vida, hospitales</li>
                    <li>centros para personas con autismo y centros parentales</li>
                    <li>contextos de vulnerabilidad social</li>
                  </ul>

                  <h4 style={{ margin: '12px 0 6px', color: '#111', textAlign: 'center' }}>
                    Especializaciones
                  </h4>
                  <ul style={{ margin: 0, paddingLeft: 18, textAlign: 'center' }}>
                    <li>primera infancia y parentalidad</li>
                    <li>personas autistas</li>
                    <li>mujeres en situación de precariedad</li>
                  </ul>
                </div>

                {/* GALERÍA DEL EJE TERAPÉUTICO */}
                <div style={{ marginTop: 24 }}>
                  <h4
                    style={{
                      margin: '0 0 14px',
                      color: '#731425',
                      fontWeight: 700,
                      fontSize: '0.95rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      textAlign: 'center',
                    }}
                  >
                    Galería Visual
                  </h4>
                  <Gallery images={therImages} title="Galería del Eje Terapéutico" cols={3} />
                </div>
              </section>
            )}

            {/* MovidaProject - Solo aparece con terapeutico expandido */}
            {expandedEje === 'terapeutico' && (
              <section aria-labelledby="movida-project" style={{ marginTop: '20px' }}>
                <h4
                  id="movida-project"
                  style={{
                    margin: '0 0 12px',
                    color: '#731425',
                    fontFamily: '"Archivo", sans-serif',
                    fontWeight: 800,
                    fontSize: 'clamp(16px,2.4vw,20px)',
                    textAlign: 'center',
                  }}
                >
                  MovidaProject
                </h4>
                <div
                  style={{
                    background: 'linear-gradient(to bottom, #FAFAFA, #FFFFFF)',
                    border: '1px solid #E8E8E8',
                    borderRadius: 14,
                    padding: '16px 18px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                  }}
                >
                  <p
                    style={{
                      marginTop: 0,
                      color: '#555',
                      lineHeight: 1.7,
                      fontSize: '0.95rem',
                      textAlign: 'center',
                    }}
                  >
                    Un espacio entre danza y cuidado (Care), con talleres accesibles para todxs.
                    Marco empático y sin juicio, donde el movimiento es herramienta de atención,
                    conexión y disfrute. No ofrece atención terapéutica.
                  </p>
                  <p
                    style={{
                      margin: '10px 0 0',
                      color: '#555',
                      fontSize: '0.95rem',
                      textAlign: 'center',
                    }}
                  >
                    Más info:{' '}
                    <a
                      href="https://www.movidaproject.com"
                      target="_blank"
                      rel="noreferrer"
                      style={{ color: '#731425', fontWeight: 600, textDecoration: 'underline' }}
                    >
                      www.movidaproject.com
                    </a>
                  </p>
                </div>
              </section>
            )}

            {/* Entrenamiento y consciencia corporal - Solo aparece con terapeutico expandido */}
            {expandedEje === 'terapeutico' && (
              <section aria-labelledby="entrenamiento" style={{ marginTop: '20px' }}>
                <h4
                  id="entrenamiento"
                  style={{
                    margin: '0 0 12px',
                    color: '#731425',
                    fontFamily: '"Archivo", sans-serif',
                    fontWeight: 800,
                    fontSize: 'clamp(16px,2.4vw,20px)',
                    textAlign: 'center',
                  }}
                >
                  Entrenamiento y consciencia corporal
                </h4>
                <div
                  style={{
                    background: 'linear-gradient(to bottom, #FAFAFA, #FFFFFF)',
                    border: '1px solid #E8E8E8',
                    borderRadius: 14,
                    padding: '16px 18px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                  }}
                >
                  <p
                    style={{
                      marginTop: 0,
                      color: '#555',
                      lineHeight: 1.7,
                      fontSize: '0.95rem',
                      textAlign: 'center',
                    }}
                  >
                    Curso que fusiona danza, técnicas somáticas (Pilates, Yoga, AFCMD, Bartenieff) y
                    anatomía. Tres niveles:
                  </p>
                  <ul
                    style={{ margin: '8px 0', paddingLeft: 20, color: '#555', textAlign: 'center' }}
                  >
                    <li>
                      <strong>Avanzado:</strong> de pie + colchoneta, intensidad alta, saltos,
                      fortalecimiento
                    </li>
                    <li>
                      <strong>Intermedio:</strong> de pie + colchoneta, intensidad media, sin
                      impacto
                    </li>
                    <li>
                      <strong>Tercera y Cuarta edad:</strong> silla + de pie (suave) o de pie +
                      colchoneta (moderado)
                    </li>
                  </ul>
                  <p style={{ marginTop: 10, color: '#555', fontSize: '0.95rem' }}>
                    Se trabajan fuerza, flexibilidad, enraizamiento y consciencia corporal con
                    pedagogía progresiva.
                  </p>
                </div>
              </section>
            )}

            {/* Danza en familia - Solo aparece con terapeutico expandido */}
            {expandedEje === 'terapeutico' && (
              <section aria-labelledby="danza-familia" style={{ marginTop: '20px' }}>
                <h4
                  id="danza-familia"
                  style={{
                    margin: '0 0 12px',
                    color: '#731425',
                    fontFamily: '"Archivo", sans-serif',
                    fontWeight: 800,
                    fontSize: 'clamp(16px,2.4vw,20px)',
                    textAlign: 'center',
                  }}
                >
                  Danza en familia
                </h4>
                <div
                  style={{
                    background: 'linear-gradient(to bottom, #FAFAFA, #FFFFFF)',
                    border: '1px solid #E8E8E8',
                    borderRadius: 14,
                    padding: '16px 18px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                  }}
                >
                  <p
                    style={{
                      marginTop: 0,
                      color: '#555',
                      lineHeight: 1.7,
                      fontSize: '0.95rem',
                      textAlign: 'center',
                    }}
                  >
                    Talleres para compartir el movimiento con bebés o niñxs pequeñxs. Refuerza el
                    vínculo adulto-infante desde el cuerpo, en un ambiente seguro y lúdico.
                  </p>
                  <p
                    style={{
                      margin: '10px 0 0',
                      color: '#555',
                      fontSize: '0.95rem',
                      textAlign: 'center',
                    }}
                  >
                    Inicié este trabajo en 2005 (Bolivia), comprendiendo la importancia del vínculo
                    temprano, la estimulación sensorial y la continuidad mente-cuerpo.
                  </p>
                </div>
              </section>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

export default memo(MisEjes);
