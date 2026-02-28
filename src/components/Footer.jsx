import React from 'react';
import { Typography, Box, IconButton, Divider, Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Link as ScrollLink } from 'react-scroll';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import RoomIcon from '@mui/icons-material/Room';
import PhoneIcon from '@mui/icons-material/Phone';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
    const theme = useTheme();
    return (
        <Box
            component="footer"
            sx={{
                background: `linear-gradient(90deg, ${theme.palette.primary.dark} 0%, #232323 100%)`,
                color: '#fff',
                py: { xs: 5, md: 7 },
                px: { xs: 2, sm: 6 },
                mt: 8,
                boxShadow: '0 -8px 32px 0 rgba(0,0,0,0.18)',
            }}
        >
            <Grid container spacing={6} justifyContent="center" alignItems="flex-start">
                <Grid item xs={12} md={4}>
                    <Typography variant="h5" sx={{ fontWeight: 900, mb: 2, letterSpacing: 1, color: 'primary.main' }}>
                        FMSuspensión
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 2, opacity: 0.85, fontSize: 17 }}>
                        Soluciones profesionales en suspensión y dirección automotriz.
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
                        <IconButton color="primary" href="https://facebook.com/fmsuspension" target="_blank" aria-label="Facebook" sx={{ bgcolor: '#fff', '&:hover': { bgcolor: theme.palette.primary.light } }}>
                            <FacebookIcon sx={{ color: theme.palette.primary.main }} />
                        </IconButton>
                        <IconButton color="primary" href="https://www.instagram.com/fm_suspension/" target="_blank" aria-label="Instagram" sx={{ bgcolor: '#fff', '&:hover': { bgcolor: theme.palette.primary.light } }}>
                            <InstagramIcon sx={{ color: theme.palette.primary.main }} />
                        </IconButton>
                        <IconButton color="primary" href="https://wa.me/5492236003351" target="_blank" aria-label="WhatsApp" sx={{ bgcolor: '#fff', '&:hover': { bgcolor: theme.palette.primary.light } }}>
                            <WhatsAppIcon sx={{ color: theme.palette.primary.main }} />
                        </IconButton>
                    </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: 'primary.main', letterSpacing: 1 }}>
                        Contacto
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <RoomIcon sx={{ mr: 1, color: 'primary.main' }} />
                        <Typography variant="body1" sx={{ opacity: 0.85 }}>Ituzaingó 5848, Mar del Plata, Argentina</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <PhoneIcon sx={{ mr: 1, color: 'primary.main' }} />
                        <Typography variant="body1" sx={{ opacity: 0.85 }}><a href="tel:+5492236003351" style={{ color: '#fff', textDecoration: 'underline' }}>+54 9 2236003351</a></Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <EmailIcon sx={{ mr: 1, color: 'primary.main' }} />
                        <Typography variant="body1" sx={{ opacity: 0.85 }}><a href="mailto:matiasalbertofemenia@gmail.com" style={{ color: '#fff', textDecoration: 'underline' }}>matiasalbertofemenia@gmail.com</a></Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: 'primary.main', letterSpacing: 1 }}>
                        Enlaces útiles
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        {[
                          { label: 'Servicios', to: 'services' },
                          { label: 'Promociones', to: 'promociones' },
                          { label: 'Testimonios', to: 'testimonials' },
                          { label: 'Contacto', to: 'contact' },
                        ].map(({ label, to }) => (
                          <ScrollLink
                            key={to}
                            to={to}
                            smooth
                            duration={500}
                            offset={-70}
                            style={{ color: '#fff', fontSize: 17, opacity: 0.85, cursor: 'pointer', textDecoration: 'underline' }}
                          >
                            {label}
                          </ScrollLink>
                        ))}
                    </Box>
                </Grid>
            </Grid>
            <Divider sx={{ my: 5, background: '#444' }} />
            <Typography variant="body2" align="center" sx={{ opacity: 0.7, fontSize: 15 }}>
                &copy; {new Date().getFullYear()} FMSuspensión. Todos los derechos reservados.
            </Typography>
        </Box>
    );
};

export default Footer;
