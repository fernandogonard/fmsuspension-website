// src/sections/ContactSection.js
import React, { useState } from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';

const ContactSection = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        mensaje: ''
    });

    // Función para manejar el cambio en los campos del formulario
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };

    // Función para manejar el envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault();
        const { nombre, email, mensaje } = formData;
        
        // Mensaje que será enviado por WhatsApp
        const mensajeWhatsapp = `Hola, soy ${nombre}. Mi correo es: ${email}. Mensaje: ${mensaje}`;

        // Reemplaza 'YOUR_PHONE_NUMBER' por tu número de WhatsApp con código de país, sin el "+"
        const whatsappUrl = `https://api.whatsapp.com/send?phone=+5492236003351&text=${encodeURIComponent(mensajeWhatsapp)}`;


        // Abrir WhatsApp en una nueva pestaña con el mensaje prellenado
        window.open(whatsappUrl, '_blank');
    };

    return (
        <Container id="contact" style={{ padding: '50px 0', backgroundColor: '#424242' }}>
            <Typography variant="h4" gutterBottom color="secondary">
                Contáctanos
            </Typography>
            <form onSubmit={handleSubmit}>
                {['Nombre', 'Email', 'Mensaje'].map((label, index) => (
                    <TextField
                        key={index}
                        label={label}
                        name={label.toLowerCase()}
                        variant="outlined"
                        fullWidth
                        required
                        margin="normal"
                        color="secondary"
                        value={formData[label.toLowerCase()]}
                        onChange={handleChange}
                        style={{ transition: 'border-color 0.3s', '&:hover': { borderColor: '#E53935' } }}
                    />
                ))}
                <Button 
                    variant="contained" 
                    color="primary" 
                    type="submit" 
                    style={{ marginTop: '20px', transition: 'background-color 0.3s' }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#BDBDBD'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#E53935'}>
                    Enviar
                </Button>
            </form>
        </Container>
    );
};

export default ContactSection;
