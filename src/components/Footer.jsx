// src/components/Footer.js
import React from 'react';
import { Container, Typography, Link, Box, Stack, IconButton } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
    return (
        <footer style={{ padding: '40px 0', backgroundColor: '#333333', textAlign: 'center', color: '#BDBDBD' }}>
            <Container>
                {/* Información de la Empresa */}
                <Stack direction="row" spacing={2} justifyContent="center" sx={{ flexWrap: 'wrap' }}>
                    <Box>
                        <Typography variant="body1" color="inherit" sx={{ transition: 'color 0.3s' }}
                            onMouseEnter={(e) => e.currentTarget.style.color = '#FFFFFF'}
                            onMouseLeave={(e) => e.currentTarget.style.color = '#BDBDBD'}>
                            © 2024 FMSuspensión. <br/>Echo por MG SOLUCIONES WEB
                        </Typography>
                    </Box>
                    <Box>
                        <Typography variant="body2" color="inherit">
                            Dirección: Ituzaingó 5848, Mar del Plata, Argentina
                        </Typography>
                    </Box>
                    <Box>
                        <Typography variant="body2" color="inherit">
                            Teléfono: <Link href="tel:+5492236003351" color="inherit" underline="none"
                                sx={{ transition: 'color 0.3s', '&:hover': { color: '#FFFFFF' } }}>
                               +54 9 2236003351
                            </Link>
                        </Typography>
                    </Box>
                </Stack>

                {/* Horarios */}
                <Typography variant="body2" color="inherit" sx={{ marginTop: '10px', transition: 'color 0.3s' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#FFFFFF'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#BDBDBD'}>
                    Horarios: Lunes a Viernes 8:00 a 6:00 <br />
                    Sábados de 8 a 12
                </Typography>

                {/* Redes Sociales */}
                <Box sx={{ marginTop: '20px' }}>
                    <IconButton
                        href="https://www.instagram.com/fm_suspension"
                        target="_blank"
                        sx={{ color: '#BDBDBD', transition: 'color 0.3s', marginRight: '10px', '&:hover': { color: '#E1306C' } }}>
                        <InstagramIcon />
                    </IconButton>
                    <IconButton
                        href="https://www.facebook.com/fm_suspension"
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
                </Box>
            </Container>
        </footer>
    );
};

export default Footer;
