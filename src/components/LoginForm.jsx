// src/components/LoginForm.jsx
import { Alert, Box, Button, CircularProgress, Stack, TextField, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { logger } from '../lib/logger';
import { login } from '../services/authService';

export default function LoginForm({ onLoginSuccess }) {
  const [emailOrUser, setEmailOrUser] = useState('');
  const [password, setPassword] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const canSubmit = emailOrUser.trim() && password.trim() && !submitting;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!canSubmit) return;
    setSubmitting(true);
    setError('');

    try {
      await login(emailOrUser.trim(), password.trim());
      logger.info('Login OK');
      onLoginSuccess?.();
      navigate('/admin/noticias', { replace: true });
    } catch (err) {
      const msg = err?.message || 'No se pudo iniciar sesión.';
      setError(msg);
      logger.error('Login failed', err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      noValidate
      sx={{
        width: '100%',
        maxWidth: { xs: '100%', sm: 400 }, // Ocupa todo el ancho en móvil
        mx: 'auto',
        // En móvil, reducimos el margen superior para evitar scroll innecesario
        mt: { xs: 2, sm: 6, md: 8 }, 
        // En mobile quitamos bordes y sombras pesadas para un look "flat" más limpio
        p: { xs: 3, sm: 4 }, 
        borderRadius: { xs: 0, sm: 4 }, // Esquinas rectas en móvil para simular pantalla completa
        border: { xs: 'none', sm: '1px solid #E5E7EB' },
        background: '#fff',
        boxShadow: { xs: 'none', sm: '0 10px 25px rgba(0,0,0,0.05)' },
      }}
    >
      <Stack spacing={3}>
        <Box sx={{ mb: 1 }}>
          <Typography 
            variant="h5" 
            component="h1" 
            sx={{ 
              fontWeight: 800, 
              textAlign: 'center', 
              fontFamily: '"Archivo", sans-serif',
              color: '#111',
              fontSize: { xs: '1.5rem', sm: '1.75rem' }
            }}
          >
            Administración
          </Typography>
          <Typography 
            variant="body2" 
            sx={{ textAlign: 'center', color: '#6B7280', mt: 1 }}
          >
            Ingresa tus credenciales para continuar
          </Typography>
        </Box>

        {error && (
          <Alert severity="error" sx={{ borderRadius: 2, fontSize: '0.875rem' }}>
            {error}
          </Alert>
        )}

        <TextField
          label="Email o usuario"
          value={emailOrUser}
          onChange={(e) => setEmailOrUser(e.target.value)}
          autoComplete="username email"
          disabled={submitting}
          fullWidth
          required
          variant="outlined"
          // Importante: 16px evita el zoom automático en iOS
          inputProps={{ style: { fontSize: '16px' } }} 
          InputLabelProps={{ style: { fontSize: '15px' } }}
        />

        <TextField
          label="Contraseña"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
          disabled={submitting}
          fullWidth
          required
          variant="outlined"
          inputProps={{ style: { fontSize: '16px' } }}
          InputLabelProps={{ style: { fontSize: '15px' } }}
        />

        <Button 
          type="submit" 
          variant="contained" 
          disabled={!canSubmit} 
          fullWidth
          size="large" // Material UI ajusta el padding automáticamente para táctiles
          sx={{
            py: 2, // Extra padding para facilitar el toque con el pulgar
            backgroundColor: '#731425',
            borderRadius: 2,
            fontWeight: 700,
            textTransform: 'none',
            fontSize: '1rem',
            boxShadow: '0 4px 12px rgba(115, 20, 37, 0.2)',
            '&:hover': {
              backgroundColor: '#5a0f1d',
            },
            '&.Mui-disabled': {
              backgroundColor: '#E5E7EB',
            }
          }}
        >
          {submitting ? (
            <CircularProgress size={26} sx={{ color: 'rgba(255,255,255,0.7)' }} />
          ) : (
            'Ingresar ahora'
          )}
        </Button>

        <Typography 
          variant="caption" 
          sx={{ textAlign: 'center', color: '#9CA3AF', mt: 2 }}
        >
          Sistema de acceso restringido
        </Typography>
      </Stack>
    </Box>
  );
}

LoginForm.propTypes = {
  onLoginSuccess: PropTypes.func,
};

LoginForm.defaultProps = {
  onLoginSuccess: undefined,
};