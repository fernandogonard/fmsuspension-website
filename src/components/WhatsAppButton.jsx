// src/components/WhatsAppButton.js
import React from 'react';
import './WhatsAppButton.css';
import whatsappIcon from '../assets/whatsapp-icon.png';

const WhatsAppButton = () => {
    const phoneNumber = "+5492236003351";
    const message = "Hola, estoy interesado en los servicios de FMSuspensión.";

    return (
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
                    loading="lazy"
                />
            </a>
    );
};

export default WhatsAppButton;
