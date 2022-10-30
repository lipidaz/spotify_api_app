import React from "react";
import { useNavigate } from "react-router-dom";
import "./similar.css";

const Featured = ({ featured }) => {
  const navigate = useNavigate();

  const playPlaylist = (id) => {
    navigate("/player", { state: { feat_id: id } });
  };
  return (
    <div className="similar_body">
      {featured?.map((playlist) => (
        <div
          className="similar_card"
          onClick={() => playPlaylist(playlist?.id)}
        >
          <img className="similar_img" src={playlist?.images[0]?.url} alt="" />
          <p className="similar_title">{playlist?.name}</p>
          <p className="similar_subtitle">
            {playlist?.tracks?.total + " Songs"}
          </p>
        </div>
      ))}
    </div>
  );
};
export default Featured;
