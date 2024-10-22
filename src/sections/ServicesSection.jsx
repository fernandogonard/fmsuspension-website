import React from 'react';
import { Container, Typography, Paper } from '@mui/material';

const services = [
    { title: "Tren Delantero", description: "Reparación de componentes del tren delantero." },
    { title: "Tren Trasero", description: "Servicio completo para la suspensión trasera." },
    { title: "Alineación", description: "Alineación precisa para mayor durabilidad." },
    { title: "Balanceo", description: "Balanceo electrónico para un manejo suave." },
    { title: "Frenos", description: "Inspección y reparación de frenos." },
    { title: "Gomería", description: "Cambio y reparación de neumáticos." },
];

const ServicesSection = () => {
    return (
        <Container id="services" sx={{ padding: '50px 0', backgroundColor: '#424242' }}>
            <Typography variant="h4" gutterBottom color="secondary">
                Nuestros Servicios
            </Typography>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                {services.map((service, index) => (
                    <Paper
                        key={index}
                        sx={{
                            margin: '10px',
                            padding: '20px',
                            backgroundColor: '#BDBDBD',
                            minWidth: '250px',
                            transition: 'transform 0.3s',
                            '&:hover': { transform: 'scale(1.05)' },
                        }}
                    >
                        <Typography variant="h6" color="#E53935">
                            {service.title}
                        </Typography>
                        <Typography variant="body2" color="black">
                            {service.description}
                        </Typography>
                    </Paper>
                ))}
            </div>
        </Container>
    );
};

export default ServicesSection;
