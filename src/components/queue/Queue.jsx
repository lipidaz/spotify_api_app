import React from "react";
import "./queue.css";

const Queue = ({ tracks, setCurrentIndex, currentTrack }) => {
  return (
    <div className="queue_container flex">
      <div className="queue">
        <p className="upnext">Up next</p>
        <div className="queue_list">
          {tracks?.map((track, index) => (
            <div className="queue_item" onClick={() => setCurrentIndex(index)}>
              <p
                className={
                  currentTrack.name !== track?.track?.name
                    ? "track_name"
                    : "track_name current"
                }
              >
                {track?.track?.name}
              </p>
              <p
                className={
                  currentTrack.name !== track?.track?.name ? "" : "current"
                }
              >
                0:30
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Queue;
