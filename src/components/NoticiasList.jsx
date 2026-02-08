import { Box, Button, Card, CardContent, CardMedia, Grid, Stack, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { memo, useMemo } from 'react';

import { useLanguage } from '../hooks/useLanguage';

function NoticiasList({ noticias = [], onEdit, onDelete }) {
  const { t } = useLanguage();
  // Normalizamos la lista de noticias
  const list = useMemo(() => {
    if (!Array.isArray(noticias)) return [];
    return noticias.map((n, idx) => ({
      id: n.id ?? n._id ?? n.uuid ?? `row-${idx}`,
      titulo: n.titulo ?? n.title ?? 'Sin título',
      contenido: n.contenido ?? n.descripcion ?? '',
      fecha: n.fecha ?? n.createdAt ?? n.updatedAt ?? null,
      imagen: n.imagen || n.imagen_url || null,
    }));
  }, [noticias]);

  const handleDeleteClick = async (id) => {
    if (onDelete) await onDelete(id);
  };

  if (!list.length) {
    return (
      <Box sx={{ py: 4, px: 2, maxWidth: 1200, mx: 'auto' }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 800,
            textAlign: 'center',
            mb: 2,
            fontFamily: '"Archivo", sans-serif',
          }}
        >
          {t.noticias.titulo}
        </Typography>
        <Typography variant="body1" sx={{ textAlign: 'center' }}>
          {t.noticias.vacio}
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ py: 4, px: 2, maxWidth: 1200, mx: 'auto' }}>
      <Typography
        variant="h4"
        sx={{
          fontWeight: 800,
          textAlign: 'center',
          mb: 4,
          fontFamily: '"Archivo", sans-serif',
        }}
      >
        {t.noticias.titulo}
      </Typography>

      <Grid container spacing={4}>
        {list.map((n) => (
          <Grid item xs={12} sm={6} md={4} key={n.id}>
            <Card>
              {n.imagen && (
                <CardMedia
                  component="img"
                  height="300"
                  image={n.imagen}
                  alt={n.titulo}
                  sx={{ objectFit: 'contain', border: '1px solid red' }}
                />
              )}
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography
                  variant="h6"
                  component="h2"
                  gutterBottom
                  sx={{ fontWeight: 700, textAlign: 'center' }}
                >
                  {n.titulo}
                </Typography>
                {n.fecha && (
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    display="block"
                    textAlign="center"
                    gutterBottom
                  >
                    {new Date(n.fecha).toLocaleDateString()}
                  </Typography>
                )}
                <Typography
                  variant="body2"
                  sx={{ whiteSpace: 'pre-line', mt: 1.5, textAlign: 'justify' }}
                >
                  {n.contenido}
                </Typography>
              </CardContent>

              {(onEdit || onDelete) && (
                <Stack direction="row" spacing={1} sx={{ p: 2, justifyContent: 'center' }}>
                  {onEdit && (
                    <Button size="small" variant="outlined" onClick={() => onEdit(n.id)}>
                      Editar
                    </Button>
                  )}
                  {onDelete && (
                    <Button
                      size="small"
                      color="error"
                      variant="contained"
                      onClick={() => handleDeleteClick(n.id)}
                    >
                      Eliminar
                    </Button>
                  )}
                </Stack>
              )}
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

NoticiasList.propTypes = {
  noticias: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      _id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      uuid: PropTypes.string,
      titulo: PropTypes.string,
      title: PropTypes.string,
      contenido: PropTypes.string,
      descripcion: PropTypes.string,
      fecha: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.instanceOf(Date)]),
      createdAt: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      updatedAt: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      imagen_url: PropTypes.string,
      imagen: PropTypes.string,
      imagenUrl: PropTypes.string,
    })
  ),
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,
};

NoticiasList.defaultProps = {
  noticias: [],
  onEdit: undefined,
  onDelete: undefined,
};

export default memo(NoticiasList);
