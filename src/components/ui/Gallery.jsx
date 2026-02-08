// src/components/ui/Gallery.jsx
import { memo, useCallback, useEffect, useState } from 'react';

import { logger } from './../../lib/logger';

const cell = {
  borderRadius: 12,
  overflow: 'hidden',
  boxShadow: '0 8px 18px rgba(0,0,0,0.06)',
  background: '#fff',
  cursor: 'zoom-in',
};

function Gallery({ images = [], title, cols = 3 }) {
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);

  const close = useCallback(() => setOpen(false), []);
  const openAt = useCallback((i) => {
    setIdx(i);
    setOpen(true);
  }, []);
  const prev = useCallback(
    () => setIdx((n) => (n - 1 + images.length) % images.length),
    [images.length]
  );
  const next = useCallback(
    () => setIdx((n) => (n + 1) % images.length),
    [images.length]
  );

  // Accesibilidad con teclado
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, close, prev, next]);

  if (!images?.length) {
    logger.warn('Gallery: no se recibieron imágenes');
    return null;
  }

  return (
    <div>
      {title && (
        <h4
          style={{
            margin: '0 0 10px',
            color: '#111',
            fontFamily: '"Archivo", sans-serif',
          }}
        >
          {title}
        </h4>
      )}

      {/* GRID */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${cols}, 1fr)`,
          gap: 12,
        }}
      >
        {images.map((src, i) => (
          <button
            key={`${src}-${i}`}
            onClick={() => openAt(i)}
            aria-label={`Abrir imagen ${i + 1} de ${images.length}`}
            style={{ ...cell, padding: 0, border: 'none' }}
          >
            <img
              src={src}
              alt={`Imagen ${i + 1} de la galería ${title || ''}`}
              loading="lazy"
              decoding="async"
              style={{
                width: '100%',
                height: '100%',
                display: 'block',
                objectFit: 'cover',
              }}
            />
          </button>
        ))}
      </div>

      {/* LIGHTBOX */}
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.85)',
            display: 'grid',
            gridTemplateRows: 'auto 1fr auto',
            zIndex: 9999,
          }}
          onClick={close}
        >
          {/* top bar */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', padding: 10 }}>
            <button
              onClick={(e) => {
                e.stopPropagation();
                close();
              }}
              aria-label="Cerrar"
              style={{
                background: 'transparent',
                color: '#fff',
                border: '1px solid rgba(255,255,255,0.4)',
                borderRadius: 999,
                padding: '6px 10px',
                cursor: 'pointer',
              }}
            >
              ✕
            </button>
          </div>

          {/* image */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{ display: 'grid', placeItems: 'center', padding: 12 }}
          >
            <img
              src={images[idx]}
              alt={`Imagen ${idx + 1} ampliada de la galería ${title || ''}`}
              style={{ maxWidth: '92vw', maxHeight: '80vh', borderRadius: 12 }}
              decoding="async"
            />
          </div>

          {/* controls */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '10px 16px',
            }}
          >
            <button
              onClick={prev}
              aria-label="Anterior"
              style={{
                background: 'transparent',
                color: '#fff',
                border: 'none',
                fontSize: 24,
                cursor: 'pointer',
              }}
            >
              ‹
            </button>
            <span style={{ color: '#fff', fontSize: 14 }}>
              {idx + 1} / {images.length}
            </span>
            <button
              onClick={next}
              aria-label="Siguiente"
              style={{
                background: 'transparent',
                color: '#fff',
                border: 'none',
                fontSize: 24,
                cursor: 'pointer',
              }}
            >
              ›
            </button>
          </div>
        </div>
      )}

      {/* responsive */}
      <style>{`
        @media (max-width: 920px) {
          .gallery-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}

export default memo(Gallery);
