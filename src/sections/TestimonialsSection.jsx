import React from 'react';
import { Container, Typography, Paper} from '@mui/material';
import Carousel from 'react-material-ui-carousel'; // Asegúrate de instalar este paquete

const testimonials = [
    { name: "Juan Pérez", feedback: "Excelente servicio, mi auto quedó como nuevo." },
    { name: "María López", feedback: "Muy profesionales, los recomiendo al 100%." },
    { name: "Carlos García", feedback: "Trabajo impecable y atención rápida." },
    { name: "Lucía Rodríguez", feedback: "Un lugar de confianza para cualquier reparación." },
];

const TestimonialsSection = () => {
    return (
        <Container id="testimonials" sx={{ padding: '50px 0', backgroundColor: '#000000', color: '#FFFFFF' }}>
            <Typography variant="h4" gutterBottom color="secondary">
                Testimonios de Clientes
            </Typography>
            <Carousel
                indicators={false}
                navButtonsAlwaysVisible={true}
                sx={{ width: '100%', maxWidth: '600px', margin: '0 auto' }}
            >
                {testimonials.map((testimonial, index) => (
                    <Paper
                        key={index}
                        sx={{
                            padding: '20px',
                            backgroundColor: '#BDBDBD',
                            color: '#000000',
                            textAlign: 'center',
                        }}
                    >
                        <Typography variant="body1">"{testimonial.feedback}"</Typography>
                        <Typography variant="subtitle2">- {testimonial.name}</Typography>
                    </Paper>
                ))}
            </Carousel>
        </Container>
    );
};

export default TestimonialsSection;
