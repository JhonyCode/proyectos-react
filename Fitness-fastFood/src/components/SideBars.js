import React from 'react';
import "../index.css"
import { Link } from "react-router-dom";
const SideBars = () =>{
    return (
    <div className="sidebars">
       <ul>
  <li>
               <Link to="">Inicio</Link>
           </li>
           <li>
               <Link to="">Cuenta</Link>
           </li>
           <li>
               <Link to="">Perfil</Link>
           </li>
       </ul>
    </div>
    )
    }
    
    export default SideBars;