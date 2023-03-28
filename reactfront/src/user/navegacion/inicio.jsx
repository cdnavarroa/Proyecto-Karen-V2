import React from 'react';

import './inicio.css'; // Estilos CSS para la barra lateral

import { FaHome, FaUserGraduate, FaArrowLeft } from "react-icons/fa";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        
        <h2>Cultupaz</h2>
      </div>
      <nav className="sidebar-nav">
        <ul>
          <li>
            <a href="/">
              <FaHome />
              <span>Inicio</span>
            </a>
          </li>
          <li>
            <a href="/">
              <FaUserGraduate />
              <span>Aprendices</span>
            </a>
          </li>
        </ul>
      </nav>
      <div className="sidebar-footer">
        <a href="/">
          <FaArrowLeft />
          <span>Regresar</span>
        </a>
      </div>
    </div>
  );
}


export default Sidebar;