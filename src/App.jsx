// src/App.jsx
import React from 'react';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import HomeSection from './sections/HomeSection';
import ServicesSection from './sections/ServicesSection';
import TestimonialsSection from './sections/TestimonialsSection';
import ContactSection from './sections/ContactSection';
import PromotionsSection from './sections/PromotionsSection'; // Nueva sección importada
import Navbar from './components/Navbar'; // Nueva sección importada

// Define la paleta de colores
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
            <Navbar />
            <HomeSection />
            <ServicesSection />
            <PromotionsSection /> {/* Sección de promociones añadida */}
            <TestimonialsSection />
            <ContactSection />
            <WhatsAppButton />
            <Footer />
        </ThemeProvider>
    );
}

export default App;
