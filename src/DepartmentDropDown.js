
import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles.css'

function DepartmentDropDown() {
  const [selectedDepartment, setSelectedDepartment] = useState("Select Department");

  // js function to change the state based on selection 
  function handleDepartmentChange(event) {
    setSelectedDepartment(event.target.textContent);

  }

  return (
    <label>Department
      <Dropdown style={{minWidth:'100%'}} id="dropdown">
        
        {/* Change the drop down menu on selection */}

        <Dropdown.Toggle style={{width:'260px'}} id="dropdown-basic" >
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
