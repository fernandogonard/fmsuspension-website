import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Menu, MenuItem, Button, useMediaQuery } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { Link } from 'react-scroll';
import banerfm from '../assets/banerfm.png';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const isMobile = useMediaQuery('(max-width:600px)');

  const handleMenuToggle = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (section) => {
    // Usamos un callback para hacer scroll y cerrar el menú después de navegar
    const scrollToSection = () => {
      handleMenuClose();
    };

    return (
      <Link
        to={section.toLowerCase()}
        smooth
        duration={500}
        offset={-70}
        onClick={scrollToSection} // Se ejecuta al completar el scroll
        aria-label={`Ir a sección ${section}`}
      >
        {section}
      </Link>
    );
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: 'black' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <img 
          src={banerfm} 
          alt="Banner de FMSuspensión - Servicios de suspensión" 
          style={{ 
            height: 'auto', 
            width: '100%', 
            maxWidth: '250px',  // Ajusta el tamaño máximo para que no ocupe demasiado espacio
            objectFit: 'cover' 
          }} 
          aria-label="Logo de FMSuspensión"
        />
        {isMobile ? (
          <>
            <IconButton
              edge="end"
              color="inherit"
              aria-label="Abrir menú"
              onClick={handleMenuToggle}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="mobile-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              {['Inicio', 'Servicios', 'Testimonios', 'Contacto'].map((section, index) => (
                <MenuItem key={index} onClick={handleMenuClose}>
                  {handleMenuItemClick(section)}
                </MenuItem>
              ))}
            </Menu>
          </>
        ) : (
          <div style={{ display: 'flex', gap: '15px' }}>
            {['Inicio', 'Servicios', 'Testimonios', 'Contacto'].map((section, index) => (
              <Button key={index} color="inherit">
                <Link 
                  to={section.toLowerCase()} 
                  smooth 
                  duration={500} 
                  style={{ color: '#FFFFFF' }}
                  aria-label={`Ir a sección ${section}`}
                >
                  {section}
                </Link>
              </Button>
            ))}
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
