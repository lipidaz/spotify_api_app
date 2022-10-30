import React from "react";
import { IconContext } from "react-icons";
import "./widgetCard.css";
import WidgetEntry from "./WidgetEntry";
import { FiChevronRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const WidgetCard = ({ title, similar, featured, newRelease, id }) => {
  const navigate = useNavigate();

  const openFeed = (id, title) => {
    navigate("/feed", { state: { id: id, title: title } });
  };
  return (
    <div
      className="wcard_container"
      onClick={() =>
        openFeed(
          similar ? id : featured ? featured : newRelease ? newRelease : null,
          title
        )
      }
    >
      <p className="w_title">{title}</p>
      {similar
        ? similar.map((artist) => (
            <WidgetEntry
              title={artist?.name}
              subtitle={artist?.followers?.total + " Followers"}
              image={artist?.images[2]?.url}
            />
          ))
        : featured
        ? featured.map((playlist) => (
            <WidgetEntry
              title={playlist?.name}
              subtitle={playlist?.tracks?.total + " Songs"}
              image={playlist?.images[0]?.url}
            />
          ))
        : newRelease
        ? newRelease.map((album) => (
            <WidgetEntry
              title={album?.name}
              subtitle={album.artists[0]?.name}
              image={album?.images[2]?.url}
            />
          ))
        : null}
      <div className="widget_fade">
        <div className="fade_btn">
          <IconContext.Provider value={{ size: "24px", color: "#dad7cd" }}>
            <FiChevronRight />
          </IconContext.Provider>
        </div>
      </div>
    </div>
  );
};

export default WidgetCard;
