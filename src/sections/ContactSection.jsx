import React, { useState } from 'react';
import { Container, TextField, Button } from '@mui/material';

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
                <form onSubmit={handleSubmit} aria-labelledby="contact-form">
                    <TextField
                        label="Nombre"
                        name="nombre"
                        variant="outlined"
                        fullWidth
                        required
                        margin="normal"
                        color="secondary"
                        value={formData.nombre}
                        onChange={handleChange}
                        autoComplete="name" // Agregado atributo autocomplete para nombre
                        inputProps={{ 'aria-label': 'Nombre' }}
                        sx={{
                            transition: 'border-color 0.3s',
                            '&:hover': { borderColor: '#E53935' }
                        }}
                    />
                    <TextField
                        label="Email"
                        name="email"
                        variant="outlined"
                        fullWidth
                        required
                        margin="normal"
                        color="secondary"
                        value={formData.email}
                        onChange={handleChange}
                        autoComplete="email" // Agregado atributo autocomplete para email
                        inputProps={{ 'aria-label': 'Email' }}
                        sx={{
                            transition: 'border-color 0.3s',
                            '&:hover': { borderColor: '#E53935' }
                        }}
                    />
                    <TextField
                        label="Mensaje"
                        name="mensaje"
                        variant="outlined"
                        fullWidth
                        required
                        margin="normal"
                        color="secondary"
                        value={formData.mensaje}
                        onChange={handleChange}
                        autoComplete="off" // Agregado para que no autocomplete el mensaje
                        inputProps={{ 'aria-label': 'Mensaje' }}
                        multiline
                        minRows={4}
                        sx={{
                            transition: 'border-color 0.3s',
                            '&:hover': { borderColor: '#E53935' }
                        }}
                    />
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
