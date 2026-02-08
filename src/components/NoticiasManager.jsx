import { Alert,Box, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

import { logger } from '../lib/logger';
import { saveNoticia } from '../managers/noticiasManager';
import { deleteNoticia,getNoticias } from '../services/noticiasService';
import NoticiaForm from './NoticiaForm';
import NoticiasList from './NoticiasList';

const NoticiasManager = () => {
  const [noticias, setNoticias] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [editingId, setEditingId] = useState(null);

  const fetchNoticias = async () => {
    setLoading(true);
    setError('');
    try {
      const data = await getNoticias();
      setNoticias(data || []);
      logger.info('Noticias cargadas', { cantidad: data?.length });
    } catch (err) {
      logger.error('Error cargando noticias', err);
      setError(err?.message || 'No se pudieron cargar las noticias.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNoticias();
  }, []);

  const handleSave = async (payload, id = null, imagenFile = null) => {
    try {
      console.log('Guardando noticia:', { payload, id, imagenFile });  // Log para debugging
      const noticia = await saveNoticia(payload, id, imagenFile);

      setNoticias((prev) => {
        if (id) {
          return prev.map((n) => (n.id === id ? noticia : n));
        }
        return [noticia, ...prev];
      });

      setEditingId(null);
      return noticia;
    } catch (err) {
      console.error('Error en handleSave:', err);  // Log para debugging
      throw err;
    }
  };

  const handleDelete = async (id) => {
    if (!id) return;
    try {
      await deleteNoticia(id);
      setNoticias((prev) => prev.filter((n) => n.id !== id));
      logger.info('Noticia eliminada', { id });
    } catch (err) {
      logger.error('Error eliminando noticia', err);
      setError(err?.message || 'No se pudo eliminar la noticia.');
    }
  };

  const handleEdit = (id) => {
    setEditingId(id);
  };

  return (
    <Box sx={{ maxWidth: 800, mx: 'auto', py: 4 }}>
      <Typography variant="h4" sx={{ mb: 3 }}>
        Gestión de Noticias
      </Typography>

      {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}

      <NoticiaForm
        noticiaId={editingId}
        onSave={handleSave}
      />

      <Box sx={{ mt: 4 }}>
        {loading ? (
          <Alert severity="info">Cargando noticias...</Alert>
        ) : (
          <NoticiasList
            noticias={noticias}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        )}
      </Box>
    </Box>
  );
};

export default NoticiasManager;