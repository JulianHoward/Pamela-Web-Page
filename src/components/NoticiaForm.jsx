import { Alert, Box, Button, LinearProgress,Stack, TextField } from '@mui/material';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import { getNoticiaById } from '../services/noticiasService';

const NoticiaForm = ({ noticiaId = null, onSave }) => {
  const [titulo, setTitulo] = useState('');
  const [contenido, setContenido] = useState('');
  const [imagenFile, setImagenFile] = useState(null);
  const [imagenPreview, setImagenPreview] = useState(null);
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [loading, setLoading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  const isEditMode = !!noticiaId;
  const actionText = isEditMode ? 'Actualizar' : 'Crear';
  const buttonLabel = submitting ? 'Guardando…' : `${actionText} Noticia`;

  // Carga noticia si estamos en modo edición
  useEffect(() => {
    const fetchNoticia = async () => {
      if (!noticiaId) return;

      setLoading(true);
      setError('');
      try {
        const data = await getNoticiaById(noticiaId);
        if (data) {
          setTitulo(data.titulo || '');
          setContenido(data.contenido || '');
          setImagenPreview(data.imagen || null);
        } else {
          setError('Noticia no encontrada.');
        }
      } catch (err) {
        setError('Error al cargar la noticia.');
      } finally {
        setLoading(false);
      }
    };

    fetchNoticia();
  }, [noticiaId]);

  // Manejar selección de archivo
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setImagenFile(file);
    setImagenPreview(URL.createObjectURL(file));
  };

  // Envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (submitting) return;

    if (!titulo.trim() || !contenido.trim()) {
      setError('Completa título y contenido.');
      return;
    }

    setSubmitting(true);
    setError('');

    try {
      // Llamamos a onSave pasando el payload y el archivo de imagen
      const payload = { titulo: titulo.trim(), contenido: contenido.trim() };
      const noticiaGuardada = await onSave(payload, noticiaId, imagenFile);

      // Actualizar preview con la URL final de la imagen
      setImagenPreview(noticiaGuardada.imagen || null);

      // Limpiar formulario si estamos creando
      if (!isEditMode) {
        setTitulo('');
        setContenido('');
        setImagenFile(null);
        setImagenPreview(null);
        setUploadProgress(0);
      }
    } catch (err) {
      setError(err?.response?.data?.message || err?.message || 'Error al guardar la noticia.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ maxWidth: 600 }}>
      <Stack spacing={2}>
        {loading && <Alert severity="info">Cargando noticia...</Alert>}
        {error && <Alert severity="error">{error}</Alert>}

        <TextField
          label="Título"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          fullWidth
          required
          disabled={submitting || loading}
          placeholder={isEditMode ? 'Edita el título' : 'Ingresa el título de la nueva noticia'}
        />

        <TextField
          label="Contenido"
          value={contenido}
          onChange={(e) => setContenido(e.target.value)}
          fullWidth
          multiline
          rows={4}
          required
          disabled={submitting || loading}
          placeholder={isEditMode ? 'Edita el contenido' : 'Ingresa el contenido de la nueva noticia'}
        />

        <Button variant="outlined" component="label">
          {imagenFile ? 'Cambiar imagen' : 'Subir imagen'}
          <input type="file" hidden accept="image/*" onChange={handleFileChange} />
        </Button>

        {imagenPreview && (
          <Box sx={{ mt: 1 }}>
            <img src={imagenPreview} alt="preview" style={{ maxWidth: '100%' }} />
          </Box>
        )}

        {uploadProgress > 0 && uploadProgress < 100 && (
          <LinearProgress variant="determinate" value={uploadProgress} />
        )}

        <Button
          variant="contained"
          color="primary"
          type="submit"
          disabled={submitting || loading || !titulo.trim() || !contenido.trim()}
          fullWidth
        >
          {buttonLabel}
        </Button>
      </Stack>
    </Box>
  );
};

NoticiaForm.propTypes = {
  noticiaId: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.oneOf([null])]),
  onSave: PropTypes.func.isRequired,
};

NoticiaForm.defaultProps = {
  noticiaId: null,
};

export default NoticiaForm;
