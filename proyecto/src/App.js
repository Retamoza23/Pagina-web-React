import React, { useState } from 'react'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header.js';
import Menu from './Components/Menu.js';
import Seccion from './Components/Seccion.js';
import Footer from './Components/Footer.js';
import './App.css';
import imagen1 from './assets/imagen1.jpg'; 
import imagen2 from './assets/imagen2.jpg';
import imagen3 from './assets/imagen3.jpg';
import imagen4 from './assets/imagen4.jpg';
import imagen5 from './assets/imagen5.jpg';

const App = () => {
  return (
    <Router>
      <Header /> {/* El encabezado y menú */}
      <main>
        <Routes>
          <Route path="/" element={<SeccionInicio />} />
          <Route path="/autos" element={<SeccionAutos />} />
          <Route path="/contacto" element={<SeccionContacto />} />
        </Routes>
      </main>
      <Footer /> {/* El pie de página */}
    </Router>
  );
}

// Componente para la sección de inicio con formulario de inicio de sesión
const SeccionInicio = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();
    alert(`Correo: ${email}, Contraseña: ${password}`);
    
  };

  return (
    <div className="seccion-inicio">
      <h2>Bienvenido a Autos Force</h2>
      <p>Aquí encontrarás los mejores autos.</p> 
      <form onSubmit={handleLogin} className="login-form">
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
          <label>Contraseña:</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  );
};


// Componente para mostrar los autos
const SeccionAutos = () => {
  const autos = [
    { id: 1, nombre: "Toyota Corolla", precio: "$400,000 MXN", imagen: imagen1 },
    { id: 2, nombre: "Ford Mustang", precio: "$800,000 MXN", imagen: imagen2 },
    { id: 3, nombre: "Chevrolet Camaro", precio: "$700,000 MXN", imagen: imagen3 },
    { id: 4, nombre: "Honda Civic", precio: "$350,000 MXN", imagen: imagen4 },
    { id: 5, nombre: "BMW M3", precio: "$1,200,000 MXN", imagen: imagen5 },
  ];

  return (
    <div className="seccion-autos">
      <h2 className="titulo-autos">Nuestros Autos</h2>
      <p className="descripcion-autos">Explora nuestra gama de autos nuevos y usados:</p>
      <div className="autos-list">
        {autos.map((auto) => (
          <div key={auto.id} className="auto-item">
            <img src={auto.imagen} alt={auto.nombre} />
            <h3>{auto.nombre}</h3>
            <p>Precio: {auto.precio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Nuevo componente para la sección de contacto
const SeccionContacto = () => {
  const [opiniones, setOpiniones] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Opinión enviada: ${opiniones}`);
    // Aquí podrías enviar la opinión a un servidor si lo deseas
  };

  return (
    <div className="contacto-container">
      <h2>Contacto</h2>
      <p>Déjanos tu opinión:</p>
      <form onSubmit={handleSubmit} className="contact-form">
        <div>
          <textarea
            value={opiniones}
            onChange={(e) => setOpiniones(e.target.value)}
            placeholder="Escribe tu opinión aquí..."
            rows="5"
            required
          />
        </div>
        <button type="submit">Enviar Opinión</button>
      </form>

      <div className="contact-info">
        <h3>Contacto de soporte:</h3>
        <p>Email: <a href="mailto:AutosForce@gmail.com">AutosForce@gmail.com</a></p>
        <p>Teléfono: <a href="tel:+526671789889">+52 6671789889</a></p>
      </div>
    </div>
  );
}

export default App;





