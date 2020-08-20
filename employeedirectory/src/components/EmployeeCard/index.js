import React from "react";
import "./style.css";

function EmployeeCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Email:</strong> {props.occupation}
          </li>
          <li>
            <strong>Gender:</strong> {props.gender}
          </li>
        </ul>
      </div>
      <span className="remove">𝘅</span>
    </div>
  );
}

export default EmployeeCard;