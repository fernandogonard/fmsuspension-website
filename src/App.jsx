// src/App.jsx
import React, { Suspense } from 'react';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
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
        primary: {
            main: '#E53935', // Rojo vibrante
        },
        secondary: {
            main: '#FFFFFF', // Blanco
        },
        background: {
            default: '#000000', // Fondo negro
            paper: '#424242', // Gris oscuro para papeles
        },
        text: {
            primary: '#FFFFFF', // Texto blanco
            secondary: '#BDBDBD', // Gris claro para texto secundario
        },
    },
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Suspense fallback={<div>Cargando...</div>}>
                <Navbar />
                <SlideBack />
                <ServicesComponent />
                <PromotionsSection />
                <AboutUs />
                <TestimonialsSection />
                <ContactSection />
                <MapContainer />
                <WhatsAppButton />
                <Footer />
            </Suspense>
        </ThemeProvider>
    );
}

export default App;
