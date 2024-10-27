// src/components/WhatsAppButton.js
import React from 'react';
import whatsappIcon from '../assets/whatsapp-icon.png'; // Asegúrate de que esta es la ruta correcta
import './WhatsAppButton.css'; // Asegúrate de tener un archivo CSS

const WhatsAppButton = () => {
    const phoneNumber = "+54 9 223 600-3351"; // Reemplaza con el número real
    const message = "Hola, estoy interesado en los servicios de FMSuspensión.";

    return (
        <a
            href={`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-button" // Clases para el CSS
            aria-label="Enviar un mensaje de WhatsApp"
        >
            <img 
                src={whatsappIcon} 
                alt="Icono de WhatsApp" 
                className="whatsapp-icon" // Clases para el CSS
            />
        </a>
    );
};

export default WhatsAppButton;
