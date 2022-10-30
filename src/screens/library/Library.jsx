import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import APIKit from "../../spotify";
import "./library.css";
import { AiFillPlayCircle } from "react-icons/ai";
import { IconContext } from "react-icons";
import { useNavigate } from "react-router-dom";

const Library = () => {
  const [playlists, setPlaylists] = useState(null);

  useEffect(() => {
    APIKit.get("me/playlists").then(function (response) {
      setPlaylists(response.data.items);
    });
  }, []);
  const navigate = useNavigate();

  const playPlaylist = (id) => {
    navigate("/player", { state: { id: id } });
  };

  return (
    <div className="screen_container">
      <div className="library_body">
        {playlists?.map((playlist) => (
          <div
            className="playlist_card"
            onClick={() => playPlaylist(playlist.id)}
          >
            <img
              src={playlist.images[0].url}
              className="playlist_image"
              alt="img"
            />
            <p className="playlist_title">{playlist.name}</p>
            <p className="playlist_subtitle">{playlist.tracks.total} songs</p>
            <div className="playlist_fade">
              <IconContext.Provider value={{ size: "50px", color: "#588157" }}>
                <AiFillPlayCircle />
              </IconContext.Provider>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Library;
