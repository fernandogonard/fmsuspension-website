// src/sections/ContactSection.js
import React, { useState } from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';

const ContactSection = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        mensaje: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { nombre, email, mensaje } = formData;
        const mensajeWhatsapp = `Hola, soy ${nombre}. Mi correo es: ${email}. Mensaje: ${mensaje}`;
        const whatsappUrl = `https://api.whatsapp.com/send?phone=+5492236003351&text=${encodeURIComponent(mensajeWhatsapp)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <section id="contact" style={{ padding: '50px 0', backgroundColor: '#424242' }}>
            <Container>
                <Typography variant="h4" gutterBottom color="secondary" component="h2" aria-labelledby="contact-title">
                    Contáctanos
                </Typography>
                <form onSubmit={handleSubmit} aria-labelledby="contact-form">
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
                            sx={{
                                transition: 'border-color 0.3s',
                                '&:hover': { borderColor: '#E53935' }
                            }}
                            inputProps={{ 'aria-label': label }} // Atributo aria para accesibilidad
                        />
                    ))}
                    <Button 
                        variant="contained" 
                        color="primary" 
                        type="submit" 
                        sx={{ marginTop: '20px', transition: 'background-color 0.3s' }}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#BDBDBD'}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#E53935'}>
                        Enviar
                    </Button>
                </form>
            </Container>
        </section>
    );
};

export default ContactSection;
