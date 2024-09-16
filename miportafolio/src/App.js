import React from 'react';
import Header from './components/Header';
import './App.css';
import SobreMi from './components/SobreMi';
import Habilidades from './components/Habilidades';
import Proyectos from './components/Proyectos';
import Contacto from './components/Contacto';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
       <Navbar />
      <Header />
      <SobreMi />
      <Habilidades />
      <Proyectos />
      <Contacto />
    </div>
  );
}

export default App;