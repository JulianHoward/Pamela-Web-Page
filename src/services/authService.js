// src/services/authService.js
import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_URL || 'https://pamela-backend-1.onrender.com/api';

if (!process.env.REACT_APP_API_URL) {
  console.warn('⚠️ REACT_APP_API_URL no definida, usando https://pamela-backend-1.onrender.com/api');
}

// Cliente axios compartido para auth (cookies de sesión)
const authApi = axios.create({
  baseURL: BASE_URL,
  withCredentials: true, // envía/recibe cookie de sesión
  headers: {
    'Content-Type': 'application/json', // importante para login cross-site
  },
});

/**
 * Inicia sesión con usuario/contraseña.
 * Espera que el backend emita una cookie de sesión (Set-Cookie).
 */
export async function login(username, password) {
  const { data } = await authApi.post(
    '/auth/login',
    { username, password },
    { withCredentials: true, headers: { 'Content-Type': 'application/json' } }
  );
  return data?.user ?? null;
}

/**
 * Cierra sesión (invalida cookie en el backend si existe endpoint).
 */
export async function logout() {
  try {
    await authApi.post('/auth/logout', {}, { withCredentials: true });
  } catch {
    // si el backend no tiene /auth/logout, lo ignoramos
  }
}

/**
 * Obtiene el usuario autenticado (si la cookie de sesión es válida).
 */
export async function getCurrentUser() {
  try {
    const { data } = await authApi.get('/auth/me', { withCredentials: true });
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
