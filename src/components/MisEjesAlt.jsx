import React, { useEffect,useState } from 'react';

import Gallery from './ui/Gallery';

const HEADER_H = 64;

// --- imágenes existentes ---
const artImages = [
  '/assets/ejes/artistico/foto Waldo Maluenda (3)-convertido-de-jpg.webp',
  '/assets/ejes/artistico/foto Waldo Maluenda-convertido-de-jpg.webp',
  '/assets/ejes/artistico/bailarina en paris-convertido-de-jpg.webp',
  '/assets/ejes/artistico/Handidanse-convertido-de-jpg.webp',
  '/assets/ejes/artistico/hermanas - coreografia Pamela Paniagua-convertido-de-jpg.webp',
  '/assets/ejes/artistico/LesDansesPartagées 3ème édition-convertido-de-jpg.webp',
  '/assets/ejes/artistico/wild souls foto de BatVision-convertido-de-jpg.webp',
];

const pedImages = [
  '/assets/ejes/pedagogico/cours de danse contemporaine (3)-convertido-de-PNG.webp',
  '/assets/ejes/pedagogico/DSC_8400-convertido-de-jpg.webp',
  '/assets/ejes/pedagogico/DSC_8402-convertido-de-jpg.webp',
];

const therImages = [
  '/assets/ejes/terapeutico/_JME3113_LR-BorderMaker-convertido-de-jpg.webp',
  '/assets/ejes/terapeutico/_JME3115_LR-BorderMaker-convertido-de-jpg.webp',
  '/assets/ejes/terapeutico/_JME3128_LR-BorderMaker-convertido-de-jpg.webp',
  '/assets/ejes/terapeutico/_JME3269_LR-BorderMaker-convertido-de-jpg.webp',
  '/assets/ejes/terapeutico/_JME3458_LR-BorderMaker-convertido-de-jpg.webp',
  '/assets/ejes/terapeutico/_JME3683_LRnb-BorderMaker-convertido-de-jpg.webp',
  '/assets/ejes/terapeutico/danse et handicap 2-redacted_dot_app-convertido-de-jpg.webp',
  '/assets/ejes/terapeutico/DMT (2)-convertido-de-jpg.webp',
];

// --- Subvistas: reuso del contenido que ya tenías (recortado a lo esencial) ---
function ArtisticoView() {
  return (
    <div>
      <h3 style={titleH3}>🎭 EJE ARTÍSTICO – Bailarina y Coreógrafa</h3>
      <p style={pBody}>
        Desarrollo una práctica coreográfica sensible, inclusiva y anclada en lo vivo, explorando la
        danza como un espacio de encuentro y creación colectiva.
      </p>

      <div style={card}>
        <p style={cardTitle}>He trabajado como bailarina y/o asistente coreográfica con:</p>
        <ul style={ulBody}>
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

      <div style={card}>
        <p style={cardTitle}>Proyectos propios:</p>
        <ul style={ulBody}>
          <li>
            <strong>LesDansesPartagées:</strong> encuentro coreográfico anual (6 ediciones, la
            primera en Sucre).
          </li>
          <li>
            <strong>Anim’Halles:</strong> colectivo amateur intergeneracional (Mycelium, Ayni, En
            invierno…, Piezas sueltas…).
          </li>
          <li>
            <strong>La petite graine:</strong> espectáculo para bebés (0–3), en gira por París.
          </li>
          <li>
            <strong>Hermanas:</strong> creación en curso (tradicional boliviana + contemporánea).
          </li>
        </ul>
      </div>

      <div style={{ marginTop: 12 }}>
        <Gallery images={artImages} title="Galería del Eje Artístico" cols={3} />
      </div>
    </div>
  );
}

function PedagogicoView() {
  return (
    <div>
      <h3 style={titleH3}>📚 EJE PEDAGÓGICO – Transmitir de otra manera</h3>
      <div style={{ color: '#222', lineHeight: 1.75 }}>
        <p style={{ marginTop: 0 }}>
          <strong>Maestra de Danza Contemporánea.</strong> Diploma Estatal (RIDC) y acreditación del
          Ministerio de Educación francés.
        </p>
        <p>
          Combino técnica, sensibilidad y apertura a la diversidad, integrando la riqueza de las
          danzas tradicionales a la contemporánea.
        </p>
        <h4 style={h4}>Para niñxs</h4>
        <p>
          Cursos de descubrimiento e iniciación que preservan el placer de bailar y estimulan la
          creatividad.
        </p>
        <h4 style={h4}>Para adultxs</h4>
        <p>Técnica al servicio de la poética y la creación.</p>
        <h4 style={h4}>Trabajo en</h4>
        <ul style={{ margin: 0, paddingLeft: 18 }}>
          <li>Escuelas públicas (EAC)</li>
          <li>Escuelas de danza</li>
          <li>Centros culturales / animación de la Alcaldía de París</li>
        </ul>
        <p style={{ marginTop: 8 }}>Enseño desde Inicial hasta 2.º Ciclo.</p>
        <hr style={{ border: 0, borderTop: '1px solid #E5E7EB', margin: '14px 0' }} />
        <h4 style={h4}>Formadora / Intervenciones especiales</h4>
        <ul style={{ margin: 0, paddingLeft: 18 }}>
          <li>Danza y diversidad funcional</li>
          <li>Introducción a la Danza-Movimiento-Terapia</li>
          <li>Pedagogía aplicada a la danza</li>
        </ul>
      </div>

      <div style={{ marginTop: 12 }}>
        <Gallery images={pedImages} title="Galería del Eje Pedagógico" cols={3} />
      </div>
    </div>
  );
}

