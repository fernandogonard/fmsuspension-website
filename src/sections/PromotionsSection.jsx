import React from 'react';
import { Container, Typography, Paper, Button } from '@mui/material';

const promotions = [
    { 
        title: "20% de Descuento en Alineación y Balanceo", 
        description: "Aprovecha un 20% de descuento en nuestros servicios de alineación y balanceo durante todo el mes.", 
        buttonText: "Ver más",
        buttonLink: "#services",
    },
    { 
        title: "Control Pre VTV - Sin Cargo", 
        description: "Obtén un control pre VTV gratuito al seguirnos y compartir nuestro Instagram. ¡Aprovecha esta oferta exclusiva!", 
        buttonText: "Síguenos en Instagram",
        buttonLink: "#contact", // Cambia el enlace a la página de Instagram o contacto si es necesario
    },
];

const PromotionsSection = () => {
    return (
        <Container id="promotions" sx={{ padding: '50px 0', backgroundColor: '#424242', textAlign: 'center' }}>
            <Typography variant="h4" gutterBottom color="secondary">
                Ofertas Especiales
            </Typography>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
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
                    >
                        <Typography variant="h6" color="#E53935">
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
