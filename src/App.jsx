import React, { Suspense } from 'react';
import { CssBaseline, ThemeProvider, createTheme, CircularProgress, Box, Typography } from '@mui/material';
import { Element } from 'react-scroll';
import { Helmet } from 'react-helmet-async'; // Importa Helmet para mejorar las meta etiquetas
import './App.css';
import './components/SlideBack.css';

// Importación de componentes
const Footer = React.lazy(() => import('./components/Footer'));
const WhatsAppButton = React.lazy(() => import('./components/WhatsAppButton'));
const MapContainer = React.lazy(() => import('./components/MapContainer'));
const ServicesComponent = React.lazy(() => import('./sections/ServicesComponent'));
const TestimonialsSection = React.lazy(() => import('./sections/TestimonialsSection'));
const ContactSection = React.lazy(() => import('./sections/ContactSection'));
const PromotionsSection = React.lazy(() => import('./sections/PromotionsSection'));
const AboutUs = React.lazy(() => import('./components/AboutUs'));
const Navbar = React.lazy(() => import('./components/Navbar'));
const SlideBack = React.lazy(() => import('./components/SlideBack'));

// Creación de un tema utilizando MUI
const theme = createTheme({
    palette: {
        primary: { main: '#E53935' },
        secondary: { main: '#FFFFFF' },
        background: {
            default: '#000000',
            paper: '#424242',
        },
        text: { primary: '#FFFFFF', secondary: '#BDBDBD' },
    },
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            
            {/* Helmet para optimización SEO */}
            <Helmet>
    <title>Mecánica de Confianza en Mar del Plata - FMSuspensión</title>
    <meta name="description" content="Expertos en reparación automotriz en Mar del Plata. Ofrecemos servicios de alta calidad con tecnología avanzada y personal comprometido con el cliente." />
    <meta name="keywords" content="mecánica, reparación de autos, Mar del Plata, mantenimiento de vehículos, taller automotriz" />
    <meta name="robots" content="index,follow" />
    {/* Metaetiquetas de Open Graph */}
    <meta property="og:title" content="Mecánica de Confianza en Mar del Plata - FMSuspensión" />
    <meta property="og:description" content="Expertos en reparación automotriz en Mar del Plata. Ofrecemos servicios de alta calidad con tecnología avanzada y personal comprometido con el cliente." />
    <meta property="og:image" content="URL_DE_LA_IMAGEN_COMPARTIBLE" /> {/* Reemplaza con la URL de una imagen representativa */}
    <meta property="og:url" content="URL_DE_TU_SITIO_WEB" /> {/* Reemplaza con la URL del sitio web */}
    <meta property="og:type" content="website" />
</Helmet>

            <Suspense fallback={<div style={{ textAlign: 'center', padding: '50px' }}><CircularProgress color="primary" /><p>Cargando contenido, por favor espera...</p></div>}>
                <header>
                    <Navbar />
                </header>
                
                <main role="main">
                    <SlideBack />

                    {/* Encabezado H1 para SEO */}

                    <Element name="inicio" aria-label="Inicio">
                        <Typography variant="h2" align="center" color="primary" sx={{ fontWeight: 'bold', mt: 10, mb: 6, fontSize: { xs: 28, sm: 36, md: 44 } }}>
                            Mecánica de Confianza en Mar del Plata
                        </Typography>
                    </Element>

                    <Element name="services">
                        <Box sx={{ py: { xs: 5, md: 8 }, maxWidth: 1200, mx: 'auto', bgcolor: '#232323', borderRadius: 4, my: 4, boxShadow: 3, minHeight: '1px' }}>
                            <ServicesComponent />
                        </Box>
                    </Element>

                    <Element name="promociones">
                        <Box sx={{ py: { xs: 5, md: 8 }, maxWidth: 1200, mx: 'auto', bgcolor: '#232323', borderRadius: 4, my: 4, boxShadow: 3, minHeight: '1px' }}>
                            <PromotionsSection />
                        </Box>
                    </Element>

                    <Element name="sobre-nosotros">
                        <Box sx={{ py: { xs: 5, md: 8 }, maxWidth: 1000, mx: 'auto', bgcolor: '#232323', borderRadius: 4, my: 4, boxShadow: 3, minHeight: '1px' }}>
                            <AboutUs />
                        </Box>
                    </Element>

                    <Element name="testimonials">
                        <Box sx={{ py: { xs: 5, md: 8 }, maxWidth: 900, mx: 'auto', bgcolor: '#232323', borderRadius: 4, my: 4, boxShadow: 3, minHeight: '1px' }}>
                            <TestimonialsSection />
                        </Box>
                    </Element>

                    <Element name="contact">
                        <Box sx={{ py: { xs: 5, md: 8 }, maxWidth: 600, mx: 'auto', bgcolor: '#232323', borderRadius: 4, my: 4, boxShadow: 3, minHeight: '1px' }}>
                            <ContactSection />
                        </Box>
                    </Element>

                    <Element name="ubicacion">
                        <Box sx={{ py: { xs: 5, md: 8 }, maxWidth: 900, mx: 'auto', bgcolor: '#232323', borderRadius: 4, my: 4, boxShadow: 3, minHeight: '1px' }}>
                            <Typography variant="h4" align="center" color="primary" sx={{ fontWeight: 'bold', mb: 4 }}>
                                Dónde encontrarnos
                            </Typography>
                            <MapContainer />
                        </Box>
                    </Element>

                    {/* Botón de WhatsApp */}
                    <WhatsAppButton />
                </main>

                <Footer />
            </Suspense>
        </ThemeProvider>
    );
}

export default App;
