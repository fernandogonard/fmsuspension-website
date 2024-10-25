import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Menu, MenuItem, Button, useMediaQuery } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { Link } from 'react-scroll';
import banerfm from '../assets/banerfm.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // Estado para el menú
  const isMobile = useMediaQuery('(max-width:600px)');

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  return (
    <AppBar position="static" style={{ backgroundColor: 'black' }}>
      <Toolbar style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Ajusta la imagen del banner */}
        <img 
          src={banerfm} 
          alt="Banner FMSuspensión" 
          style={{ 
            height: '80px',   // Reducir la altura a 80px para hacerla menos alta
            width: '100%',    // Ocupa el 100% del ancho del contenedor para hacerla más larga
            objectFit: 'cover' // Ajusta la imagen para cubrir el espacio sin deformarse
          }} 
        />
        {isMobile ? (
          // Vista para móviles con menú hamburguesa
          <>
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={handleMenuToggle}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="mobile-menu"
              anchorEl={null} // No es necesario un anchorEl en este caso
              keepMounted
              open={menuOpen}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleMenuClose}>
                <Link to="inicio" smooth={true} duration={500} offset={-70}>Inicio</Link>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <Link to="servicios" smooth={true} duration={500} offset={-70}>Servicios</Link>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <Link to="testimonios" smooth={true} duration={500} offset={-70}>Testimonios</Link>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <Link to="contacto" smooth={true} duration={500} offset={-70}>Contacto</Link>
              </MenuItem>
            </Menu>
          </>
        ) : (
          // Vista para desktop con botones directos
          <div style={{ display: 'flex', gap: '15px' }}>
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
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
