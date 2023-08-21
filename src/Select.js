// Select.js

import React from "react";
import "./Select.css"; // Import the CSS file for this component

const Select = ({ options, value, onChange }) => {
  return (
    <select className="select" value={value} onChange={onChange}>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
