// src/services/authService.js
import axios from 'axios';

/**
 * Base URL:
 * - En CRA define REACT_APP_API_URL (ej: http://localhost:3000/api)
 * - Fallback a localhost si no está definida.
 * - Evitamos 'process' directo para que no marque no-undef en ESLint del browser.
 */
const BASE_URL =
  (typeof globalThis !== 'undefined' &&
    globalThis?.process?.env?.REACT_APP_API_URL) ||
  'http://localhost:3000/api';

// Cliente axios compartido para auth (cookies de sesión)
const authApi = axios.create({
  baseURL: BASE_URL,
  withCredentials: true, // envía/recibe cookie de sesión
});

/**
 * Inicia sesión con usuario/contraseña.
 * Espera que el backend emita una cookie de sesión (Set-Cookie).
 * @returns {Promise<Object|null>} user
 */
export async function login(username, password) {
  const { data } = await authApi.post('/auth/login', { username, password });
  return data?.user ?? null;
}

/**
 * Cierra sesión (invalida cookie en el backend si existe endpoint).
 */
export async function logout() {
  try {
    await authApi.post('/auth/logout');
  } catch {
    // si el backend no tiene /auth/logout, lo ignoramos
  }
}

/**
 * Obtiene el usuario autenticado (si la cookie de sesión es válida).
 * @returns {Promise<Object|null>}
 */
export async function getCurrentUser() {
  try {
    const { data } = await authApi.get('/auth/me');
    return data?.user ?? null;
  } catch {
    return null;
  }
}

/**
 * Alias semántico usado en App.js
 */
export async function checkSession() {
  return getCurrentUser();
}
