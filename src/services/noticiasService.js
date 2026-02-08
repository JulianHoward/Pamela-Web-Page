// services/noticiasService.js
import axios from 'axios';
import { logger } from '../lib/logger';

const BASE_URL =
  (typeof globalThis !== 'undefined' &&
    globalThis?.process?.env?.REACT_APP_API_URL) ||
  'http://localhost:3000/api';

// Instancia para llamadas públicas (GET)
const publicApi = axios.create({
  baseURL: `${BASE_URL}/noticias`,
});

// Instancia para llamadas privadas (POST, PUT, DELETE, upload)
// Esta sí envía cookies de sesión
const privateApi = axios.create({
  baseURL: `${BASE_URL}/noticias`,
  withCredentials: true,
});

// ----------------------- Helpers -----------------------
const mapNoticia = (n) => ({
  id: n.id ?? n._id ?? n.uuid ?? String(n.id || n._id || ''),
  titulo: n.titulo ?? n.title ?? '',
  contenido: n.contenido ?? n.descripcion ?? '',
  imagen: n.imagen ?? n.imagen_url ?? n.imagenUrl ?? null,
  fecha: n.fecha ?? n.createdAt ?? n.updatedAt ?? null,
});

const parseList = (data) => (Array.isArray(data) ? data : data?.items ?? []);

// ----------------------- API ---------------------------

// GET públicas
export async function getNoticias() {
  try {
    const { data } = await publicApi.get('/');
    return parseList(data).map(mapNoticia);
  } catch (err) {
    logger.error('getNoticias failed', err);
    throw new Error(err?.response?.data?.message || 'No se pudieron obtener las noticias.');
  }
}

export async function getNoticiaById(id) {
  try {
    const { data } = await publicApi.get(`/${id}`);
    return mapNoticia(data);
  } catch (err) {
    logger.error('getNoticiaById failed', err);
    throw new Error(err?.response?.data?.message || 'No se pudo obtener la noticia.');
  }
}

// POST, PUT, DELETE privadas (requieren sesión)
export async function createNoticia(payload, imagenFile = null) {
  try {
    if (imagenFile) {
      const formData = new FormData();
      formData.append('titulo', payload.titulo);
      formData.append('contenido', payload.contenido);
      formData.append('imagen', imagenFile);

      const { data } = await privateApi.post('/', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      return mapNoticia(data);
    } else {
      const { data } = await privateApi.post('/', payload);
      return mapNoticia(data);
    }
  } catch (err) {
    logger.error('createNoticia failed', err);
    throw new Error(err?.response?.data?.message || 'No se pudo crear la noticia.');
  }
}

export async function updateNoticia(id, payload) {
  try {
    const { data } = await privateApi.put(`/${id}`, payload);
    return mapNoticia(data);
  } catch (err) {
    logger.error('updateNoticia failed', err);
    throw new Error(err?.response?.data?.message || 'No se pudo actualizar la noticia.');
  }
}

export async function deleteNoticia(id) {
  try {
    await privateApi.delete(`/${id}`);
    return true;
  } catch (err) {
    logger.error('deleteNoticia failed', err);
    throw new Error(err?.response?.data?.message || 'No se pudo eliminar la noticia.');
  }
}

export async function uploadImagenNoticia(id, file) {
  try {
    const formData = new FormData();
    formData.append('imagen', file);

    const { data } = await privateApi.post(`/${id}/imagen`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return mapNoticia(data);
  } catch (err) {
    logger.error('uploadImagenNoticia failed', err);
    throw new Error(err?.response?.data?.message || 'No se pudo subir la imagen.');
  }
}
