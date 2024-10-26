// src/App.jsx
import React from 'react';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import './App.css';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import MapContainer from './components/MapContainer';

import ServicesComponent from './sections/ServicesComponent';
import TestimonialsSection from './sections/TestimonialsSection';
import ContactSection from './sections/ContactSection';
import PromotionsSection from './sections/PromotionsSection';
import AboutUs from './components/AboutUs';  // <--- Importa el nuevo componente
import Navbar from './components/Navbar';
import SlideBack from './components/SlideBack';
import './components/SlideBack.css';

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
            <SlideBack />
            <ServicesComponent />
            <PromotionsSection />
            <AboutUs /> {/* <--- Agrega el componente aquí */} 
            <TestimonialsSection />
            <ContactSection />
            <MapContainer />
            <WhatsAppButton />
            <Footer />
        </ThemeProvider>
    );
}

export default App;
