// src/components/WhatsAppButton.js
import React from 'react';
import './WhatsAppButton.css';
import whatsappIcon from '../assets/whatsapp-icon.png';
import { whatsappLink } from '../config/constants';

const WhatsAppButton = () => (
    <a
                href={whatsappLink('Hola, estoy interesado en los servicios de FMSuspensión.')}
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

export default WhatsAppButton;
