// src/components/SlideBack.js
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectFade, Autoplay } from 'swiper/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { Helmet } from 'react-helmet-async'; // Para añadir meta datos específicos
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import image1 from '../assets/alineacion-auto-ford-focus.jpg'; // Alineación de auto Ford Focus
import image2 from '../assets/balanceo-auto-toyota-corolla.jpg'; // Balanceo de auto Toyota Corolla
import image3 from '../assets/mecanica-general-chevrolet-s10.jpg'; // Mecánica general para Chevrolet S10
import image4 from '../assets/reparacion-frenos-volkswagen-golf.jpg'; // Reparación de frenos para Volkswagen Golf
import image5 from '../assets/suspension-auto-renault-duster.jpg'; // Suspensión de auto Renault Duster
import image6 from '../assets/mantenimiento-auto-peugeot-208.jpg'; // Mantenimiento integral para Peugeot 208
import image7 from '../assets/diagnostico-auto-honda-civic.jpg'; // Diagnóstico automotriz para Honda Civic
import image8 from '../assets/reparacion-neumaticos-nissan-versa.jpg'; // Reparación de neumáticos para Nissan Versa

const slidesData = [
  { image: image1, alt: 'Alineación de auto Ford Focus en FMSuspensión, Mar del Plata - Reparación de tren delantero y alineación precisa.' },
  { image: image2, alt: 'Balanceo de auto Toyota Corolla en FMSuspensión - Servicio especializado en balanceo de neumáticos.' },
  { image: image3, alt: 'Mecánica general para Chevrolet S10 en FMSuspensión - Soluciones confiables para tu vehículo.' },
  { image: image4, alt: 'Reparación de frenos para Volkswagen Golf en FMSuspensión - Servicio de frenos seguro y eficiente.' },
  { image: image5, alt: 'Suspensión de auto Renault Duster en FMSuspensión - Especialistas en suspensión y tren delantero.' },
  { image: image6, alt: 'Mantenimiento integral para Peugeot 208 en FMSuspensión - Servicio mecánico completo para tu auto.' },
  { image: image7, alt: 'Diagnóstico automotriz para Honda Civic en FMSuspensión - Soluciones rápidas y efectivas.' },
  { image: image8, alt: 'Reparación de neumáticos para Nissan Versa en FMSuspensión - Servicios de alineación y balanceo de alta calidad.' },
];

// Información de contacto de WhatsApp
const phoneNumber = "+5492236003351"; // Estandarizado sin espacios ni guiones
const whatsappMessage = "Hola, estoy interesado en los servicios de FMSuspensión.";

const SlideBack = () => {
  return (
    <div className="slide-back" role="region" aria-label="Presentación de servicios">
      <Helmet>
        <title>Servicios de FMSuspensión - Mar del Plata</title>
        <meta name="description" content="Servicios de alineación, balanceo y mecánica en Mar del Plata, ubicados en Ituzaingó 5848. Experiencia y confianza en el cuidado de tu auto." />
        <link rel="canonical" href="https://fmsuspension.com/servicios" />
      </Helmet>

      <Swiper
        modules={[Navigation, Pagination, EffectFade, Autoplay]}
        spaceBetween={30}
        effect="fade"
        pagination={{ clickable: true }}
        navigation
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        speed={1000}
      >
        {slidesData.map((slide, index) => (
          <SwiperSlide key={index}>
            <img
              src={slide.image}
              alt={slide.alt}
              className="slide-back__image"
              loading="lazy"
              style={{
                width: '100%', // Asegúrate de que la imagen ocupe el 100% del ancho del contenedor
                height: 'auto', // Mantiene la proporción de la imagen
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Bloque de Texto */}
      <div className="slide-back__content">
        <h1>FM SUSPENSION</h1>
        <p>
          <FontAwesomeIcon icon={faMapMarkerAlt} className="location-icon" />
          Ituzaingó 5848, Mar del Plata
        </p>
        <p>Desde hace más de 15 años solucionando las necesidades de tu auto.</p>

        {/* Servicios Destacados */}
        <section className="services-container" aria-label="Servicios ofrecidos">
          {['Alineación', 'Balanceo', 'Frenos', 'Mecánica en general'].map((service, index) => (
            <button
              key={index}
              className="service-card"
              onClick={() => alert(`${service} seleccionada`)}
              aria-label={`Seleccionar servicio de ${service}`}
            >
              <span className="arrow-icon">→</span> {service}
            </button>
          ))}
        </section>

        {/* Botón de Contacto por WhatsApp */}
        <button
          className="contact-button"
          onClick={() => window.open(`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(whatsappMessage)}`, '_blank')}
          aria-label="Enviar un mensaje a FMSuspensión en WhatsApp"
        >
          Contáctanos en WhatsApp
        </button>
      </div>
    </div>
  );
};

export default SlideBack;
