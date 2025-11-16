// src/components/Seo.jsx
import PropTypes from 'prop-types';
import { useEffect } from 'react';

function ensureMeta(selector, attrs) {
  let tag = document.querySelector(selector);
  if (!tag) {
    tag = document.createElement('meta');
    Object.entries(attrs).forEach(([k, v]) => tag.setAttribute(k, v));
    document.head.appendChild(tag);
  }
  return tag;
}

export default function Seo({ title, description, lang = 'es', meta = [] }) {
  useEffect(() => {
    // <html lang="...">
    if (lang) document.documentElement.setAttribute('lang', lang);

    // <title> (guardar y restaurar)
    const prevTitle = document.title;
    if (title) document.title = title;

    // Descripción + OG básicos
    if (description) {
      const desc = ensureMeta('meta[name="description"]', { name: 'description' });
      desc.setAttribute('content', description);

      const ogTitle = ensureMeta('meta[property="og:title"]', { property: 'og:title' });
      ogTitle.setAttribute('content', title || prevTitle);

      const ogDesc = ensureMeta('meta[property="og:description"]', { property: 'og:description' });
      ogDesc.setAttribute('content', description);
    }

    // Meta extra: [{ name:'robots', content:'index,follow' }, { property:'og:image', content:'...' }]
    meta.forEach((m) => {
      const key = m.name ? 'name' : 'property';
      const value = m.name || m.property;
      if (!value) return;
      const tag = ensureMeta(`meta[${key}="${value}"]`, { [key]: value });
      if (m.content) tag.setAttribute('content', m.content);
    });

    return () => {
      document.title = prevTitle;
    };
  }, [title, description, lang, meta]);

  return null;
}

Seo.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      property: PropTypes.string,
      content: PropTypes.string,
    })
  ),
};

Seo.defaultProps = {
  title: undefined,
  description: undefined,
  lang: 'es',
  meta: [],
};
