import React from "react";
import "./sidebarButton.css";
import { Link, useLocation } from "react-router-dom";
import { IconContext } from "react-icons";

const SidebarButton = (props) => {
  const location = useLocation();

  const isActive = location.pathname === props.to;

  const buttonClass = isActive ? "button_body active" : "button_body";
  return (
    <Link to={props.to}>
      <div className={buttonClass}>
        <IconContext.Provider
          value={{ size: "24px", className: "button_icon" }}
        >
          {props.icon}
          <p className="button_title">{props.title}</p>
        </IconContext.Provider>
      </div>
    </Link>
  );
};

export default SidebarButton;
