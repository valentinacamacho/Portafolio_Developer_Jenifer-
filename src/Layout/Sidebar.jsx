import React from "react";
import '../StylesSheet/Styles.css';
import { Link } from 'react-router-dom';


function Sidebar(){
    return(
      <header className="header">
        <nav className="menu-vertical">
          <ul>
          <li><Link to="/">inicio</Link></li>
          <li><Link to="/Cards">sobre mi</Link></li>
          <li><Link to="#">mis servicios</Link></li>
          <li><Link to="/Skills">habilidades</Link></li>
          <li><Link to="/Briefcase">portafolio</Link></li>
          </ul>
        </nav>
      </header>
  );
}

export default Sidebar;