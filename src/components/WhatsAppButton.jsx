// src/components/WhatsAppButton.js
import React from 'react';

import { Helmet } from 'react-helmet-async'; // Para añadir meta datos específicos
import './WhatsAppButton.css';
import whatsappIcon from '../assets/whatsapp-icon.png'; // Ajusta la ruta según la ubicación

const WhatsAppButton = () => {
    const phoneNumber = "+5492236003351"; // Estandarizado sin espacios ni guiones
    const message = "Hola, estoy interesado en los servicios de FMSuspensión.";

    return (
        <>
            {/* Helmet para meta etiqueta de preconexión a WhatsApp */}
            <Helmet>
                <link rel="preconnect" href="https://api.whatsapp.com" />
                <meta name="description" content="Comunícate con FMSuspensión a través de WhatsApp para consultas rápidas y asistencia personalizada." />
            </Helmet>

            <a
                href={`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-button"
                aria-label="Enviar un mensaje a FMSuspensión en WhatsApp"
            >
                <img
                    src={whatsappIcon}
                    alt="Icono de WhatsApp"
                    className="whatsapp-icon"
                    loading="lazy" // Carga diferida para mejorar rendimiento
                />
            </a>
        </>
    );
};

export default WhatsAppButton;
