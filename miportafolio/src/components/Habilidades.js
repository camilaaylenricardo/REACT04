import React from 'react';
import { motion } from 'framer-motion';
import './Habilidades.css';

const habilidades = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'C', 'C++', 'JAVA', 'Phyton'];

const Habilidades = () => {
  return (
    <motion.section 
      id="habilidades"  
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ delay: 0.5 }} 
      className="habilidades" 
    >
      <h2>Habilidades</h2>
      <p>Amplio conocimiento en:</p>
      <ul className="habilidades-list">
        {habilidades.map((skill, index) => (
          <motion.li 
            whileHover={{ scale: 1.1 }} 
            key={index} 
            className="habilidades-item"
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </motion.section>
  );
};

export default Habilidades;