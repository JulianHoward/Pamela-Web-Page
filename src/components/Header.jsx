// src/components/Header.jsx
import {
  AppBar,
  Box,
  Button,
  Divider,
  ToggleButton,
  ToggleButtonGroup,
  Toolbar,
  Typography,
} from '@mui/material';
import { memo, useCallback, useEffect, useRef, useState } from 'react';

import { useLanguage } from '../hooks/useLanguage';

const navItemsConfig = [
  { key: 'inicio', id: 'home' },
  { key: 'trayectoria', id: 'trajectory' },
  { key: 'ejes', id: 'axes' },
  { key: 'noticias', id: 'news' },
  { key: 'galeria', id: 'gallery' },
  { key: 'contacto', id: 'contact' },
];

function Header() {
  const barRef = useRef(null);
  const [headerH, setHeaderH] = useState(64);
  const [active, setActive] = useState('home');
  const { language, changeLanguage, t } = useLanguage();

  // Mantenemos tu ResizeObserver intacto
  useEffect(() => {
    if (!barRef.current || typeof ResizeObserver === 'undefined') return;
    const ro = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const h = entry.contentRect?.height ?? entry.target?.clientHeight ?? 64;
        setHeaderH(Math.round(h));
      }
    });
    ro.observe(barRef.current);
    return () => ro.disconnect();
  }, []);

  const scrollToId = useCallback(
    (id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const y = el.getBoundingClientRect().top + window.pageYOffset - (headerH + 8);
      window.scrollTo({ top: Math.max(y, 0), behavior: 'smooth' });
    },
    [headerH]
  );

  const handleLang = (_, next) => {
    if (!next) return;
    changeLanguage(next);
  };

  // Mantenemos tu Scroll-spy intacto
  useEffect(() => {
    const ids = navItemsConfig.map((n) => n.id);
    const getTop = (el) => {
      const rect = el.getBoundingClientRect();
      return window.pageYOffset + rect.top;
    };
    const onScroll = () => {
      const offset = headerH + 24;
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = getTop(el) - offset;
        if (window.pageYOffset >= top) current = id;
        else break;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [headerH]);

  return (
    <AppBar position="sticky" ref={barRef} sx={{ backgroundColor: '#731425', backgroundImage: 'none' }}>
      <Toolbar
        sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          gap: { xs: 1, sm: 2 },
          px: { xs: 1, sm: 2 } // Menos padding en los bordes para ganar espacio
        }}
      >
        {/* Marca: P grande | nombre en 3 líneas - TU DISEÑO ORIGINAL */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 1, sm: 2.5 }, flexShrink: 0 }}>
          <Typography
            component="span"
            sx={{
              fontFamily: '"Archivo", sans-serif',
              fontWeight: 800,
              fontSize: { xs: '30px', sm: '44px', md: '54px' }, // Un poco más pequeña en móvil
              lineHeight: 1,
              color: 'white',
            }}
          >
            P
          </Typography>

          <Divider orientation="vertical" flexItem sx={{ bgcolor: 'rgba(255,255,255,0.7)', mx: { xs: 0.5, sm: 1 } }} />

          <Box sx={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
            <Typography component="span" sx={{ fontFamily: '"Archivo", sans-serif', fontWeight: 700, fontSize: { xs: '14px', sm: '18px', md: '20px' }, color: 'white' }}>
              Pamela
            </Typography>
            <Typography component="span" sx={{ fontFamily: '"Archivo", sans-serif', fontWeight: 600, fontSize: { xs: '12px', sm: '16px', md: '18px' }, color: 'rgba(255,255,255,0.92)' }}>
              Paniagua
            </Typography>
            <Typography component="span" sx={{ fontFamily: '"Archivo", sans-serif', fontWeight: 600, fontSize: { xs: '12px', sm: '16px', md: '18px' }, color: 'rgba(255,255,255,0.92)' }}>
              Sanchez
            </Typography>
          </Box>
        </Box>

        {/* Navegación + idioma - AJUSTE RESPONSIVE SIN ICONOS */}
        <Box
          sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: { xs: 0.5, md: 1.5 }, 
            flexWrap: 'wrap', 
            justifyContent: 'flex-end',
            maxWidth: { xs: '60%', sm: 'none' } // Evita que empuje el nombre
          }}
        >
          {/* Los botones de navegación se vuelven más pequeños en móvil */}
          <Box sx={{ display: 'flex', flexWrap: 'nowrap', overflowX: 'auto', '&::-webkit-scrollbar': { display: 'none' } }}>
            {navItemsConfig.map((item) => (
              <Button
                key={item.id}
                onClick={() => scrollToId(item.id)}
                sx={{
                  color: 'white',
                  fontWeight: 700,
                  fontSize: { xs: '10px', sm: '13px', md: '14px' }, // Fuente pequeña en móvil
                  minWidth: 'auto',
                  px: { xs: 0.8, sm: 1.5 },
                  whiteSpace: 'nowrap',
                  textDecoration: active === item.id ? 'underline' : 'none',
                  textUnderlineOffset: '4px',
                }}
              >
                {t.nav[item.key]}
              </Button>
            ))}
          </Box>

          {/* FR/ESP - Diseño ultra compacto para móvil */}
          <ToggleButtonGroup
            exclusive
            size="small"
            value={language}
            onChange={handleLang}
            sx={{
              ml: 0.5,
              bgcolor: 'rgba(255,255,255,0.08)',
              borderRadius: '999px',
              '& .MuiToggleButton-root': { 
                color: 'white', 
                border: 'none', 
                px: { xs: 1, sm: 1.5 },
                fontSize: { xs: '10px', sm: '12px' } 
              }
            }}
          >
            <ToggleButton value="ES">ES</ToggleButton>
            <ToggleButton value="FR">FR</ToggleButton>
          </ToggleButtonGroup>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default memo(Header);