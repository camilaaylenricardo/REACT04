import React from 'react';
import { motion } from 'framer-motion';
import './SobreMi.css';

const SobreMi = () => {
  return (
    <motion.section 
      id="SobreMi" 
      className="sobremi" 
      initial={{ x: '-100vw' }} 
      animate={{ x: 0 }} 
      transition={{ type: 'spring', stiffness: 50 }}
    >
      <h2>Sobre mí</h2>
      <p>
        ¡Hola! Soy Catalina Rodriguez, desarrolladora web especializada en Full Stack.
      </p>
      <p>
        Me apasiona transformar ideas en experiencias digitales efectivas utilizando tecnologías como HTML, CSS, JS, NODE.JS, REACT, PYTHON, C, C++, JAVA.
      </p>
      <p>
        Mi enfoque es crear soluciones intuitivas y eficientes, siempre aprendiendo y adaptándome a las últimas tendencias.
      </p>
      <p>
        Fuera del código, disfruto del diseño digital, que me ayuda a mantener la creatividad viva. Si quieres colaborar o charlar sobre tecnología, ¡contáctame!
      </p>
    </motion.section>
  );
};

export default SobreMi;