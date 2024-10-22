// src/components/Footer.js
import React from 'react';
import { Container, Typography, Link, Grid, IconButton } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram'; // Asegúrate de tener este ícono disponible
import FacebookIcon from '@mui/icons-material/Facebook';  // Puedes agregar más íconos como este
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
    return (
        <footer style={{ padding: '40px 0', backgroundColor: '#333333', textAlign: 'center', color: '#BDBDBD' }}>
            <Container>
                {/* Información de la Empresa */}
                <Grid container spacing={2} justifyContent="center">
                    <Grid item xs={12} sm={4}>
                        <Typography variant="body1" color="inherit" sx={{ transition: 'color 0.3s' }} 
                            onMouseEnter={(e) => e.currentTarget.style.color = '#FFFFFF'} 
                            onMouseLeave={(e) => e.currentTarget.style.color = '#BDBDBD'}>
                            © 2024 FMSuspensión. Todos los derechos reservados.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="body2" color="inherit">
                            Dirección: Ituzaingó 5848, Mar del Plata, Argentina
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="body2" color="inherit">
                            Teléfono: <Link href="tel:+549XXXXXXXXXX" color="inherit" underline="none" 
                                sx={{ transition: 'color 0.3s', '&:hover': { color: '#FFFFFF' } }}>
                                549XXXXXXXXXX
                            </Link>
                        </Typography>
                    </Grid>
                </Grid>

                {/* Horarios */}
                <Typography variant="body2" color="inherit" sx={{ marginTop: '10px', transition: 'color 0.3s' }} 
                    onMouseEnter={(e) => e.currentTarget.style.color = '#FFFFFF'} 
                    onMouseLeave={(e) => e.currentTarget.style.color = '#BDBDBD'}>
                    Horarios: Lunes a Viernes 9:00 AM - 6:00 PM
                </Typography>

                {/* Redes Sociales */}
                <div style={{ marginTop: '20px' }}>
                    <IconButton 
                        href="https://www.instagram.com/tu_usuario" 
                        target="_blank" 
                        sx={{ color: '#BDBDBD', transition: 'color 0.3s', marginRight: '10px', '&:hover': { color: '#E1306C' } }}>
                        <InstagramIcon />
                    </IconButton>
                    <IconButton 
                        href="https://www.facebook.com/tu_usuario" 
                        target="_blank" 
                        sx={{ color: '#BDBDBD', transition: 'color 0.3s', marginRight: '10px', '&:hover': { color: '#3b5998' } }}>
                        <FacebookIcon />
                    </IconButton>
                    <IconButton 
                        href="https://www.twitter.com/tu_usuario" 
                        target="_blank" 
                        sx={{ color: '#BDBDBD', transition: 'color 0.3s', '&:hover': { color: '#1DA1F2' } }}>
                        <TwitterIcon />
                    </IconButton>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
