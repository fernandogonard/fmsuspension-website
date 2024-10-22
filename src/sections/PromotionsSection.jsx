// src/sections/PromotionsSection.js
import React from 'react';
import { Container, Typography, Paper, Button } from '@mui/material';

const promotions = [
    { 
        title: "Alineación y Balanceo Gratis", 
        description: "Obtén alineación y balanceo gratuitos con la compra de 4 neumáticos y el cambio de frenos.", 
        buttonText: "Ver más",
        buttonLink: "#services",
    },
    { 
        title: "Descuento en Frenos", 
        description: "Aprovecha nuestros descuentos especiales en servicios de frenos durante este mes.", 
        buttonText: "Cotiza ahora",
        buttonLink: "#contact",
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
