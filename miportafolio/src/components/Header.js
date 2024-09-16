import React from 'react';
import { motion } from 'framer-motion';
import './Header.css'; 
import avatar from '../assets/avatar.png'; 

const Header = () => {
  return (
    <motion.header id="header" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="header">
      <div className="avatar-container">
        <img src={avatar} alt="Avatar" className="avatar" />
      </div>
      <h1>Catalina Rodriguez</h1>
      <p>Desarrolladora Web | Programadora</p>
    </motion.header>
  );
};

export default Header;