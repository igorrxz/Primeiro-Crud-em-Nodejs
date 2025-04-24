// Este é o ponto de entrada da aplicação React.
// Ele renderiza o componente App dentro do elemento com id "root" no HTML.
// Utiliza ReactDOM.createRoot (modo moderno) e React.StrictMode para melhores práticas e alertas de problemas durante o desenvolvimento.

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);