// src/components/WhatsAppButton.js
import React from 'react';
import whatsappIcon from '../assets/whatsapp-icon.png'; // Asegúrate de que esta es la ruta correcta

const WhatsAppButton = () => {
    const phoneNumber = "+54 9 223 600-3351"; // Reemplaza con el número real
    const message = "Hola, estoy interesado en los servicios de FMSuspensión.";

    return (
        <a
        href={`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`}
        target="_blank"
        rel="noopener noreferrer"
        style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            backgroundColor: '#000',
            borderRadius: '50%',
            padding: '15px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
            transition: 'transform 0.3s, box-shadow 0.3s',
            zIndex: 1000,  // Agregar z-index alto
        }}
        onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.1)';
            e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.5)';
        }}
        onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.3)';
        }}
    >
        <img 
            src={whatsappIcon} 
            alt="WhatsApp" 
            style={{ 
                width: '30px', 
                height: '30px', 
                filter: 'invert(100%)', 
            }} 
        />
    </a>
    
    );
};

export default WhatsAppButton;
