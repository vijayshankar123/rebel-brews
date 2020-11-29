import React from "react";
import { Link } from "react-router-dom";
import "./Landing.css"

//landing page
const Landing = () => {
 
  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className=" new-font x-large">
              REBEL BREWS
          </h1>
          <div className="buttons">
            <Link to="/home" className="btn btn-primary">
            Visit Menu
            </Link>
          
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing
