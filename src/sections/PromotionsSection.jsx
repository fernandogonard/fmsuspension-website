// src/components/PromotionsSection.js
import React from 'react';
import { Container, Typography, Paper, Button } from '@mui/material';

const promotions = [
    { 
        title: "20% de Descuento en Alineación y Balanceo", 
        description: "Aprovecha un 20% de descuento en nuestros servicios de alineación y balanceo durante todo el mes.", 
        buttonText: "WhatsApp",
        buttonLink: "https://api.whatsapp.com/send?phone=+5492236003351&text=Hola,%20estoy%20interesado%20en%20el%20descuento%20de%20alineación%20y%20balanceo.",
    },
    { 
        title: "Control Pre VTV - Sin Cargo", 
        description: "Obtén un control pre VTV gratuito al seguirnos y compartir nuestro Instagram. ¡Aprovecha esta oferta exclusiva!", 
        buttonText: "Síguenos en Instagram",
        buttonLink: "https://www.instagram.com/fm_suspension/",
    },
    { 
        title: "Descuentos Especiales para Taxis y Remises", 
        description: "Recibe descuentos exclusivos en todos nuestros servicios al seguirnos en Instagram. ¡Ideal para taxis y remises!", 
        buttonText: "Síguenos en Instagram",
        buttonLink: "https://www.instagram.com/fm_suspension/",
    },
];

const PromotionsSection = () => {
    return (
        <Container id="promotions" sx={{ padding: '50px 0', backgroundColor: '#424242', textAlign: 'center' }}>
            <Typography variant="h4" gutterBottom color="secondary" component="h2" aria-labelledby="promotions-title">
                Ofertas Especiales
            </Typography>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }} role="region" aria-labelledby="promotions">
                {promotions.map((promo, index) => (
                    <Paper
                        key={index}
                        sx={{
                            margin: '10px',
                            padding: '20px',
                            backgroundColor: '#BDBDBD',
                            minWidth: '250px',
                            maxWidth: '400px',
                            transition: 'transform 0.3s',
                            '&:hover': { transform: 'scale(1.05)' },
                        }}
                        role="article"
                        aria-labelledby={`promo-title-${index}`}
                    >
                        <Typography variant="h6" color="#E53935" id={`promo-title-${index}`}>
                            {promo.title}
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                            {promo.description}
                        </Typography>
                        <Button 
                            variant="contained" 
                            color="primary" 
                            href={promo.buttonLink}
                            sx={{
                                marginTop: '10px',
                                '&:hover': { backgroundColor: '#BDBDBD', color: '#E53935' },
                            }}
                            target="_blank" // Abre los enlaces externos en una nueva pestaña
                            rel="noopener noreferrer" // Añade seguridad para enlaces externos
                        >
                            {promo.buttonText}
                        </Button>
                    </Paper>
                ))}
            </div>
        </Container>
    );
};

export default PromotionsSection;
