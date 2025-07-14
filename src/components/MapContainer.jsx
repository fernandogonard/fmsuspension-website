import React from 'react';
import './MapContainer.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function MapContainer() {
  return (
    <Box className="map-container" sx={{ width: '100%', maxWidth: 800, height: { xs: 250, sm: 350, md: 400 }, mx: 'auto', position: 'relative', borderRadius: 2, overflow: 'hidden', boxShadow: 3 }}>
      <iframe
        title="Ubicación de FMSuspensión en Google Maps"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3145.1365371848556!2d-57.57248409999998!3d-37.973942799999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9584d9f58bab3b83%3A0x579a0e7176af4420!2sFMsuspension!5e0!3m2!1ses-419!2sar!4v1729917565510!5m2!1ses-419!2sar"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        aria-label="Mapa de ubicación de FMSuspensión en Mar del Plata, Argentina"
      ></iframe>
      <Typography variant="body2" sx={{ position: 'absolute', bottom: 10, left: 10, color: '#FFF', backgroundColor: '#333a', px: 2, py: 1, borderRadius: 1, fontSize: 14 }}>
        Ubicación de FMSuspensión: Ituzaingó 5848, Mar del Plata, Argentina.
      </Typography>
    </Box>
  );
}
