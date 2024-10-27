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

  return (
    <AppBar position="static" sx={{ backgroundColor: 'black' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <img 
          src={banerfm} 
          alt="Banner FMSuspensión" 
          style={{ 
            height: 'auto', 
            width: '100%', 
            maxWidth: '250px',  // Ajusta el tamaño máximo para que no ocupe demasiado espacio
            objectFit: 'cover' 
          }} 
        />
        {isMobile ? (
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
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              {['Inicio', 'Servicios', 'Testimonios', 'Contacto'].map((section, index) => (
                <MenuItem key={index} onClick={handleMenuClose}>
                  <Link to={section.toLowerCase()} smooth duration={500} offset={-70}>
                    {section}
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </>
        ) : (
          <div style={{ display: 'flex', gap: '15px' }}>
            {['Inicio', 'Servicios', 'Testimonios', 'Contacto'].map((section, index) => (
              <Button key={index} color="inherit">
                <Link to={section.toLowerCase()} smooth duration={500} style={{ color: '#FFFFFF' }}>
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
