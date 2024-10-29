// src/App.jsx
import React, { Suspense } from 'react';
import { CssBaseline, ThemeProvider, createTheme, CircularProgress } from '@mui/material';
import { Element } from 'react-scroll';
import { Helmet } from 'react-helmet-async'; // Importa Helmet para mejorar las meta etiquetas
import './App.css';
import './components/SlideBack.css';

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

const theme = createTheme({
    palette: {
        primary: { main: '#E53935' }, // Rojo vibrante
        secondary: { main: '#FFFFFF' }, // Blanco
        background: {
            default: '#000000', // Fondo negro
            paper: '#424242', // Gris oscuro para papeles
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
                <title>Mecánica de Confianza en Mar del Plata</title>
                <meta
                    name="description"
                    content="Expertos en reparación automotriz en Mar del Plata. Ofrecemos servicios de alta calidad con tecnología avanzada y personal comprometido con el cliente."
                />
                <meta
                    name="keywords"
                    content="mecánica, reparación de autos, Mar del Plata, mantenimiento de vehículos, taller automotriz"
                />
                <meta name="robots" content="index,follow" />
            </Helmet>

            <Suspense fallback={<div style={{ textAlign: 'center', padding: '50px' }}><CircularProgress color="primary" /></div>}>
                <header>
                    <Navbar />
                </header>
                
                <main role="main">
                    {/* Cada sección con su Element para navegación con scroll */}
                    <SlideBack />

                    <Element name="inicio" aria-label="Inicio" />

                    <section aria-labelledby="servicios-title">
                        <Element name="servicios">
                            <ServicesComponent />
                        </Element>
                    </section>

                    <section aria-labelledby="promociones-title">
                        <Element name="promociones">
                            <PromotionsSection />
                        </Element>
                    </section>

                    <section aria-labelledby="about-us-title">
                        <Element name="sobre-nosotros">
                            <AboutUs />
                        </Element>
                    </section>

                    <section aria-labelledby="testimonios-title">
                        <Element name="testimonios">
                            <TestimonialsSection />
                        </Element>
                    </section>

                    <section aria-labelledby="contacto-title">
                        <Element name="contacto">
                            <ContactSection />
                        </Element>
                    </section>

                    {/* Mapa y botón de WhatsApp */}
                    <MapContainer />
                    <WhatsAppButton />
                </main>

                <Footer />
            </Suspense>
        </ThemeProvider>
    );
}

export default App;
