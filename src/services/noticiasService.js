import axios from 'axios';

import { logger } from '../lib/logger';

const BASE_URL =
  (typeof globalThis !== 'undefined' &&
    globalThis?.process?.env?.REACT_APP_API_URL) ||
  'http://localhost:3000/api';

const api = axios.create({
  baseURL: `${BASE_URL}/noticias`,
  withCredentials: true, // usamos cookie de sesión
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

export async function getNoticias() {
  try {
    const { data } = await api.get('/');
    return parseList(data).map(mapNoticia);
  } catch (err) {
    logger.error('getNoticias failed', err);
    throw new Error(err?.response?.data?.message || 'No se pudieron obtener las noticias.');
  }
}

export async function getNoticiaById(id) {
  try {
    const { data } = await api.get(`/${id}`);
    return mapNoticia(data);
  } catch (err) {
    logger.error('getNoticiaById failed', err);
    throw new Error(err?.response?.data?.message || 'No se pudo obtener la noticia.');
  }
}

export async function updateNoticia(id, payload) {
  try {
    const { data } = await api.put(`/${id}`, payload);
    return mapNoticia(data);
  } catch (err) {
    logger.error('updateNoticia failed', err);
    throw new Error(err?.response?.data?.message || 'No se pudo actualizar la noticia.');
  }
}

export async function deleteNoticia(id) {
  try {
    await api.delete(`/${id}`);
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

    const { data } = await api.post(`/${id}/imagen`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });

    return mapNoticia(data);
  } catch (err) {
    logger.error('uploadImagenNoticia failed', err);
    throw new Error(err?.response?.data?.message || 'No se pudo subir la imagen.');
  }
}

export async function createNoticiaWithImage(payload, imagenFile = null) {
  try {
    const formData = new FormData();
    formData.append('titulo', payload.titulo);
    formData.append('contenido', payload.contenido);
    if (imagenFile) {
      formData.append('imagen', imagenFile);
    }
    const { data } = await api.post('/', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return mapNoticia(data);
  } catch (err) {
    logger.error('createNoticiaWithImage failed', err);
    throw new Error(err?.response?.data?.message || 'No se pudo crear la noticia.');
  }
}

export async function createNoticia(payload, imagenFile = null) {
  if (imagenFile) {
    return createNoticiaWithImage(payload, imagenFile);
  }
  try {
    const { data } = await api.post('/', payload);
    return mapNoticia(data);
  } catch (err) {
    logger.error('createNoticia failed', err);
    throw new Error(err?.response?.data?.message || 'No se pudo crear la noticia.');
  }
}
