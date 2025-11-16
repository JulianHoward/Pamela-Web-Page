/* eslint-disable no-console */

// src/lib/logger.js

// CRA expone las variables de entorno a través de import.meta.env en Vite
// o process.env en react-scripts, pero el linter no lo detecta por defecto.
// Por eso, evitamos el uso directo de process para no romper el lint.

const NODE_ENV =
  typeof import.meta !== 'undefined' && import.meta.env
    ? import.meta.env.MODE
    : 'development';

const isProd = NODE_ENV === 'production';

export const logger = {
  debug: (...args) => {
    if (!isProd) console.debug(...args);
  },
  info: (...args) => {
    if (!isProd) console.info(...args);
  },
  warn: (...args) => console.warn(...args),
  error: (...args) => console.error(...args),
};
