// src/components/SlideBack.js
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectFade, Autoplay } from 'swiper/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faCogs } from '@fortawesome/free-solid-svg-icons'; 
import { Helmet } from 'react-helmet-async'; 
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import image1 from '../assets/alineacion-auto-ford-focus.webp'; 
import image2 from '../assets/balanceo-auto-toyota-corolla.webp'; 
import image3 from '../assets/mecanica-general-chevrolet-s10.webp'; 
import image4 from '../assets/reparacion-frenos-volkswagen-golf.webp'; 
import image5 from '../assets/suspension-auto-renault-duster.webp'; 
import image6 from '../assets/mantenimiento-auto-peugeot-208.webp'; 
import image7 from '../assets/diagnostico-auto-honda-civic.webp'; 
import image8 from '../assets/reparacion-neumaticos-nissan-versa.webp'; 

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

const phoneNumber = "+5492236003351"; 
const whatsappMessage = "Hola, estoy interesado en los servicios de FMSuspensión.";

const SlideBack = () => {
  const handleServiceRequest = (service) => {
    alert(`Solicitud de servicio: ${service}`);
  };

  return (
    <div className="slide-back" role="region" aria-label="Presentación de servicios">
      <Helmet>
        <title>Servicios de FMSuspensión - Mar del Plata</title>
        <meta name="description" content="Servicios de alineación, balanceo y mecánica en Mar del Plata, ubicados en Ituzaingó 5848. Experiencia y confianza en el cuidado de tu auto." />
        <link href="https://fmsuspension.netlify.app/" rel="canonical" />
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
  slidesPerView={1} // Ajusta este valor según tus necesidades
>

        {slidesData.map((slide, index) => (
          <SwiperSlide key={index}>
            <img
              src={slide.image}
              alt={slide.alt}
              className="slide-back__image"
              loading="lazy"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="slide-back__content">
        <h1>FM SUSPENSION</h1>
        <p>
          <FontAwesomeIcon icon={faMapMarkerAlt} className="location-icon" />
          Ituzaingó 5848, Mar del Plata
        </p>
        <p>Desde hace más de 15 años solucionando las necesidades de tu auto.</p>

        <section className="services-container" aria-label="Servicios ofrecidos">
          {['Alineación', 'Balanceo', 'Frenos', 'Mecánica en general'].map((service, index) => (
            <button
              key={index}
              className="service-card"
              aria-label={`Solicitar servicio de ${service}`}
              onClick={() => handleServiceRequest(service)}
              tabIndex={0}
            >
              <FontAwesomeIcon icon={faCogs} className="arrow-icon" />
              {service}
            </button>
          ))}
        </section>

        <a
          href={`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(whatsappMessage)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="contact-button"
          aria-label="Contáctanos por WhatsApp"
        >
          Contáctanos
        </a>
      </div>
    </div>
  );
};

export default SlideBack;
