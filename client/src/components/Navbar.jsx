import React, { Fragment } from "react";
import "./Navbar.css"
import LocalBarIcon from '@material-ui/icons/LocalBar';
import { Link } from "react-router-dom";

//navbar component
const Navbar = ( ) => {
  return (
   <nav className="nav">
     <div className="navbar">
       <div style={{display:"flex",alignItems:"center"}}>
       <LocalBarIcon />
       <h3 style={{marginLeft:"5px",marginTop:"5px"}}>Rebel Brews</h3>
       </div>
       
       <ul style={{marginTop:"8px"}}>
         <li>Welcome Guest</li>
       </ul>
     </div>
   </nav>
  )
};

export default Navbar
