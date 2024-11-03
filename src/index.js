// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HelmetProvider } from 'react-helmet-async'; // Importa HelmetProvider

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <HelmetProvider>
      <React.Suspense fallback={<div>Loading...</div>}>
        <App />
      </React.Suspense>
    </HelmetProvider>
  </React.StrictMode>
);
// Medir rendimiento de la aplicación
reportWebVitals();
