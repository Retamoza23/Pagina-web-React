import React, { useState } from 'react';

const Menu = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Correo: ${email}, Teléfono: ${phone}`);
    // Aquí podrías enviar los datos a un servidor si lo deseas
  };

  return (
    <nav>
      <ul>
        <li><a href="/">Inicio</a></li>
        <li><a href="/autos">Autos</a></li>
        <li><a href="/contacto">Contacto</a></li>
      </ul>
      
      {/* Formulario de contacto */}
      <div className="contacto">
        <p><strong>Déjanos tu contacto:</strong></p>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email:</label>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </div>
          <div>
            <label>Teléfono:</label>
            <input 
              type="tel" 
              value={phone} 
              onChange={(e) => setPhone(e.target.value)} 
              required 
            />
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </nav>
  );
};

export default Menu;