function TerapeuticoView() {
  return (
    <div>
      <h3 style={titleH3}>💠 EJE TERAPÉUTICO – Cuidar en movimiento</h3>
      <div style={card}>
        <p style={{ marginTop: 0, color: '#374151', lineHeight: 1.7 }}>
          Cuerpo y mente son inseparables. Integro técnicas somáticas (AFCMD, somato-psicopedagogía,
          Laban, Bartenieff, Pilates) y Danza-Movimiento-Terapia.
        </p>
        <h4 style={h4}>Experiencia clínica</h4>
        <ul style={ulBody}>
          <li>centros de día, hogares de vida, hospitales</li>
          <li>centros para personas con autismo y centros parentales</li>
          <li>contextos de vulnerabilidad social</li>
        </ul>
        <h4 style={h4}>Especializaciones</h4>
        <ul style={ulBody}>
          <li>primera infancia y parentalidad</li>
          <li>personas autistas</li>
          <li>mujeres en situación de precariedad</li>
        </ul>
      </div>

      <div style={{ marginTop: 12 }}>
        <Gallery images={therImages} title="Galería del Eje Terapéutico" cols={3} />
      </div>
    </div>
  );
}

// --- Componente principal alternativo ---
export default function MisEjesAlt() {
  const [tab, setTab] = useState('artistico');

  // al cambiar de tab, hacemos un pequeño scroll al inicio del detalle
  useEffect(() => {
    const el = document.getElementById('axes');
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - (HEADER_H + 8);
    window.scrollTo({ top, behavior: 'smooth' });
  }, [tab]);

  return (
    <section
      id="axes"
      style={{
        backgroundColor: '#F8F4F1',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        padding: '20px 0 28px',
        scrollMarginTop: HEADER_H + 8,
      }}
    >
      <div style={{ width: 'min(1100px, 92vw)', margin: '0 auto' }}>
        <header style={{ marginBottom: 'clamp(16px,3vw,22px)' }}>
          <h2 style={titleH2}>Mis ejes de trabajo</h2>
          <p style={{ margin: '8px 0 0', color: '#374151', lineHeight: 1.6 }}>
            Hoy en día, mi trabajo se organiza en torno a tres ejes complementarios:
          </p>
        </header>

        {/* Botonera / Tabs */}
        <div
          role="tablist"
          aria-label="Ejes de trabajo"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 'clamp(10px,2vw,16px)',
            marginBottom: 'clamp(16px,3vw,22px)',
          }}
        >
          {[
            { id: 'artistico', emoji: '🎭', label: 'Artístico' },
            { id: 'pedagogico', emoji: '📚', label: 'Pedagógico' },
            { id: 'terapeutico', emoji: '💠', label: 'Terapéutico' },
          ].map(({ id, emoji, label }) => {
            const active = tab === id;
            return (
              <button
                key={id}
                role="tab"
                aria-selected={active}
                aria-controls={`panel-${id}`}
                onClick={() => setTab(id)}
                style={{
                  cursor: 'pointer',
                  padding: '14px 16px',
                  borderRadius: 12,
                  border: active ? '2px solid #731425' : '1px solid #E5E7EB',
                  background: active ? '#fff' : '#FFFFFF',
                  boxShadow: active
                    ? '0 8px 20px rgba(115,20,37,0.12)'
                    : '0 6px 16px rgba(0,0,0,0.06)',
                  fontFamily: '"Archivo", sans-serif',
                  fontWeight: 800,
                  color: '#111',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 10,
                  transition: 'all .2s',
                }}
              >
                <span aria-hidden>{emoji}</span>
                {label}
              </button>
            );
          })}
        </div>

        {/* Panel de contenido (muestra solo el activo) */}
        <div
          id={`panel-${tab}`}
          role="tabpanel"
          aria-labelledby={tab}
          style={{
            background: '#fff',
            border: '1px solid #E5E7EB',
            borderRadius: 14,
            padding: '18px 18px',
            boxShadow: '0 8px 24px rgba(0,0,0,0.06)',
            transition: 'opacity .25s ease',
          }}
        >
          {tab === 'artistico' && <ArtisticoView />}
          {tab === 'pedagogico' && <PedagogicoView />}
          {tab === 'terapeutico' && <TerapeuticoView />}
        </div>
      </div>

      {/* Responsive */}
      <style>{`
        @media (max-width: 920px) {
          [role="tablist"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

// --- estilos reutilizables ---
const titleH2 = {
  fontFamily: '"Archivo", sans-serif',
  fontWeight: 800,
  fontSize: 'clamp(26px, 4vw, 40px)',
  margin: 0,
  color: '#111',
};
const titleH3 = {
  fontFamily: '"Archivo", sans-serif',
  fontWeight: 800,
  fontSize: 'clamp(20px,3vw,26px)',
  margin: '0 0 8px',
  color: '#111',
  display: 'flex',
  gap: 8,
  alignItems: 'center',
};
const h4 = { margin: '12px 0 6px', color: '#111' };
const pBody = { marginTop: 0, color: '#374151', lineHeight: 1.7 };
const ulBody = { margin: 0, paddingLeft: 18, color: '#374151', lineHeight: 1.6 };
const card = {
  background: '#FFFFFF',
  border: '1px solid #E5E7EB',
  borderRadius: 12,
  padding: '14px 16px',
  boxShadow: '0 4px 14px rgba(0,0,0,0.05)',
  marginBottom: 12,
};
const cardTitle = { margin: '0 0 8px', color: '#111', fontWeight: 700 };
