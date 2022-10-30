import React from "react";

const NewRelease = ({ newRelease }) => {
  console.log(newRelease);

  return (
    <div className="similar_body">
      {newRelease?.map((playlist) => (
        <div className="similar_card">
          <img className="similar_img" src={playlist?.images[0]?.url} alt="" />
          <p className="similar_title">{playlist?.name}</p>
          <p className="similar_subtitle">{playlist?.artists[0]?.name}</p>
        </div>
      ))}
    </div>
  );
};

export default NewRelease;
