// Input.js

import React from "react";
import "./Input.css"; // Import the CSS file for this component

const Input = ({ placeholder, value, onChange }) => {
  return <input className="input" type="text" placeholder=" ENTER SOMETHING "value={value} onChange={onChange} />;
};

export default Input;
