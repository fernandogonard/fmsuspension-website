import React, { Suspense } from 'react';
import { CssBaseline, ThemeProvider, createTheme, CircularProgress } from '@mui/material';
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
            </Helmet>

            <Suspense fallback={<div style={{ textAlign: 'center', padding: '50px' }}><CircularProgress color="primary" /><p>Cargando contenido, por favor espera...</p></div>}>
                <header>
                    <Navbar />
                </header>
                
                <main role="main">
                    <SlideBack />

                    {/* Encabezado H1 para SEO */}
                    <Element name="inicio" aria-label="Inicio">
                        <h1 style={{ display: 'none' }}>Mecánica de Confianza en Mar del Plata</h1> {/* Encabezado principal, oculto pero accesible para SEO */}
                        <h1>Mecánica de Confianza en Mar del Plata</h1> {/* Título visible en la página */}
                    </Element>

                    <section aria-labelledby="servicios-title">
                        <Element name="servicios">
                            <h2 id="servicios-title">Nuestros Servicios</h2>
                            <ServicesComponent />
                        </Element>
                    </section>

                    <section aria-labelledby="promociones-title">
                        <Element name="promociones">
                            <h2 id="promociones-title">Promociones Especiales</h2>
                            <PromotionsSection />
                        </Element>
                    </section>

                    <section aria-labelledby="about-us-title">
                        <Element name="sobre-nosotros">
                            <h2 id="about-us-title">Sobre Nosotros</h2>
                            <AboutUs />
                        </Element>
                    </section>

                    <section aria-labelledby="testimonios-title">
                        <Element name="testimonios">
                            <h2 id="testimonios-title">La opinion de  nuestros Clientes</h2>
                            <TestimonialsSection />
                        </Element>
                    </section>

                    <section aria-labelledby="contacto-title">
                        <Element name="contacto">
                            <h2 id="contacto-title">Contáctanos</h2>
                            <ContactSection />
                        </Element>
                    </section>

                    {/* Título de Dónde ubicarnos y Mapa */}
                    <section aria-labelledby="ubicacion-title">
                        <h2 id="ubicacion-title">Dónde encontrarnos</h2>
                        <MapContainer />
                    </section>

                    {/* Botón de WhatsApp */}
                    <WhatsAppButton />
                </main>

                <Footer />
            </Suspense>
        </ThemeProvider>
    );
}

export default App;
