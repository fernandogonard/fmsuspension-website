import React from 'react';
import { Container, Typography, Button } from '@mui/material';

const HomeSection = () => {
    return (
        <Container
            id="home"
            sx={{
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                color: '#FFFFFF',
                textAlign: 'center',
            }}
        >
            {/* Imagen del taller */}
            <img 
                src="/assets/workshop-banner.png" 
                alt="Taller" 
                style={{ 
                    width: '100%', 
                    maxHeight: '50vh', 
                    objectFit: 'cover',
                    marginBottom: '20px' // Espacio entre la imagen y el texto
                }} 
            />

            {/* Texto debajo de la imagen */}
            <Typography variant="h3" gutterBottom color="secondary">
                Bienvenido 
            </Typography>
            <Typography variant="h5" gutterBottom color="text.secondary">
                Especialistas en suspensión del automóvil
            </Typography>
            <Typography variant="body1" paragraph color="#BDBDBD">
                Nuestro equipo altamente capacitado asegura su seguridad en las calles con servicios profesionales.
            </Typography>
            <Button
                variant="contained"
                color="primary"
                href="https://api.whatsapp.com/send?phone=549XXXXXXXXXX"
                sx={{
                    marginTop: '20px',
                    '&:hover': { backgroundColor: '#BDBDBD' },
                }}
            >
                Contáctanos por WhatsApp
            </Button>
        </Container>
    );
};

export default HomeSection;
