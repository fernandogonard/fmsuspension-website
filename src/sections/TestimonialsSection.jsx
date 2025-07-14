import React from 'react';
import { Paper, Avatar, Box, Typography, useTheme } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import PersonIcon from '@mui/icons-material/Person';
import { keyframes } from '@mui/system';

const testimonials = [
    { name: "Juan Pérez", feedback: "Excelente servicio, mi auto quedó como nuevo.", image: null },
    { name: "María López", feedback: "Muy profesionales, los recomiendo al 100 %;.", image: null }, // Reemplazando el 100%
    { name: "Carlos García", feedback: "Trabajo impecable y atención rápida.", image: null },
    { name: "Lucía Rodríguez", feedback: "Un lugar de confianza para cualquier reparación.", image: null },
];

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: none; }
`;

const TestimonialsSection = () => {
    const theme = useTheme();
    return (
        <Box id="testimonials" sx={{ py: { xs: 4, md: 8 }, px: { xs: 1, sm: 2 }, background: 'transparent' }}>
            <Typography
                variant="h3"
                align="center"
                color="primary"
                sx={{ fontWeight: 800, mb: 6, letterSpacing: 1, fontSize: { xs: 28, sm: 36, md: 44 } }}
            >
                Opiniones de nuestros clientes
            </Typography>
            <Carousel
                indicators={false}
                navButtonsAlwaysVisible={true}
                sx={{ width: '100%', maxWidth: 600, mx: 'auto' }}
                aria-label="Testimonios de clientes"
            >
                {testimonials.map((testimonial, index) => (
                    <Paper
                        key={index}
                        sx={{
                            p: { xs: 3, md: 4 },
                            background: '#353535',
                            color: '#fff',
                            borderRadius: 4,
                            minHeight: 220,
                            textAlign: 'center',
                            boxShadow: '0 8px 32px 0 rgba(0,0,0,0.18)',
                            transition: 'transform 0.3s, box-shadow 0.3s',
                            animation: `${fadeInUp} 0.7s cubic-bezier(.39,.575,.565,1) both`,
                            animationDelay: `${index * 0.1 + 0.2}s`,
                            '&:hover': {
                                transform: 'translateY(-8px) scale(1.04)',
                                boxShadow: `0 16px 40px 0 ${theme.palette.primary.main}33`,
                                background: '#222',
                            },
                        }}
                    >
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 2 }}>
                            <Avatar
                                sx={{
                                    width: 64,
                                    height: 64,
                                    backgroundColor: theme.palette.primary.main,
                                    mb: 2,
                                }}
                                aria-label={`Avatar de ${testimonial.name}`}
                            >
                                <PersonIcon fontSize="large" />
                            </Avatar>
                            <Typography
                                variant="body1"
                                sx={{ fontStyle: 'italic', mb: 2, fontSize: 18 }}
                            >
                                “{testimonial.feedback}”
                            </Typography>
                            <Typography
                                variant="subtitle2"
                                sx={{ fontWeight: 700, color: 'primary.main', fontSize: 16 }}
                            >
                                - {testimonial.name}
                            </Typography>
                        </Box>
                    </Paper>
                ))}
            </Carousel>
        </Box>
    );
};

export default TestimonialsSection;
