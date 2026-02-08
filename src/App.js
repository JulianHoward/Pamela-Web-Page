// src/App.js
import { Alert, Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Contacto from './components/Contacto';
import Header from './components/Header';
import Inicio from './components/Inicio';
import LoginForm from './components/LoginForm';
import MisEjes from './components/MisEjes';
import MiTrayectoria from './components/MiTrayectoria';
import NoticiaForm from './components/NoticiaForm';
import NoticiasList from './components/NoticiasList';
import ProtectedRoute from './components/ProtectedRoute';
import Seo from './components/Seo';
import { LanguageProvider } from './contexts/LanguageContext';
import { checkSession } from './services/authService';
import {
  createNoticia,
  deleteNoticia,
  getNoticias,
  updateNoticia,
  uploadImagenNoticia,
} from './services/noticiasService';



function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [noticias, setNoticias] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [saveError, setSaveError] = useState('');

  // Verifica sesión al montar
  useEffect(() => {
    const verifySession = async () => {
      try {
        const user = await checkSession();
        setIsLoggedIn(!!user);
      } catch {
        setIsLoggedIn(false);
      }
    };
    verifySession();
  }, []);

  // Carga noticias cuando hay sesión activa
  useEffect(() => {
    if (!isLoggedIn) return;
    const fetchNoticias = async () => {
      try {
        const data = await getNoticias();
        setNoticias(data);
      } catch (err) {
        console.error('Error al cargar noticias:', err);
      }
    };
    fetchNoticias();
  }, [isLoggedIn]);

  const handleLoginSuccess = () => setIsLoggedIn(true);

  const handleLogout = async () => {
    setIsLoggedIn(false);
    setIsFormVisible(false);
    setEditingId(null);
    setSaveError('');
  };

  const handleEdit = (id) => {
    setEditingId(id);
    setIsFormVisible(true);
    setSaveError('');
  };

  const handleDelete = async (id) => {
    try {
      await deleteNoticia(id);
      setNoticias(noticias.filter((n) => n.id !== id));
    } catch (err) {
      console.error('Error al eliminar:', err);
    }
  };

  const toggleForm = () => {
    setEditingId(null);
    setIsFormVisible((v) => !v);
    setSaveError('');
  };

  const handleSave = async (newNoticia, currentEditingId, imagenFile) => {
  const idToUse = currentEditingId || editingId;

  try {
    setSaveError('');

    if (idToUse) {
      // 🟡 Si se está editando una noticia
      await updateNoticia(idToUse, newNoticia);

      // Si se seleccionó una nueva imagen, actualizarla por separado
      if (imagenFile) {
        await uploadImagenNoticia(idToUse, imagenFile);
      }
    } else {
      // 🟢 Si se está creando una nueva noticia
      await createNoticia(newNoticia, imagenFile);
    }

    const refreshed = await getNoticias();
    setNoticias(refreshed);
    setIsFormVisible(false);
    setEditingId(null);
  } catch (err) {
    const msg = err?.response?.data?.message || err?.message || 'Error al guardar la noticia.';
    setSaveError(msg);
    throw err;
  }
};


  return (
    <Router>
      <LanguageProvider>
        <Seo title="Pamela Paniagua - Danza y Terapia" description="Pamela Paniagua, Artista coreográfica, Pedagoga, Danza-Movimiento-Terapeuta" />
        <Header isLoggedIn={isLoggedIn} onLogout={handleLogout} />

        <Routes>
            {/* PÁGINA PÚBLICA: todas las secciones */}
            <Route
              path="/"
              element={
                <>
                  <Inicio />
                  <MiTrayectoria />
                  <MisEjes />
                  <NoticiasList noticias={noticias} />
                  <Contacto />
                </>
              }
            />

            {/* Página pública de noticias */}
            <Route path="/noticias" element={<NoticiasList noticias={noticias} />} />

            {/* LOGIN */}
            <Route path="/login" element={<LoginForm onLoginSuccess={handleLoginSuccess} />} />

            {/* ADMIN PROTEGIDO */}
            <Route
              path="/admin/noticias"
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn}>
                  <div style={{ margin: '20px' }}>
                    <h2>Administrar Noticias</h2>

                    <Button variant="outlined" color="primary" onClick={toggleForm} sx={{ mb: 2 }}>
                      {isFormVisible ? 'Cerrar formulario' : 'Crear Nueva Noticia'}
                    </Button>

                    {isFormVisible && (
                      <div style={{ margin: '10px 0' }}>
                        {saveError && (
                          <Alert severity="error" sx={{ mb: 2 }}>
                            {saveError}
                          </Alert>
                        )}
                        <NoticiaForm noticiaId={editingId} onSave={handleSave} />
                      </div>
                    )}

                    <NoticiasList noticias={noticias} onEdit={handleEdit} onDelete={handleDelete} />

                    <Button variant="text" color="secondary" onClick={handleLogout} sx={{ mt: 2 }}>
                      Cerrar sesión
                    </Button>
                  </div>
                </ProtectedRoute>
              }
            />
          </Routes>
        </LanguageProvider>
      </Router>
    );
  }

export default App;
