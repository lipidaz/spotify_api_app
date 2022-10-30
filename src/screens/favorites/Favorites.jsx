import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import APIKit from "../../spotify";
import "./favorites.css";

const Favorites = () => {
  const [playlists, setPlaylists] = useState();

  useEffect(() => {
    APIKit.get("me/tracks?market=ES&limit=50").then(function (response) {
      setPlaylists(response.data.items);
    });
  }, []);

  const navigate = useNavigate();

  const playPlaylist = (index) => {
    navigate("/player", { state: { index: index } });
  };

  return (
    <div className="screen_container">
      <div className="fav_tracks">
        {playlists?.map((track, index) => (
          <div className="fav_tracks_card" onClick={() => playPlaylist(index)}>
            <img src={track?.track?.album.images[2].url} alt="" />
            <p className="fav_tracks_title">
              {track?.track?.artists[0].name}
              {" - "}
              {track?.track?.name}
            </p>
            <p>0:30</p>
            <div className="fav_tracks_fade"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
