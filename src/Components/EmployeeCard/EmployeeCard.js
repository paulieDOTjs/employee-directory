import React from "react";
import "./EmployeeCard.css";

function EmployeeCard({ employee }) {

  return (
    <div className="col-4">
      <div className="EmployeeCard">
        <h3 className="EmployeeName">
          {employee.lastName}, {employee.firstName}
        </h3>
        <h5>Role: {employee.role}</h5>
        <h5>ID: {employee.employeeID}</h5>
        <h5>Gender: {employee.gender}</h5>
        <h5>Age: {employee.age}</h5>
        <h5>Email: {employee.email}</h5>
      </div>
    </div>
  );
}

export default EmployeeCard;
