import React from "react";
import "./Table.css"; // Import the CSS file for this component

const Table = ({ data }) => {
  return (
    <table className="custom-table">
      <thead>
        <tr>
          <th>NAME</th>
          <th>AGE</th>
          <th>LOCATION</th>
          <th>INSTITUTE</th>
          <th>ADDRESS</th>
          
        </tr>
      </thead>
      <tbody>
        {data.map((item , index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.age}</td>
            <td>{item.location}</td>
            <td>{item.institute}</td>
            <td>{item.address}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
