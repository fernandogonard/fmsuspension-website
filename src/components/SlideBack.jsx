import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectFade, Autoplay } from 'swiper/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
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

const SlideBack = () => {
  return (
    <div className="slide-back">
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
        style={{ height: '100vh' }}
      >
        {slidesData.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="slide-back__image"
              style={{
                backgroundImage: `url(${slide.image})`,
                height: '100vh',
              }}
            ></div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Bloque de texto fijo */}
      <div className="slide-back__content">
        {/* Ícono de ubicación */}
        <p>
          <FontAwesomeIcon icon={faMapMarkerAlt} className="location-icon" /> 
          Ituzaingó 5848, Mar del Plata
        </p>
        <p>Desde hace más de 15 años solucionando las necesidades de tu auto.</p>

        <ul className="services-list">
          <li>
            <button className="service-button" onClick={() => alert('Alineación seleccionada')}>
              <span className="arrow-icon">→</span> Alineación
            </button>
          </li>
          <li>
            <button className="service-button" onClick={() => alert('Balanceo seleccionado')}>
              <span className="arrow-icon">→</span> Balanceo
            </button>
          </li>
          <li>
            <button className="service-button" onClick={() => alert('Frenos seleccionados')}>
              <span className="arrow-icon">→</span> Frenos
            </button>
          </li>
          <li>
            <button className="service-button" onClick={() => alert('Mecánica en general seleccionada')}>
              <span className="arrow-icon">→</span> Mecánica en general
            </button>
          </li>
        </ul>

        <button className="contact-button" onClick={() => window.location.href = "mailto:contacto@fmsuspension.com"}>
          Contáctanos
        </button>
      </div>
    </div>
  );
};

export default SlideBack;
