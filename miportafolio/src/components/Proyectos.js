import React from 'react';
import { motion } from 'framer-motion';
import './Proyectos.css';

const proyectos = [
  { name: 'Proyecto 1', description: 'Sitio web diseñado para mostrar un portafolio profesional, utilizando React, CSS y animaciones con Framer Motion.' },
  { name: 'Proyecto 2', description: 'Aplicación de gestión de tareas con funcionalidades CRUD, que permite agregar, editar y eliminar tareas usando una base de datos con Node.js.' }
];

const Proyectos = () => {
  return (
    <motion.section 
      id="proyectos" 
      className="proyectos"  
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ delay: 0.5 }}
    >
      <h2>Proyectos</h2>
      <div className="proyectos-container">
        {proyectos.map((project, index) => (
          <motion.div className="proyectos-card" whileHover={{ scale: 1.1 }} key={index}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Proyectos;