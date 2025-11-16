// src/hooks/useScrollToAnchor.js
import { useEffect } from 'react';

/**
 * Desplaza suavemente hacia un #anchor respetando un offset (ej. header fijo).
 * - Aplica al hash inicial y a clicks en <a href="#...">.
 * - Conserva el hash en la barra sin recargar la página.
 *
 * @param {number} headerOffset Altura del header en px (ej. 64). Se suma 8px de respiro.
 */
export default function useScrollToAnchor(headerOffset = 64) {
  useEffect(() => {
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const offset = Number(headerOffset || 0) + 8;

    const scrollToHash = (hash, { push = false } = {}) => {
      if (!hash || hash === '#') return;
      const id = hash.startsWith('#') ? hash.slice(1) : hash;
      const el = document.getElementById(id);
      if (!el) return;

      const y = el.getBoundingClientRect().top + window.pageYOffset - offset;
      if (push) {
        // Actualiza la barra sin recargar
        window.history.pushState(null, '', `#${id}`);
      }
      window.scrollTo({
        top: Math.max(0, y),
        behavior: prefersReduced ? 'auto' : 'smooth',
      });

      // Accesibilidad: da foco si es enfocables
      if (typeof el.focus === 'function') {
        el.setAttribute('tabindex', el.getAttribute('tabindex') ?? '-1');
        el.focus({ preventScroll: true });
      }
    };

    // 1) Scroll inicial si ya hay hash en la URL
    if (window.location.hash) {
      // pequeño defer para asegurar layout listo
      requestAnimationFrame(() => scrollToHash(window.location.hash));
    }

    // 2) Maneja clicks en anchors internos
    const onClick = (e) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) {
        return;
      }
      const anchor = e.target.closest?.('a[href^="#"]');
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      if (!href) return;

      e.preventDefault();
      scrollToHash(href, { push: true });
    };

    // 3) Responde a cambios de hash externos (back/forward)
    const onHashChange = () => scrollToHash(window.location.hash);

    document.addEventListener('click', onClick);
    window.addEventListener('hashchange', onHashChange);

    return () => {
      document.removeEventListener('click', onClick);
      window.removeEventListener('hashchange', onHashChange);
    };
  }, [headerOffset]);
}
