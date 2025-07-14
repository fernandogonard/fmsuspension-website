import React, { useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import './ContactSection.css';

const ContactSection = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        mensaje: ''
    });

    const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'info' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { nombre, email, mensaje } = formData;

        // Validación de campos
        if (!nombre || !email || !mensaje) {
            setSnackbar({ open: true, message: 'Por favor, completa todos los campos.', severity: 'warning' });
            return;
        }

        const mensajeWhatsapp = `Hola, soy ${nombre}. Mi correo es: ${email}. Mensaje: ${mensaje}`;
        const whatsappUrl = `https://api.whatsapp.com/send?phone=+5492236003351&text=${encodeURIComponent(mensajeWhatsapp)}`;
        window.open(whatsappUrl, '_blank');
        setSnackbar({ open: true, message: 'Redirigiendo a WhatsApp...', severity: 'success' });
    };

    return (
        <section id="contact" className="contact-section" style={{ background: '#232323', padding: '40px 0', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Box display="flex" justifyContent="center" alignItems="center" width="100%" minHeight={{ xs: 'auto', md: '60vh' }}>
                <Paper elevation={6} sx={{ p: 4, maxWidth: 420, width: '100%', bgcolor: 'background.paper', color: 'text.primary' }}>
                    <Typography variant="h5" component="h2" gutterBottom align="center" color="primary">
                        Contáctanos
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        <TextField
                            label="Nombre"
                            name="nombre"
                            value={formData.nombre}
                            onChange={handleChange}
                            required
                            fullWidth
                        />
                        <TextField
                            label="Email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            fullWidth
                        />
                        <TextField
                            label="Mensaje"
                            name="mensaje"
                            value={formData.mensaje}
                            onChange={handleChange}
                            required
                            multiline
                            rows={4}
                            fullWidth
                        />
                        <Button type="submit" variant="contained" color="primary" size="large" sx={{ mt: 2 }}>
                            Enviar
                        </Button>
                    </Box>
                </Paper>
                <Snackbar open={snackbar.open} autoHideDuration={4000} onClose={() => setSnackbar({ ...snackbar, open: false })} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
                    <MuiAlert onClose={() => setSnackbar({ ...snackbar, open: false })} severity={snackbar.severity} sx={{ width: '100%' }} elevation={6} variant="filled">
                        {snackbar.message}
                    </MuiAlert>
                </Snackbar>
            </Box>
        </section>
    );
};

export default ContactSection;
