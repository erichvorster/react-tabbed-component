import { useState } from "react";
import "./Accordion.css";
import React from "react";

const Accordion = ({title, content}) => {
  const [isActive, setIsActive] = useState(false);
  


  return (
    <React.Fragment>
      <div className="accordion">
        <div className="accordion-item">
          <div
            className="accordion-title"
            onClick={() => setIsActive(!isActive)}
          >
            <h3>{title}</h3>
            <div className="icon">{isActive ? "-" : "+"}</div>
          </div>
          {isActive && <div className="accordion-content">{content}</div>}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Accordion;
