import React from 'react';
import './ServicesComponent.css';
import { FaCar, FaWrench, FaOilCan, FaBalanceScale, FaCheckCircle } from 'react-icons/fa';

const services = [
  {
    icon: <FaCar />,
    title: 'Neumáticos',
    description: 'Encuentra neumáticos de calidad y seguridad para cualquier temporada. Te ayudamos a elegir y colocar los neumáticos ideales.',
  },
  {
    icon: <FaWrench />,
    title: 'Tren delantero y trasero',
    description: 'Mantén la estabilidad de tu vehículo con nuestro servicio de tren delantero y trasero. Ajustamos para un manejo suave.',
  },
  {
    icon: <FaBalanceScale />,
    title: 'Alineación 3D, balanceo y rotación',
    description: 'Mejora el desgaste de tus neumáticos y la conducción con alineación 3D, balanceo y rotación profesional.',
  },
  {
    icon: <FaOilCan />,
    title: 'Frenos',
    description: 'Tu seguridad es primordial. Ofrecemos servicios completos de frenos para un rendimiento óptimo.',
  },
  {
    icon: <FaWrench />,
    title: 'Service',
    description: 'Servicios preventivos en distribución y filtros, aceite y control de fluidos de tu vehículo.',
  },
  {
    icon: <FaCheckCircle />,
    title: 'Pre-Post VTV',
    description: 'Listo para la verificación técnica. Aseguramos que tu vehículo cumpla los estándares requeridos.',
  },
];

const ServicesComponent = () => {
  return (
    <div className="services-container">
      {services.map((service, index) => (
        <div key={index} className="service-card">
          <div className="service-icon">{service.icon}</div>
          <h3 className="service-title">{service.title}</h3>
          <p className="service-description">{service.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ServicesComponent;
