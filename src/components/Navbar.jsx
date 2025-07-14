import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Button, useMediaQuery, Drawer, List, ListItem, ListItemButton, ListItemText, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-scroll';
import banerfm from '../assets/banerfm.png';

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width:900px)');

  const sections = [
    { label: 'Inicio', to: 'inicio' },
    { label: 'Servicios', to: 'services' },
    { label: 'Testimonios', to: 'testimonials' },
    { label: 'Contacto', to: 'contact' },
  ];

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <AppBar position="fixed" sx={{ backgroundColor: 'black', zIndex: 1201 }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', minHeight: 70 }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <img 
            src={banerfm} 
            alt="Banner de FMSuspensión - Servicios de suspensión" 
            style={{ height: 50, width: 'auto', maxWidth: 200, objectFit: 'cover' }} 
            aria-label="Logo de FMSuspensión"
          />
        </Box>
        {isMobile ? (
          <>
            <IconButton
              edge="end"
              color="inherit"
              aria-label="Abrir menú"
              onClick={handleDrawerToggle}
              size="large"
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={handleDrawerToggle}
              PaperProps={{ sx: { width: 220, backgroundColor: '#222' } }}
            >
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1 }}>
                <IconButton onClick={handleDrawerToggle} color="inherit">
                  <CloseIcon />
                </IconButton>
              </Box>
              <List>
                {sections.map((section, index) => (
                  <ListItem key={index} disablePadding>
                    <ListItemButton onClick={handleDrawerToggle}>
                      <Link
                        to={section.to}
                        smooth
                        duration={500}
                        offset={-70}
                        style={{ color: '#fff', width: '100%', display: 'block', textDecoration: 'none', fontWeight: 500 }}
                        aria-label={`Ir a sección ${section.label}`}
                      >
                        <ListItemText primary={section.label} />
                      </Link>
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Drawer>
          </>
        ) : (
          <Box sx={{ display: 'flex', gap: 2 }}>
            {sections.map((section, index) => (
              <Button key={index} color="inherit" sx={{ fontWeight: 600, fontSize: 16 }}>
                <Link 
                  to={section.to}
                  smooth
                  duration={500}
                  offset={-70}
                  style={{ color: '#FFFFFF', textDecoration: 'none' }}
                  aria-label={`Ir a sección ${section.label}`}
                >
                  {section.label}
                </Link>
              </Button>
            ))}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
