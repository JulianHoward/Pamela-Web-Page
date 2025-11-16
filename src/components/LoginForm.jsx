// src/components/LoginForm.jsx
import { logger } from '../lib/logger';
import { Alert, Box, Button, CircularProgress,Stack, TextField } from '@mui/material';
import { login } from '../services/authService';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
      // Si tu backend espera "email", usa emailOrUser como email.
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
        maxWidth: 400,
        mx: 'auto',
        mt: 4,
        p: 3,
        borderRadius: 2,
        border: '1px solid #E5E7EB',
        background: '#fff',
        boxShadow: '0 6px 16px rgba(0,0,0,0.04)',
      }}
    >
      <Stack spacing={2}>
        <h2 style={{ margin: 0 }}>Login Admin</h2>

        {error && <Alert severity="error">{error}</Alert>}

        <TextField
          label="Email o usuario"
          value={emailOrUser}
          onChange={(e) => setEmailOrUser(e.target.value)}
          autoComplete="username email"
          disabled={submitting}
          fullWidth
          required
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
        />

        <Button type="submit" variant="contained" disabled={!canSubmit} fullWidth>
          {submitting ? <CircularProgress size={22} /> : 'Ingresar'}
        </Button>
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
