import React from "react";
import { BsGithub } from "react-icons/bs";
import { GrLinkedinOption } from "react-icons/gr";
import { AiOutlineTwitter } from "react-icons/ai";
import "../StylesSheet/Styles.css";

function Redes() {
  return (
    <div className="Redes">
      <a Target="_blank" href="https://github.com/valentinacamacho">
        <div className="circulo-redes">
          <BsGithub className="git" />
        </div>
      </a>

      <a Target="_blank" href="https://www.linkedin.com/in/jenifer-valentina-camacho-abril-532276258">
        <div className="circulo-redes">
          <GrLinkedinOption className="link" />
        </div>
      </a>

      <div className="circulo-redes">
        <AiOutlineTwitter className="twitt" />
      </div>
    </div>
  );
}

export default Redes;
