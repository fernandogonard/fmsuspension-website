import React, { useState } from 'react';
import './ContactSection.css';

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

        // Validación de campos
        if (!nombre || !email || !mensaje) {
            alert('Por favor, completa todos los campos.');
            return;
        }

        const mensajeWhatsapp = `Hola, soy ${nombre}. Mi correo es: ${email}. Mensaje: ${mensaje}`;
        const whatsappUrl = `https://api.whatsapp.com/send?phone=+5492236003351&text=${encodeURIComponent(mensajeWhatsapp)}`;
        
        // Abrir WhatsApp en una nueva pestaña
        window.open(whatsappUrl, '_blank');
    };

    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-group">
                        <label htmlFor="nombre">Nombre</label>
                        <input 
                            type="text" 
                            id="nombre" 
                            name="nombre" 
                            value={formData.nombre} 
                            onChange={handleChange} 
                            required 
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            value={formData.email} 
                            onChange={handleChange} 
                            required 
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="mensaje">Mensaje</label>
                        <textarea 
                            id="mensaje" 
                            name="mensaje" 
                            rows="4" 
                            value={formData.mensaje} 
                            onChange={handleChange} 
                            required 
                        ></textarea>
                    </div>

                    <button type="submit" className="submit-button">Enviar</button>
                </form>
            </div>
        </section>
    );
};

export default ContactSection;
