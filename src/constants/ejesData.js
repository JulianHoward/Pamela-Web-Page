// src/constants/ejesData.js

export const EJE_DATA = Object.freeze({
  // ────────────────────────────── TERAPÉUTICO ──────────────────────────────
  terapeutico: Object.freeze({
    emoji: '💠',
    titulo: 'Eje Terapéutico',
    descripcion:
      'Danza-Movimiento-Terapia y procesos de acompañamiento sensibles e integrales.',
    imagenes: Object.freeze([
      '/assets/ejes/terapeutico/terapuetico (1).webp',
      '/assets/ejes/terapeutico/terapuetico (2).webp',
      '/assets/ejes/terapeutico/terapuetico (3).webp',
      '/assets/ejes/terapeutico/terapuetico (4).webp',
      '/assets/ejes/terapeutico/terapuetico (5).webp',
      '/assets/ejes/terapeutico/terapuetico (6).webp',
      '/assets/ejes/terapeutico/terapuetico (7).webp',
      '/assets/ejes/terapeutico/terapuetico (8).webp',
    ]),
    data: Object.freeze({
      titulo: 'EJE TERAPÉUTICO – Cuidar en movimiento',
      resumen:
        'Cuerpo y mente son inseparables: técnicas somáticas (AFCMD, Laban/Bartenieff, etc.) y Danza-Movimiento-Terapia.',
      bloques: Object.freeze([
        Object.freeze({
          titulo: 'Experiencia clínica (individual y grupal)',
          lista: Object.freeze([
            'Centros de día, hogares de vida, hospitales',
            'Centros para personas con autismo y centros parentales',
            'Contextos de vulnerabilidad social',
          ]),
        }),
        Object.freeze({
          titulo: 'Especializaciones',
          lista: Object.freeze([
            'Primera infancia y parentalidad',
            'Personas autistas',
            'Mujeres en situación de precariedad',
          ]),
        }),
      ]),
    }),
  }),

  // ────────────────────────────── ARTÍSTICO ──────────────────────────────
  artistico: Object.freeze({
    emoji: '🎭',
    titulo: 'Eje Artístico',
    descripcion: 'Creación, performance y dirección artística con enfoque inclusivo.',
    imagenes: Object.freeze([
      '/assets/ejes/artistico/artistico (1).webp',
      '/assets/ejes/artistico/artistico (2).webp',
      '/assets/ejes/artistico/artistico (3).webp',
      '/assets/ejes/artistico/artistico (4).webp',
      '/assets/ejes/artistico/artistico (5).webp',
      '/assets/ejes/artistico/artistico (6).webp',
      '/assets/ejes/artistico/artistico (7).webp',
    ]),
    data: Object.freeze({
      titulo: 'EJE ARTÍSTICO – Bailarina y Coreógrafa',
      resumen: 'Práctica coreográfica sensible, inclusiva y en diálogo con lo vivo.',
      bloques: Object.freeze([
        Object.freeze({
          titulo: 'Trayectoria (selección)',
          lista: Object.freeze([
            'Cie. Regards en Lignes — bailarina',
            'Handidanse — bailarina y coreógrafa',
            'Cie. Wild Souls — bailarina y performer',
            'Ballet Municipal de Sucre — bailarina/profesora/coreógrafa',
          ]),
        }),
        Object.freeze({
          titulo: 'Proyectos propios',
          lista: Object.freeze([
            'LesDansesPartagées — Encuentro Coreográfico anual',
            'Anim’Halles — colectivo amateur intergeneracional',
            'La petite graine — espectáculo para 0–3 años',
            'Hermanas — creación en curso (tradicional+contemporánea)',
          ]),
        }),
      ]),
    }),
  }),

  // ────────────────────────────── PEDAGÓGICO / FORMATIVO ──────────────────────────────
  pedagogico: Object.freeze({
    emoji: '📚',
    titulo: 'Eje Pedagógico',
    descripcion:
      'Clases, formaciones y transmisión en instituciones y comunidad.',
    imagenes: Object.freeze([
      '/assets/ejes/pedagogico/pedagogico (1).webp',
      '/assets/ejes/pedagogico/pedagogico (2).webp',
      '/assets/ejes/pedagogico/pedagogico (3).webp',
    ]),
    data: Object.freeze({
      titulo: 'EJE PEDAGÓGICO – Transmitir de otra manera',
      resumen: 'Pedagogía viva e inclusiva; técnica, sensibilidad y apertura a la diversidad.',
      bloques: Object.freeze([
        Object.freeze({
          titulo: 'Niñxs y adolescencia',
          lista: Object.freeze(['Desarrollo integral con la danza como mediación']),
        }),
        Object.freeze({
          titulo: 'Adultxs',
          lista: Object.freeze(['Técnica + creación; exploración poética del movimiento']),
        }),
        Object.freeze({
          titulo: 'Intervenciones',
          lista: Object.freeze(['EAC (medio educativo)', 'Formaciones específicas y talleres']),
        }),
      ]),
    }),
  }),
});
