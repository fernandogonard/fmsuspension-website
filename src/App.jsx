import React, { Suspense } from 'react';
import { CssBaseline, ThemeProvider, createTheme, CircularProgress, Box, Typography } from '@mui/material';
import { Element } from 'react-scroll';
import { Helmet } from 'react-helmet-async';
import ErrorBoundary from './components/ErrorBoundary';
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
    <meta property="og:image" content="https://fmsuspension.netlify.app/og-image.png" />
    <meta property="og:url" content="https://fmsuspension.netlify.app/" />
    <meta property="og:type" content="website" />
    <script type="application/ld+json">{JSON.stringify({
      "@context": "https://schema.org",
      "@type": "AutoRepair",
      "name": "FMSuspensi\u00f3n",
      "description": "Taller mec\u00e1nico especializado en suspensi\u00f3n, alineaci\u00f3n, balanceo y frenos en Mar del Plata.",
      "url": "https://fmsuspension.netlify.app/",
      "image": "https://fmsuspension.netlify.app/og-image.png",
      "telephone": "+5492236003351",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Ituzaing\u00f3 5848",
        "addressLocality": "Mar del Plata",
        "addressRegion": "Buenos Aires",
        "addressCountry": "AR"
      },
      "openingHours": "Mo-Fr 08:00-18:00",
      "priceRange": "$$",
      "sameAs": ["https://fmsuspension.netlify.app/", "https://www.instagram.com/fm_suspension/", "https://www.facebook.com/fmsuspension"]
    })}</script>
</Helmet>

            <ErrorBoundary>
            <Suspense fallback={<Box sx={{ display:'flex', flexDirection:'column', alignItems:'center', py: 10 }}><CircularProgress color="primary" /><Typography sx={{ mt: 2, color: '#fff' }}>Cargando...</Typography></Box>}>
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
            </ErrorBoundary>
        </ThemeProvider>
    );
}

export default App;
