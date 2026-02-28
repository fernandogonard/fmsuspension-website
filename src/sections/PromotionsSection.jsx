import React from 'react';
import { Typography, Paper, Button, Grid, Box } from '@mui/material';
import { keyframes } from '@mui/system';
import { whatsappLink, INSTAGRAM_URL } from '../config/constants';

const promotions = [
    { 
        title: "20% de Descuento en Alineación y Balanceo", 
        description: "Aprovecha un 20% de descuento en nuestros servicios de alineación y balanceo durante todo el mes.", 
        buttonText: "Consultar por WhatsApp",
        buttonLink: whatsappLink('Hola, estoy interesado en el descuento de alineación y balanceo.'),
    },
    { 
        title: "Control Pre VTV - Sin Cargo", 
        description: "Obtén un control pre VTV gratuito al seguirnos y compartir nuestro Instagram. ¡Aprovecha esta oferta exclusiva!", 
        buttonText: "Seguir en Instagram",
        buttonLink: INSTAGRAM_URL,
    },
    { 
        title: "Descuentos Especiales para Taxis y Remises", 
        description: "Recibe descuentos exclusivos en todos nuestros servicios al seguirnos en Instagram. ¡Ideal para taxis y remises!", 
        buttonText: "Seguir en Instagram",
        buttonLink: INSTAGRAM_URL,
    },
];

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: none; }
`;

const PromotionsSection = () => {
    return (
        <Box sx={{ background: 'transparent', py: { xs: 4, md: 8 }, px: { xs: 1, sm: 2 } }}>
            <Typography
                variant="h3"
                align="center"
                color="primary"
                sx={{ fontWeight: 800, mb: 6, letterSpacing: 1, fontSize: { xs: 28, sm: 36, md: 44 } }}
            >
                Promociones y Beneficios
            </Typography>
            <Grid container spacing={{ xs: 3, md: 4 }} justifyContent="center">
                {promotions.map((promo, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Paper
                            elevation={8}
                            sx={{
                                p: { xs: 3, md: 4 },
                                background: '#353535',
                                color: '#fff',
                                borderRadius: 4,
                                minHeight: 220,
                                textAlign: 'center',
                                boxShadow: '0 8px 32px 0 rgba(0,0,0,0.18)',
                                transition: 'transform 0.3s, box-shadow 0.3s',
                                cursor: 'pointer',
                                animation: `${fadeInUp} 0.7s cubic-bezier(.39,.575,.565,1) both`,
                                animationDelay: `${index * 0.1 + 0.2}s`,
                                '&:hover': {
                                    transform: 'translateY(-8px) scale(1.04)',
                                    boxShadow: '0 16px 40px 0 rgba(229,57,53,0.18)',
                                    background: '#222',
                                },
                            }}
                            role="article"
                            aria-labelledby={`promo-title-${index}`}
                        >
                            <Typography variant="h6" color="primary" id={`promo-title-${index}`} sx={{ fontWeight: 'bold', mb: 1, fontSize: 22 }}>
                                {promo.title}
                            </Typography>
                            <Typography variant="body1" color="#e0e0e0" sx={{ fontSize: 16, lineHeight: 1.5, mb: 2 }}>
                                {promo.description}
                            </Typography>
                            <Button
                                variant="contained"
                                color="primary"
                                href={promo.buttonLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{
                                    mt: 2,
                                    fontWeight: 700,
                                    fontSize: 16,
                                    borderRadius: 2,
                                    px: 4,
                                    py: 1.5,
                                    boxShadow: '0 2px 8px 0 rgba(229,57,53,0.10)',
                                    transition: 'background 0.3s, color 0.3s',
                                    '&:hover': { backgroundColor: '#fff', color: '#E53935' },
                                }}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {promo.buttonText}
                            </Button>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default PromotionsSection;
