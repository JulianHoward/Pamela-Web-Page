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

const navItems = [
  { label: 'INICIO', id: 'home' },
  { label: 'MI TRAYECTORIA', id: 'trajectory' },
  { label: 'MIS EJES DE TRABAJO', id: 'axes' },
  { label: 'NOVEDADES', id: 'news' },
  { label: 'GALERÍA', id: 'gallery' },
  { label: 'CONTACTO', id: 'contact' },
];

function Header() {
  const barRef = useRef(null);
  const [headerH, setHeaderH] = useState(64);
  const [lang, setLang] = useState('ES');
  const [active, setActive] = useState('home');

  // Mide la altura real del AppBar (preciso y reactivo)
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
      const y = el.getBoundingClientRect().top + window.pageYOffset - (headerH + 8); // respiro
      window.scrollTo({ top: Math.max(y, 0), behavior: 'smooth' });
    },
    [headerH]
  );

  const handleLang = (_, next) => {
    if (!next) return;
    setLang(next);
    // i18n.changeLanguage?.(next.toLowerCase());
  };

  // Scroll-spy: detecta sección visible y marca activo
  useEffect(() => {
    const ids = navItems.map((n) => n.id);

    const getTop = (el) => {
      const rect = el.getBoundingClientRect();
      return window.pageYOffset + rect.top;
    };

    const onScroll = () => {
      const offset = headerH + 24; // activa un poco antes del borde superior
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
    <AppBar position="sticky" ref={barRef} sx={{ backgroundColor: '#731425' }}>
      <Toolbar
        sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 2 }}
      >
        {/* Marca: P grande | nombre en 3 líneas */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 1.5, sm: 2.5 } }}>
          {/* Inicial grande */}
          <Typography
            component="span"
            sx={{
              fontFamily: '"Archivo", sans-serif',
              fontWeight: 800,
              fontSize: { xs: '34px', sm: '44px', md: '54px' },
              lineHeight: 1,
              color: 'white',
            }}
            aria-label="Logo P"
          >
            P
          </Typography>

          {/* Línea vertical */}
          <Divider orientation="vertical" flexItem sx={{ bgcolor: 'rgba(255,255,255,0.7)' }} />

          {/* Nombre en 3 líneas */}
          <Box sx={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
            <Typography
              component="span"
              sx={{
                fontFamily: '"Archivo", sans-serif',
                fontWeight: 700,
                fontSize: { xs: '16px', sm: '18px', md: '20px' },
                color: 'white',
                letterSpacing: '0.2px',
              }}
            >
              Pamela
            </Typography>
            <Typography
              component="span"
              sx={{
                fontFamily: '"Archivo", sans-serif',
                fontWeight: 600,
                fontSize: { xs: '14px', sm: '16px', md: '18px' },
                color: 'rgba(255,255,255,0.92)',
              }}
            >
              Paniagua
            </Typography>
            <Typography
              component="span"
              sx={{
                fontFamily: '"Archivo", sans-serif',
                fontWeight: 600,
                fontSize: { xs: '14px', sm: '16px', md: '18px' },
                color: 'rgba(255,255,255,0.92)',
              }}
            >
              Sanchez
            </Typography>
          </Box>
        </Box>

        {/* Navegación + idioma */}
        <Box
          sx={{ display: 'flex', alignItems: 'center', gap: { xs: 1, md: 2 }, flexWrap: 'wrap' }}
        >
          {navItems.map((item) => (
            <Button
              key={item.id}
              component="a"
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault(); // mantiene el # y usamos scroll suave
                scrollToId(item.id);
              }}
              aria-current={active === item.id ? 'page' : undefined}
              sx={{
                color: 'white',
                fontWeight: 700,
                letterSpacing: 0.3,
                px: { xs: 1, md: 1.5 },
                '&:hover': {
                  backgroundColor: 'rgba(255,255,255,0.08)',
                  textDecoration: 'underline',
                  textUnderlineOffset: '4px',
                },
                ...(active === item.id && {
                  textDecoration: 'underline',
                  textUnderlineOffset: '6px',
                }),
              }}
            >
              {item.label}
            </Button>
          ))}

          {/* FR/ESP */}
          <ToggleButtonGroup
            exclusive
            size="small"
            value={lang}
            onChange={handleLang}
            aria-label="Selector de idioma"
            sx={{
              ml: { xs: 0, md: 1 },
              bgcolor: 'rgba(255,255,255,0.08)',
              borderRadius: '999px',
            }}
          >
            <ToggleButton value="ES" sx={{ color: 'white', border: 'none' }} aria-label="Español">
              ESP
            </ToggleButton>
            <ToggleButton value="FR" sx={{ color: 'white', border: 'none' }} aria-label="Francés">
              FR
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default memo(Header);
