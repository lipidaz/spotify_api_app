import React from "react";
import "./widgetEntry.css";

const WidgetEntry = ({ title, subtitle, image }) => {
  return (
    <div className="entry_container">
      <img src={image} alt={title} className="entry_img" />
      <div className="entry_right">
        <p className="entry_title">{title}</p>
        <p className="entry_subtitle">{subtitle}</p>
      </div>
    </div>
  );
};

export default WidgetEntry;
