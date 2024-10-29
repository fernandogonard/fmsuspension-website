import React from 'react';
import './ServicesComponent.css';
import {FaWrench, FaOilCan, FaBalanceScale, FaCheckCircle } from 'react-icons/fa';

const services = [
 
  {
    icon: <FaWrench aria-hidden="true" />,
    title: 'Tren delantero y trasero',
    description: 'Mantén la estabilidad de tu vehículo con nuestro servicio de tren delantero y trasero. Ajustamos para un manejo suave.',
  },
  {
    icon: <FaBalanceScale aria-hidden="true" />,
    title: 'Alineación, balanceo y rotación',
    description: 'Mejora el desgaste de tus neumáticos y la conducción con alineación, balanceo y rotación profesional.',
  },
  {
    icon: <FaOilCan aria-hidden="true" />,
    title: 'Frenos',
    description: 'Tu seguridad es primordial. Ofrecemos servicios completos de frenos para un rendimiento óptimo.',
  },
  {
    icon: <FaWrench aria-hidden="true" />,
    title: 'Service',
    description: 'Servicios preventivos en distribución y filtros, aceite y control de fluidos de tu vehículo.',
  },
  {
    icon: <FaCheckCircle aria-hidden="true" />,
    title: 'Pre-Post VTV',
    description: 'Listo para la verificación técnica. Aseguramos que tu vehículo cumpla los estándares requeridos.',
  },
];

const ServicesComponent = () => {
  return (
    <div className="services-container" role="region" aria-labelledby="services-title">
      <h2 id="services-title" className="services-title">Nuestros Servicios</h2>
      <div className="services-list">
        {services.map((service, index) => (
          <div key={index} className="service-card1" role="article" aria-labelledby={`service-title-${index}`}>
            <div className="service-icon">{service.icon}</div>
            <h3 id={`service-title-${index}`} className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesComponent;
