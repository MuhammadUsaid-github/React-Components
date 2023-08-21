// Card.js

import React from "react";
import "./Card.css"; // Import the CSS file for this component
import "./bg-1.webp"

const Card = ({ title, content }) => {
  return (
    <div className="card">
      <h3 className="card-title">MY NAME IS MUHAMMAD USAID <br></br> THIS IS MY FIRST CARD WITH THE <br></br> HELP OF USING REACT JS. <br></br> <br></br>  MY NAME IS MUHAMMAD USAID <br></br> THIS IS MY FIRST CARD WITH THE <br></br> HELP OF USING REACT JS. <br></br> <br></br>  MY NAME IS MUHAMMAD USAID <br></br> THIS IS MY FIRST CARD WITH THE <br></br> HELP OF USING REACT JS.</h3>
      <p className="card-content">    </p>
    </div>
  );
};

export default Card;
