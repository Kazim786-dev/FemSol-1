import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles.css'
function DepartmentDropDown() {
  const [selectedDepartment, setSelectedDepartment] = useState("Select Department");

  function handleDepartmentChange(event) {
    setSelectedDepartment(event.target.textContent);
    
  }

  return (
    <label>Department
    <Dropdown id="dropdown">
      <Dropdown.Toggle id="dropdown-basic" >
        {selectedDepartment}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={handleDepartmentChange}>Projects</Dropdown.Item>
        <Dropdown.Item onClick={handleDepartmentChange}>Testing</Dropdown.Item>
        <Dropdown.Item onClick={handleDepartmentChange}>Customer Care</Dropdown.Item>
        <Dropdown.Item onClick={handleDepartmentChange}>All Departments</Dropdown.Item>
      </Dropdown.Menu>

    </Dropdown>
    </label>
  );
}

export default DepartmentDropDown;
