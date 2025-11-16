// src/components/MisEjes.jsx
import { EJE_DATA } from '../constants/ejesData';
import Gallery from './ui/Gallery';
import { memo } from 'react';

const HEADER_H = 64;

// Imágenes desde constants (fallback a arrays vacíos si no existen)
const artImages = EJE_DATA?.artistico?.imagenes ?? [];
const pedImages =
  EJE_DATA?.formativo?.imagenes ??
  EJE_DATA?.pedagogico?.imagenes ??
  [];
const therImages = EJE_DATA?.terapeutico?.imagenes ?? [];

function MisEjes() {
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
            Mis ejes de trabajo
          </h2>
          <p style={{ margin: '8px 0 0', color: '#374151', lineHeight: 1.6 }}>
            Hoy en día, mi trabajo se organiza en torno a tres ejes complementarios:
          </p>
        </header>

        {/* 3 Tarjetas resumen */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 'clamp(12px,2.5vw,20px)',
            marginBottom: 'clamp(18px,3vw,28px)',
          }}
        >
          {/* Artístico */}
          <div
            style={{
              background: '#FFFFFF',
              border: '1px solid #E5E7EB',
              borderRadius: 12,
              padding: '16px 18px',
              boxShadow: '0 6px 18px rgba(0,0,0,0.06)',
            }}
          >
            <h3
              style={{
                fontFamily: '"Archivo", sans-serif',
                fontWeight: 800,
                fontSize: 'clamp(18px,2.6vw,22px)',
                margin: '0 0 8px',
                color: '#111',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
              }}
            >
              <span aria-hidden>{EJE_DATA?.artistico?.emoji ?? '🎭'}</span> Eje Artístico
            </h3>
            <p style={{ margin: 0, color: '#374151' }}>
              {EJE_DATA?.artistico?.descripcion ??
                'Creaciones escénicas inclusivas, dirección artística e interpretación.'}
            </p>
          </div>

          {/* Pedagógico/Formativo */}
          <div
            style={{
              background: '#FFFFFF',
              border: '1px solid #E5E7EB',
              borderRadius: 12,
              padding: '16px 18px',
              boxShadow: '0 6px 18px rgba(0,0,0,0.06)',
            }}
          >
            <h3
              style={{
                fontFamily: '"Archivo", sans-serif',
                fontWeight: 800,
                fontSize: 'clamp(18px,2.6vw,22px)',
                margin: '0 0 8px',
                color: '#111',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
              }}
            >
              <span aria-hidden>
                {EJE_DATA?.formativo?.emoji ?? EJE_DATA?.pedagogico?.emoji ?? '📚'}
              </span>{' '}
              Eje Pedagógico
            </h3>
            <p style={{ margin: 0, color: '#374151' }}>
              {EJE_DATA?.formativo?.descripcion ??
                EJE_DATA?.pedagogico?.descripcion ??
                'Clases para todas las edades, formaciones, talleres EAC y transmisión en instituciones.'}
            </p>
          </div>

          {/* Terapéutico */}
          <div
            style={{
              background: '#FFFFFF',
              border: '1px solid #E5E7EB',
              borderRadius: 12,
              padding: '16px 18px',
              boxShadow: '0 6px 18px rgba(0,0,0,0.06)',
            }}
          >
            <h3
              style={{
                fontFamily: '"Archivo", sans-serif',
                fontWeight: 800,
                fontSize: 'clamp(18px,2.6vw,22px)',
                margin: '0 0 8px',
                color: '#111',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
              }}
            >
              <span aria-hidden>{EJE_DATA?.terapeutico?.emoji ?? '💠'}</span> Eje Terapéutico
            </h3>
            <p style={{ margin: 0, color: '#374151' }}>
              {EJE_DATA?.terapeutico?.descripcion ??
                'Danza-Movimiento-Terapia: acompañamientos individuales y grupales, y proyectos con estructuras médico-sociales.'}
            </p>
          </div>
        </div>

        {/* Párrafo puente */}
        <div
          style={{
            borderLeft: '4px solid #731425',
            paddingLeft: 16,
            marginBottom: 'clamp(16px,3vw,22px)',
          }}
        >
          <p style={{ margin: 0, color: '#222', lineHeight: 1.75 }}>
            La danza es el hilo conductor alrededor del cual he podido diversificar mis prácticas.
            Mi interés por las diferentes dimensiones de la danza me ha proporcionado una caja de
            herramientas amplia y sólida, útil tanto para el trabajo artístico como para el trabajo
            de acompañamiento y transmisión. Para mí, la danza es un espacio de emancipación, de
            poesía y de cuidado donde cada persona tiene su lugar. Una danza conectada con las
            luchas, las historias y las vibraciones de cada cuerpo.
          </p>
        </div>

        {/* ---- Desarrollo por Ejes ---- */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 0.9fr',
            gap: 'clamp(18px,3vw,34px)',
          }}
        >
          {/* COLUMNA PRINCIPAL: Artístico + Pedagógico */}
          <div style={{ display: 'grid', gap: 18 }}>
            {/* ARTÍSTICO */}
            <section aria-labelledby="eje-artistico">
              <h3
                id="eje-artistico"
                style={{
                  fontFamily: '"Archivo", sans-serif',
                  fontWeight: 800,
                  fontSize: 'clamp(20px,3vw,26px)',
                  margin: '0 0 8px',
                  color: '#111',
                  display: 'flex',
                  gap: 8,
                  alignItems: 'center',
                }}
              >
                {EJE_DATA?.artistico?.emoji ?? '🎭'} EJE ARTÍSTICO – Bailarina y Coreógrafa
              </h3>
              <p style={{ marginTop: 0, color: '#374151', lineHeight: 1.7 }}>
                Desarrollo una práctica coreográfica sensible, inclusiva y anclada en lo vivo,
                explorando la danza como un espacio de encuentro y creación colectiva.
              </p>

              <div
                style={{
                  background: '#FFFFFF',
                  border: '1px solid #E5E7EB',
                  borderRadius: 12,
                  padding: '14px 16px',
                  boxShadow: '0 4px 14px rgba(0,0,0,0.05)',
                  marginBottom: 12,
                }}
              >
                <p style={{ margin: '0 0 8px', color: '#111', fontWeight: 700 }}>
                  He trabajado como bailarina y/o asistente coreográfica con:
                </p>
                <ul style={{ margin: 0, paddingLeft: 18, color: '#374151', lineHeight: 1.6 }}>
                  <li>Cie. Regards en Lignes – bailarina</li>
                  <li>Handidanse – bailarina y coreógrafa</li>
                  <li>Cie. Les Ouvreurs des Possibles – performer y artista coreográfica</li>
                  <li>La Fine Compagnie – bailarina</li>
                  <li>Cie. Afrokadanse – bailarina</li>
                  <li>Cie. Corps Pluriel – bailarina</li>
                  <li>Grupo Batuk Nago – bailarina</li>
                  <li>Cie. Wild Souls – bailarina y performer</li>
                  <li>Ballet Municipal de Sucre (Bolivia) – bailarina, profesora y coreógrafa</li>
                </ul>
              </div>

              <div
                style={{
                  background: '#FFFFFF',
                  border: '1px solid #E5E7EB',
                  borderRadius: 12,
                  padding: '14px 16px',
                  boxShadow: '0 4px 14px rgba(0,0,0,0.05)',
                }}
              >
                <p style={{ margin: '0 0 8px', color: '#111', fontWeight: 700 }}>
                  También soy creadora e impulsora de proyectos propios:
                </p>
                <ul style={{ margin: 0, paddingLeft: 18, color: '#374151', lineHeight: 1.6 }}>
                  <li>
                    <strong>LesDansesPartagées:</strong> Encuentro Coreográfico anual que reúne a
                    grupos diversos de bailarines. 6 versiones. La primera en Sucre-Bolivia.
                  </li>
                  <li>
                    <strong>Anim’Halles:</strong> colectivo amateur intergeneracional (creaciones:
                    Mycelium, Ayni, En invierno se ve mejor el río, Piezas sueltas…).
                  </li>
                  <li>
                    <strong>La petite graine:</strong> espectáculo para bebés de 0 a 3 años, en gira
                    en París.
                  </li>
                  <li>
                    <strong>Hermanas:</strong> creación en curso entre danzas tradicionales
                    bolivianas y contemporánea.
                  </li>
                </ul>
                <p style={{ marginTop: 10, color: '#374151' }}>
                  Actualmente doy forma a mi propia compañía, un espacio que articula creación,
                  investigación en danzas tradicionales y contemporáneas, danza y <em>Care</em>,
                  trabajo inclusivo y transmisión intergeneracional.
                </p>
              </div>

              {/* GALERÍA DEL EJE ARTÍSTICO */}
              <div style={{ marginTop: 12 }}>
                <Gallery images={artImages} title="Galería del Eje Artístico" cols={3} />
              </div>
            </section>

            {/* PEDAGÓGICO */}
            <section aria-labelledby="eje-pedagogico">
              <h3
                id="eje-pedagogico"
                style={{
                  fontFamily: '"Archivo", sans-serif',
                  fontWeight: 800,
                  fontSize: 'clamp(20px,3vw,26px)',
                  margin: '12px 0 8px',
                  color: '#111',
                  display: 'flex',
                  gap: 8,
                  alignItems: 'center',
                }}
              >
                {(EJE_DATA?.formativo?.emoji ?? EJE_DATA?.pedagogico?.emoji) || '📚'} EJE
                PEDAGÓGICO – Transmitir de otra manera
              </h3>

              <div style={{ color: '#222', lineHeight: 1.75 }}>
                <p style={{ marginTop: 0 }}>
                  <strong>Maestra de Danza Contemporánea.</strong> Diploma Estatal (RIDC) del
                  Ministerio de Cultura. Acreditada por el Ministerio de Educación Nacional francés
                  para intervenciones artísticas en el medio educativo.
                </p>
                <p>
                  Mi labor pedagógica combina técnica, sensibilidad y apertura a la diversidad. Como
                  latinoamericana, incorporo la riqueza de las danzas tradicionales a la danza
                  contemporánea y a la exploración corporal de manera viva y sensible.
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
                  Intervenciones en: GRETA Hauts de Seine, Instituto Profesional Free Dance Song,
                  Conservatorios de Sèvres y Meudon, Centro Terapéutico Sol en Casa, Escuela
                  Bailarte… Tutora de prácticas para estudiantes universitarios.
                </p>
              </div>

              {/* GALERÍA DEL EJE PEDAGÓGICO */}
              <div style={{ marginTop: 12 }}>
                <Gallery images={pedImages} title="Galería del Eje Pedagógico" cols={3} />
              </div>
            </section>
          </div>

          {/* COLUMNA LATERAL: Terapéutico, MovidaProject, Entrenamiento, Danza en familia */}
          <aside style={{ display: 'grid', gap: 18, alignContent: 'start' }}>
            {/* TERAPÉUTICO */}
            <section aria-labelledby="eje-terapeutico">
              <h3
                id="eje-terapeutico"
                style={{
                  fontFamily: '"Archivo", sans-serif',
                  fontWeight: 800,
                  fontSize: 'clamp(20px,3vw,26px)',
                  margin: '0 0 8px',
                  color: '#111',
                  display: 'flex',
                  gap: 8,
                  alignItems: 'center',
                }}
              >
                {EJE_DATA?.terapeutico?.emoji ?? '💠'} EJE TERAPÉUTICO – Cuidar en movimiento
              </h3>

              <div
                style={{
                  background: '#FFFFFF',
                  border: '1px solid #E5E7EB',
                  borderRadius: 12,
                  padding: '14px 16px',
                  boxShadow: '0 4px 14px rgba(0,0,0,0.05)',
                }}
              >
                <p style={{ marginTop: 0, color: '#374151', lineHeight: 1.7 }}>
                  Cuerpo y mente son inseparables. Mi enfoque integra técnicas somáticas (AFCMD,
                  somato-psicopedagogía de Denis Bois, Laban, Bartenieff, Pilates) y
                  Danza-Movimiento-Terapia.
                </p>

                <h4 style={{ margin: '12px 0 6px', color: '#111' }}>Experiencia clínica</h4>
                <p style={{ marginTop: 0 }}>Acompañamientos individuales y colectivos en:</p>
                <ul style={{ margin: 0, paddingLeft: 18 }}>
                  <li>centros de día, hogares de vida, hospitales</li>
                  <li>centros para personas con autismo y centros parentales</li>
                  <li>contextos de vulnerabilidad social</li>
                </ul>

                <h4 style={{ margin: '12px 0 6px', color: '#111' }}>Especializaciones</h4>
                <ul style={{ margin: 0, paddingLeft: 18 }}>
                  <li>primera infancia y parentalidad</li>
                  <li>personas autistas</li>
                  <li>mujeres en situación de precariedad</li>
                </ul>
              </div>

              {/* GALERÍA DEL EJE TERAPÉUTICO */}
              <div style={{ marginTop: 12 }}>
                <Gallery images={therImages} title="Galería del Eje Terapéutico" cols={3} />
              </div>
            </section>

            {/* MovidaProject */}
            <section aria-labelledby="movida-project">
              <h4
                id="movida-project"
                style={{
                  margin: '6px 0 8px',
                  color: '#111',
                  fontFamily: '"Archivo", sans-serif',
                  fontWeight: 800,
                  fontSize: 'clamp(16px,2.4vw,20px)',
                }}
              >
                MovidaProject
              </h4>
              <div
                style={{
                  background: '#FFFFFF',
                  border: '1px solid #E5E7EB',
                  borderRadius: 12,
                  padding: '14px 16px',
                  boxShadow: '0 4px 14px rgba(0,0,0,0.05)',
                }}
              >
                <p style={{ marginTop: 0, color: '#374151', lineHeight: 1.7 }}>
                  Un espacio entre danza y cuidado (Care), con talleres accesibles para todxs. Marco
                  empático y sin juicio, donde el movimiento es herramienta de atención, conexión y
                  disfrute. No ofrece atención terapéutica.
                </p>
                <p style={{ margin: 0 }}>
                  🌐 Más info:{' '}
                  <a
                    href="https://www.movidaproject.com"
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: '#731425', textDecoration: 'underline' }}
                  >
                    www.movidaproject.com
                  </a>
                </p>
              </div>
            </section>

            {/* Entrenamiento y consciencia corporal */}
            <section aria-labelledby="entrenamiento">
              <h4
                id="entrenamiento"
                style={{
                  margin: '6px 0 8px',
                  color: '#111',
                  fontFamily: '"Archivo", sans-serif',
                  fontWeight: 800,
                  fontSize: 'clamp(16px,2.4vw,20px)',
                }}
              >
                Entrenamiento y consciencia corporal
              </h4>
              <div
                style={{
                  background: '#FFFFFF',
                  border: '1px solid #E5E7EB',
                  borderRadius: 12,
                  padding: '14px 16px',
                  boxShadow: '0 4px 14px rgba(0,0,0,0.05)',
                }}
              >
                <p style={{ marginTop: 0, color: '#374151', lineHeight: 1.7 }}>
                  Curso que fusiona danza, técnicas somáticas (Pilates, Yoga, AFCMD, Bartenieff) y
                  anatomía. Tres niveles:
                </p>
                <ul style={{ margin: 0, paddingLeft: 18 }}>
                  <li>
                    <strong>Avanzado:</strong> de pie + colchoneta, intensidad alta, saltos,
                    fortalecimiento
                  </li>
                  <li>
                    <strong>Intermedio:</strong> de pie + colchoneta, intensidad media, sin impacto
                  </li>
                  <li>
                    <strong>Tercera y Cuarta edad:</strong> silla + de pie (suave) o de pie +
                    colchoneta (moderado)
                  </li>
                </ul>
                <p style={{ marginTop: 8, color: '#374151' }}>
                  Se trabajan fuerza, flexibilidad, enraizamiento y consciencia corporal con
                  pedagogía progresiva.
                </p>
              </div>
            </section>

            {/* Danza en familia */}
            <section aria-labelledby="danza-familia">
              <h4
                id="danza-familia"
                style={{
                  margin: '6px 0 8px',
                  color: '#111',
                  fontFamily: '"Archivo", sans-serif',
                  fontWeight: 800,
                  fontSize: 'clamp(16px,2.4vw,20px)',
                }}
              >
                Danza en familia
              </h4>
              <div
                style={{
                  background: '#FFFFFF',
                  border: '1px solid #E5E7EB',
                  borderRadius: 12,
                  padding: '14px 16px',
                  boxShadow: '0 4px 14px rgba(0,0,0,0.05)',
                }}
              >
                <p style={{ marginTop: 0, color: '#374151', lineHeight: 1.7 }}>
                  Talleres para compartir el movimiento con bebés o niñxs pequeñxs. Refuerza el
                  vínculo adulto-infante desde el cuerpo, en un ambiente seguro y lúdico.
                </p>
                <p style={{ margin: 0, color: '#374151' }}>
                  Inicié este trabajo en 2005 (Bolivia), comprendiendo la importancia del vínculo
                  temprano, la estimulación sensorial y la continuidad mente-cuerpo.
                </p>
              </div>
            </section>
          </aside>
        </div>
      </div>

      {/* Responsive */}
      <style>{`
        @media (max-width: 920px) {
          #axes > div > div:nth-of-type(3) {
            grid-template-columns: 1fr !important;
          }
          #axes > div > div:nth-of-type(2) {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

export default memo(MisEjes);
