import React from 'react';
import './Contacto.css'; 
const Contacto = () => {
  return (
    <section id="contacto" className="contacto">
      <h2>Contacto</h2>
      <div className="contacto-info">
        <div className="contacto-item">
          <h3>Email</h3>
          <p>catalinarodriguez@gmail.com</p>
        </div>
        <div className="contacto-item">
          <h3>Teléfono</h3>
          <p>(+54) 223 445-7890</p>
        </div>
        <div className="contacto-item">
          <h3>Localidad</h3>
          <p>Mar del Plata, 7600, Buenos Aires, Argentina</p>
        </div>
      </div>
    </section>
  );
};

export default Contacto;