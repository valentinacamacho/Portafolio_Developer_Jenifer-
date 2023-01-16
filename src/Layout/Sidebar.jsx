import React from "react";
import '../StylesSheet/Styles.css';


function Sidebar(){
    return(
      <header className="header">
        <nav className="menu-vertical">
          <ul>
          <li><a href="#">inicio</a></li>
          <li><a href="#">sobre mi</a></li>
          <li><a href="#">mis servicios</a></li>
          <li><a href="#">habilidades</a></li>
          <li><a href="#">portafolio</a></li>
          </ul>
        </nav>
      </header>
  );
}

export default Sidebar;