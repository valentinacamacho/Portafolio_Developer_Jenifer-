import React from "react";
import { BsGithub }  from 'react-icons/bs';
import { GrLinkedinOption }  from 'react-icons/gr';
import { AiOutlineTwitter }  from 'react-icons/ai';
import '../StylesSheet/Styles.css';

function Redes(){
    return(
      <div className="Redes">
        
        <div className="circulo-redes">
          <BsGithub className="git"/>
        </div>
        <div className="circulo-redes">
          <GrLinkedinOption className="link"/>
        </div>

        <div className="circulo-redes">
          <AiOutlineTwitter className="twitt"/>
        </div>
      </div>
    );
}

export default Redes;