import React from "react";
import "./sidebar.css";
import SidebarButton from "./SidebarButton";
import { MdFavorite, MdSpaceDashboard } from "react-icons/md";
import { FaGripfire, FaPlay, FaSignOutAlt } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import { useEffect } from "react";
import { useState } from "react";
import apiClient from "../../spotify";

const Sidebar = () => {
  const [image, setImage] = useState(
    "https://image.shutterstock.com/image-vector/profile-picture-vector-260nw-404138257.jpg"
  );
  useEffect(() => {
    apiClient.get("me").then((response) => {
      setImage(response.data.images[0].url);
    });
  }, []);

  const signOut = () => {
    localStorage.removeItem("token");
    window.location.reload(false);
  };
  return (
    <div className="sidebar_container">
      <img src={image} alt="profile" className="profile_img" />
      <div>
        <SidebarButton title="Feed" to="/feed" icon={<MdSpaceDashboard />} />
        <SidebarButton
          title="Trendings"
          to="/trendings"
          icon={<FaGripfire />}
        />
        <SidebarButton title="Player" to="/player" icon={<FaPlay />} />
        <SidebarButton
          title="Favorites"
          to="/favorites"
          icon={<MdFavorite />}
        />
        <SidebarButton title="Library" to="/" icon={<IoLibrary />} />
      </div>
      <div onClick={signOut}>
        <SidebarButton title="Sign Out" to="" icon={<FaSignOutAlt />} />
      </div>
    </div>
  );
};

export default Sidebar;
