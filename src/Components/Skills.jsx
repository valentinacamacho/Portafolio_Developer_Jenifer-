import React from "react";
import '../StylesSheet/Styles.css';
import { AiFillHtml5 }  from 'react-icons/ai';
import { IoLogoCss3 }  from 'react-icons/io';

function Skills(){
  return(
    <div className="Skills">

      <div className="circulo-skill">
        <AiFillHtml5 className="icon-skill"/>
        <div className="letra-skill">
          <strong>HTML</strong>
        </div> 
      </div>

      <div className="circulo-skill">
          <IoLogoCss3 className="icon-skill"/>
        <div className="letra-skill">
          <strong>HTML</strong>
        </div>
      </div>

      
    </div>

  );
}

export default Skills;