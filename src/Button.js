// Button.js

import React from "react";
import "./Button.css"; // Import the CSS file for this component

const Button = ({ label, onClick }) => {
  return <button className="button" onClick={onClick}>{label}</button>;
};

export default Button;
