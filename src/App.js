import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import Card from "./Card";
import Select from "./Select";
import Table from "./Table";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleButtonClick = () => {
    // Handle button click logic
  };

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const tableData = [
    { name: "Ahmed", age: 19, location: "karachi" , institute:"SAIMS",address:"Tower near aga khan hospital,Karachi" },
    { name: "Kifal", age: 18, location: "Lahore",institute:"BMJ", address:"Bahadurabad nera Tooso,Karachi" },
    { name: "Usaid", age: 16, location: "Rawal-Pindi",institute:"KMA", address:"Husainabad nera Bombay koila karahi,Karachi" },
    // Add more data
  ];

  return (
    <div>
      
    <h1 className="input1">INPUT COMPONENT:</h1>
      <Input placeholder="Enter something" value={inputValue} onChange={handleInputChange} />
      <br></br>
      <br></br>
      <br></br>
    <h1>BUTTON COMPONENT:</h1>
      <Button label="CLICK ME" onClick={handleButtonClick} />
      <br></br>
      <br></br>
      <br></br>
    <h1>SELECT COMPONENT:</h1>
      <Select
        options={[
          {value:"Lahore",label:"Where do you live"},
          { value: "Karachi", label: "Karachi" },
          { value: "Islamabad", label: "Islamabad" },
          { value: "Quetta", label: "Quetta" },
          { value: "Peshawar", label: "Peshawar" },
          { value: "Rawal-Pindi", label: "Rawal-Pindi" },
          {value:"Lahore",label:"Lahore"}

          // Add more options
        ]}
        value={selectedOption}
        onChange={handleSelectChange}
      />
      <br></br>
      <br></br>
      <br></br>
      <h1>CARD COMPONENT:</h1>
      <div className="div1">
      <Card title="Card Title" content="Card Content" />
      <Card title="Card Title" content="Card Content" />
      <Card title="Card Title" content="Card Content" />
      </div>
      <br></br>
      <br></br>
        <h1>TABLE COMPONENT:</h1>
      <Table data={tableData} />
    </div>
  );
}

export default App;
