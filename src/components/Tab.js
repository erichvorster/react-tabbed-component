import React, { useState } from "react";
import "./Tab.css";

const Tab = () => {
  //contains the index of active tab, in our case 1,2, or 3.
  const [activeIndex, setActiveIndex] = useState(1);
  //sets the active index when a tab is clicked.
  const handleClick = (index) => setActiveIndex(index);
  //adds the active class for styling and toggling visibility.
  const checkActive = (index, className) =>
    activeIndex === index ? className : "";

  return (
    <div>
      <div className="tabs">
        <button
          className={`tab ${checkActive(1, "active")}`}
          onClick={() => handleClick(1)}
        >
          Product Info
        </button>
        <button
          className={`tab ${checkActive(2, "active")}`}
          onClick={() => handleClick(2)}
        >
          Customer Reviews
        </button>
        <button
          className={`tab ${checkActive(3, "active")}`}
          onClick={() => handleClick(3)}
        >
          Delivery &amp; Returns
        </button>
      </div>
      <div className="panels">
        <div className={`panel ${checkActive(1, "active")}`}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean erat
            ligula, feugiat at felis vitae, porttitor lacinia quam.
          </p>
        </div>
        <div className={`panel ${checkActive(2, "active")}`}>
          <p>
            Nulla lobortis quis massa quis lobortis. Nullam porta semper lorem,
            vel efficitur augue rutrum quis. Suspendisse potenti.
          </p>
        </div>
        <div className={`panel ${checkActive(3, "active")}`}>
          <p>
            Cras porta consectetur dolor porttitor fringilla. Cras vitae urna ac
            erat fermentum egestas. Donec egestas cursus scelerisque.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tab;
