import React from "react";
import "./controls.css";
import { IconContext } from "react-icons";
import { FaPause } from "react-icons/fa";
import { IoPlay, IoPlaySkipBack, IoPlaySkipForward } from "react-icons/io5";

const Controls = ({ isPlaying, setIsPlaying, handleNext, handlePrev }) => {
  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <IconContext.Provider value={{ size: "35px", color: "#dad7cd" }}>
      <div className="controls_container">
        <div className="action_btn" onClick={handlePrev}>
          <IoPlaySkipBack />
        </div>
        <div
          className={isPlaying ? "play_pause_btn active" : "play_pause_btn"}
          onClick={handlePlayPause}
        >
          {isPlaying ? <FaPause /> : <IoPlay />}
        </div>
        <div className="action_btn" onClick={handleNext}>
          <IoPlaySkipForward />
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default Controls;
