import React from "react";
import Sidebar from "../Layout/Sidebar";
import perfil from "../assets/Images/perfil.png";
import Redes from "../Components/Redes";


function Principal(props) {
  return (
    <div className="container">
      <Sidebar />

      <main>
        <section>
          <div className="bloque-container">
            <div className="bloque">
              <div className="perfil">
                <img src={perfil}/>
              </div>
              <div className="texto_page">
                <p>Jenifer Camacho</p>
                <p>Developer full stack</p>
              </div>
        
                <Redes/>
           
              <div className="boton">
                <button>Dowland CV</button>
              </div>

            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Principal;
