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

import image1 from '../assets/20241015_081502.jpg';
import image2 from '../assets/20241014_182757.jpg';
import image3 from '../assets/20241011_112651.jpg';
import image4 from '../assets/20241015_135538.jpg';
import image5 from '../assets/20241015_135603.jpg';
import image6 from '../assets/20241015_162231.jpg';
import image7 from '../assets/20241016_145129.jpg';
import image8 from '../assets/20241023_081246.jpg';

const slidesData = [
  { image: image1 },
  { image: image2 },
  { image: image3 },
  { image: image4 },
  { image: image5 },
  { image: image6 },
  { image: image7 },
  { image: image8 },
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
            <div
              className="slide-back__image"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
              aria-hidden="true"
              role="img"
              loading="lazy"
              alt={`Imagen ${index + 1} de los servicios de FMSuspensión`}
            ></div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Bloque de Texto */}
      <div className="slide-back__content">
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
