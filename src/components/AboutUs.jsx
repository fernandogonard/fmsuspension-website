
import React from "react";
import { Helmet } from "react-helmet-async";
import { Box, Typography, Container, Card, CardContent, useTheme } from "@mui/material";
import { keyframes } from "@mui/system";

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: none; }
`;

export default function AboutUs() {
  const theme = useTheme();
  return (
    <>
      <Helmet>
        <title>FMSuspensión - Mecánicos de Confianza en Mar del Plata</title>
        <meta
          name="description"
          content="En FMSuspensión, ofrecemos servicios de mecánica general, frenos, alineación, balanceo, y reparación, arreglo  de tren delantero en Mar del Plata. Somos tu taller de confianza para el mantenimiento de autos."
        />
        <meta
          name="keywords"
          content="mecánica general Mar del Plata, taller de frenos, alineación y balanceo Mar del Plata, mecánicos de autos Mar del Plata, tren delantero, reparación de autos Mar del Plata, taller de mecánica en Mar del Plata, frenos Mar del Plata"
        />
        <meta name="robots" content="index,follow" />
      </Helmet>

      <Box
        component="section"
        sx={{
          background: `linear-gradient(90deg, ${theme.palette.primary.dark} 0%, #232323 100%)`,
          color: '#fff',
          py: { xs: 6, md: 10 },
          px: { xs: 1, sm: 2 },
        }}
      >
        <Container maxWidth="md">
          <Card
            component="article"
            elevation={8}
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: 'center',
              p: { xs: 2, md: 4 },
              borderRadius: 4,
              boxShadow: '0 8px 32px 0 rgba(0,0,0,0.18)',
              background: '#232323',
              animation: `${fadeInUp} 0.8s cubic-bezier(.39,.575,.565,1) both`,
              mb: 2,
            }}
          >
            <Box
              sx={{
                flex: { xs: 'none', md: '1 1 40%' },
                width: { xs: '100%', md: '40%' },
                mr: { md: 4 },
                mb: { xs: 3, md: 0 },
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Box
                sx={{
                  width: { xs: '100%', sm: 320, md: 340 },
                  height: { xs: 180, sm: 220, md: 260 },
                  overflow: 'hidden',
                  borderRadius: 3,
                  boxShadow: '0 4px 24px 0 rgba(0,0,0,0.18)',
                  background: '#111',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <img
                  src="/assets/quienessomos.jpg"
                  alt="Equipo de mecánicos de Mar del Plata con experiencia y dedicación"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'inherit', border: 'none' }}
                  loading="lazy"
                />
              </Box>
            </Box>
            <CardContent
              sx={{
                flex: { xs: 'none', md: '1 1 60%' },
                width: { xs: '100%', md: '60%' },
                p: { xs: 1, md: 2 },
                color: '#fff',
              }}
            >
              <Typography
                variant="h4"
                color="primary"
                sx={{ fontWeight: 800, mb: 2, letterSpacing: 1, fontSize: { xs: 24, sm: 32, md: 38 } }}
              >
                Mecánicos de Confianza en Mar del Plata
              </Typography>
              <Typography variant="body1" sx={{ mb: 2, fontSize: 18, opacity: 0.92, lineHeight: 1.7 }}>
                FMSuspensión es un taller de mecánica general fundado por dos hermanos apasionados por la reparación de autos en Mar del Plata. Con años de experiencia en el rubro, nos especializamos en servicios de alta calidad como reparación de frenos, alineación, balanceo y reparación de tren delantero. En nuestro taller, trabajamos con la mejor tecnología para ofrecer un servicio rápido, eficiente y confiable a cada cliente.
              </Typography>
              <Typography variant="body1" sx={{ mb: 2, fontSize: 18, opacity: 0.92, lineHeight: 1.7 }}>
                Nuestra misión es ofrecer soluciones mecánicas integrales para autos, con un enfoque personalizado y cercano. Si necesitas reparar tus frenos, hacer una alineación o balanceo, o atender cualquier otra necesidad de mantenimiento o reparación, en FMSuspensión encontrarás un equipo de expertos dispuestos a ayudarte. Como mecánicos locales en Mar del Plata, comprendemos la importancia de mantener tu vehículo en óptimas condiciones para que sigas circulando con total seguridad.
              </Typography>
              <Typography variant="body1" sx={{ fontSize: 18, opacity: 0.92, lineHeight: 1.7 }}>
                Ofrecemos una atención al cliente de calidad, priorizando la confianza y transparencia en cada servicio. Desde reparaciones complejas hasta el mantenimiento rutinario, en FMSuspensión siempre buscamos que te sientas tranquilo sabiendo que tu auto está en las mejores manos.
              </Typography>
            </CardContent>
          </Card>
        </Container>
      </Box>
    </>
  );
}
