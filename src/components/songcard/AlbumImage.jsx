import React from "react";
import "./albumImage.css";

const AlbumImage = ({ url }) => {
  return (
    <div className="albumImage flex">
      <img src={url} alt="album" className="albumImage_art" />
      <div className="albumImage_shadow">
        <img src={url} alt="shadow" className="albumImage_shadow" />
      </div>
    </div>
  );
};

export default AlbumImage;
