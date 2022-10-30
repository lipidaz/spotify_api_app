import React from "react";
import "./similar.css";

const Similar = ({ similar }) => {
  // const navigate = useNavigate();

  // const playPlaylist = (id) => {
  //   navigate("/player", { state: { sim_id: id } });
  // };

  return (
    <div className="similar_body">
      {similar?.map((artist) => (
        <div className="similar_card">
          {/* onClick={() => playPlaylist(artist?.id)} */}
          <img className="similar_img" src={artist?.images[2]?.url} alt="" />
          <p className="similar_title">{artist?.name}</p>
          <p className="similar_subtitle">
            {artist?.followers?.total + " Followers"}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Similar;
