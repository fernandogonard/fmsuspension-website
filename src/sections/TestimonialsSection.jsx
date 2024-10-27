import React from 'react';
import { Container, Typography, Paper, Avatar, Box } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import PersonIcon from '@mui/icons-material/Person'; // Ícono para el avatar si no hay imagen

const testimonials = [
    { name: "Juan Pérez", feedback: "Excelente servicio, mi auto quedó como nuevo.", image: null },
    { name: "María López", feedback: "Muy profesionales, los recomiendo al 100%.", image: null },
    { name: "Carlos García", feedback: "Trabajo impecable y atención rápida.", image: null },
    { name: "Lucía Rodríguez", feedback: "Un lugar de confianza para cualquier reparación.", image: null },
];

const TestimonialsSection = () => {
    return (
        <Container 
            id="testimonials" 
            sx={{ padding: '50px 0', backgroundColor: '#000000', color: '#FFFFFF' }}
        >
            <Typography 
                variant="h4" 
                gutterBottom 
                color="secondary" 
                align="center"
            >
                Testimonios de Clientes
            </Typography>
            <Carousel
                indicators={false}
                navButtonsAlwaysVisible={true}
                sx={{ width: '100%', maxWidth: '600px', margin: '0 auto' }}
                aria-label="Testimonios de clientes"
            >
                {testimonials.map((testimonial, index) => (
                    <Paper
                        key={index}
                        sx={{
                            padding: '20px',
                            backgroundColor: '#BDBDBD',
                            color: '#000000',
                            borderRadius: '10px',
                            boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
                            textAlign: 'center',
                            position: 'relative',
                        }}
                    >
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Avatar
                                sx={{
                                    width: 56,
                                    height: 56,
                                    backgroundColor: '#424242',
                                    marginBottom: '10px',
                                }}
                                aria-label={`Avatar de ${testimonial.name}`}
                            >
                                <PersonIcon />
                            </Avatar>
                            <Typography 
                                variant="body1" 
                                sx={{ fontStyle: 'italic', marginBottom: '10px' }}
                            >
                                "{testimonial.feedback}"
                            </Typography>
                            <Typography 
                                variant="subtitle2" 
                                sx={{ fontWeight: 'bold' }}
                            >
                                - {testimonial.name}
                            </Typography>
                        </Box>
                    </Paper>
                ))}
            </Carousel>
        </Container>
    );
};

export default TestimonialsSection;
