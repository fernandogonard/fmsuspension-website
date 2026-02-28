import React from 'react';
import { FaWrench, FaOilCan, FaBalanceScale, FaCheckCircle, FaCarSide } from 'react-icons/fa';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { keyframes } from '@mui/system';

const services = [
  {
    id: 'tren-delantero-trasero',
    icon: <FaWrench aria-label="Icono de herramienta" />,
    title: 'Tren delantero y trasero',
    description: 'Mantén la estabilidad de tu vehículo con nuestro servicio de tren delantero y trasero. Ajustamos para un manejo suave.',
  },
  {
    id: 'alineacion-balanceo',
    icon: <FaBalanceScale aria-label="Icono de balanceo" />,
    title: 'Alineación, balanceo y rotación',
    description: 'Mejora el desgaste de tus neumáticos y la conducción con alineación, balanceo y rotación profesional.',
  },
  {
    id: 'frenos',
    icon: <FaCarSide aria-label="Icono de frenos" />,
    title: 'Frenos',
    description: 'Tu seguridad es primordial. Ofrecemos servicios completos de frenos para un rendimiento óptimo.',
  },
  {
    id: 'service-preventivo',
    icon: <FaOilCan aria-label="Icono de aceite" />,
    title: 'Service',
    description: 'Servicios preventivos en distribución y filtros, aceite y control de fluidos de tu vehículo.',
  },
  {
    id: 'pre-post-vtv',
    icon: <FaCheckCircle aria-label="Icono de cheque" />,
    title: 'Pre-Post VTV',
    description: 'Listo para la verificación técnica. Aseguramos que tu vehículo cumpla los estándares requeridos.',
  },
];

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: none; }
`;

const ServicesComponent = () => {
  return (
    <Box id="services" sx={{ py: { xs: 4, md: 8 }, px: { xs: 1, sm: 2 }, background: 'transparent' }}>
      <Typography
        variant="h3"
        align="center"
        color="primary"
        sx={{ fontWeight: 800, mb: 6, letterSpacing: 1, fontSize: { xs: 28, sm: 36, md: 44 } }}
      >
        Nuestros Servicios
      </Typography>
      <Grid container spacing={{ xs: 3, md: 4 }} justifyContent="center">
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={service.id}>
            <Paper
              elevation={8}
              sx={{
                p: { xs: 3, md: 4 },
                textAlign: 'center',
                borderRadius: 4,
                minHeight: 240,
                background: '#353535',
                color: '#fff',
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
            >
              <Box
                sx={{
                  fontSize: 56,
                  color: 'primary.main',
                  mb: 2,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  transition: 'color 0.3s',
                  '&:hover': { color: '#fff' },
                }}
              >
                {service.icon}
              </Box>
              <Typography variant="h6" component="h4" sx={{ fontWeight: 700, mb: 1, color: 'primary.main', fontSize: 22 }}>
                {service.title}
              </Typography>
              <Typography variant="body1" color="#e0e0e0" sx={{ fontSize: 16, lineHeight: 1.5 }}>
                {service.description}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ServicesComponent;
