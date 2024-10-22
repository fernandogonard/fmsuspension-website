import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Menu, MenuItem, Button, useMediaQuery } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { Link } from 'react-scroll'; // Para scroll suave a secciones

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const isMobile = useMediaQuery('(max-width:600px)'); // Detecta si es móvil

  // Función para abrir el menú en móviles
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Función para cerrar el menú en móviles
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" style={{ backgroundColor: '#E53935' }}> 
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          FMSuspensión
        </Typography>
        {isMobile ? (
          // Vista para móviles con menú hamburguesa
          <>
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={handleMenuOpen}
              style={{ marginLeft: 'auto' }} // Mueve el menú hamburguesa a la derecha
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="mobile-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleMenuClose}>
                <Link to="inicio" smooth={true} duration={500}>Inicio</Link>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <Link to="servicios" smooth={true} duration={500}>Servicios</Link>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <Link to="testimonios" smooth={true} duration={500}>Testimonios</Link>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <Link to="contacto" smooth={true} duration={500}>Contacto</Link>
              </MenuItem>
            </Menu>
          </>
        ) : (
          // Vista para desktop con botones directos
          <>
            <Button color="inherit">
              <Link to="inicio" smooth={true} duration={500} style={{ color: '#FFFFFF' }}>Inicio</Link>
            </Button>
            <Button color="inherit">
              <Link to="servicios" smooth={true} duration={500} style={{ color: '#FFFFFF' }}>Servicios</Link>
            </Button>
            <Button color="inherit">
              <Link to="testimonios" smooth={true} duration={500} style={{ color: '#FFFFFF' }}>Testimonios</Link>
            </Button>
            <Button color="inherit">
              <Link to="contacto" smooth={true} duration={500} style={{ color: '#FFFFFF' }}>Contacto</Link>
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
