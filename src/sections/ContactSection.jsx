// src/sections/ContactSection.js
import React from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';

const ContactSection = () => {
    return (
        <Container id="contact" style={{ padding: '50px 0', backgroundColor: '#424242' }}>
            <Typography variant="h4" gutterBottom color="secondary">
                Contáctanos
            </Typography>
            <form>
                {['Nombre', 'Email', 'Mensaje'].map((label, index) => (
                    <TextField 
                        key={index}
                        label={label} 
                        variant="outlined" 
                        fullWidth 
                        required 
                        margin="normal" 
                        color="secondary" 
                        style={{ transition: 'border-color 0.3s', '&:hover': { borderColor: '#E53935' } }} 
                    />
                ))}
                <Button variant="contained" color="primary" type="submit" style={{ marginTop: '20px', transition: 'background-color 0.3s' }} 
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#BDBDBD'} 
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#E53935'}>
                    Enviar
                </Button>
            </form>
        </Container>
    );
};

export default ContactSection;
