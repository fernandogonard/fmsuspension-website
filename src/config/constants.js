// Configuración global del negocio
// Editar este archivo para actualizar datos en todo el sitio

export const PHONE_NUMBER = "+5492236003351";
export const WHATSAPP_BASE = `https://api.whatsapp.com/send?phone=${PHONE_NUMBER}`;
export const INSTAGRAM_URL = "https://www.instagram.com/fm_suspension/";
export const FACEBOOK_URL = "https://www.facebook.com/fmsuspension";
export const SITE_URL = "https://fmsuspension.netlify.app";
export const ADDRESS = "Ituzaingó 5848, Mar del Plata";
export const EMAIL = "matiasalbertofemenia@gmail.com";

export const whatsappLink = (mensaje) =>
  `${WHATSAPP_BASE}&text=${encodeURIComponent(mensaje)}`;
