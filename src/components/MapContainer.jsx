// MapContainer.jsx
import React from 'react';
import './MapContainer.css';
export default function MapContainer() {

  return (
    <div style={{ position: 'relative', zIndex: 3, width: '100vw', height: '100vh' }}>
      <iframe
        title="Ubicación de FMSuspensión en Google Maps"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3145.1365371848556!2d-57.57248409999998!3d-37.973942799999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9584d9f58bab3b83%3A0x579a0e7176af4420!2sFMsuspension!5e0!3m2!1ses-419!2sar!4v1729917565510!5m2!1ses-419!2sar"
        width="100%"
        height="100%"
        style={{ border: '0' }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
