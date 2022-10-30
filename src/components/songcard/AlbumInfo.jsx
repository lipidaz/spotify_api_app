import React from "react";
import "./albumInfo.css";

const AlbumInfo = ({ album }) => {
  const artists = [];
  album?.artists?.forEach((element) => {
    artists.push(element.name);
  });
  return (
    <div className="albumInfo_card">
      <div className="albumName_container">
        <div className="title_marq">
          <p>{album?.name + " by " + artists?.join(", ")}</p>
        </div>
      </div>
      <div className="">
        <p className="album_info">{`${album?.name} ${album?.album_type} has ${album?.total_tracks} track(s)`}</p>
      </div>
      <div className="album_release">
        <p>Release date: {album?.release_date}</p>
      </div>
    </div>
  );
};

export default AlbumInfo;
