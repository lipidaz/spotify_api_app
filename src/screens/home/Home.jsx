import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Library from "../library/Library";
import Feed from "../feed/Feed";
import Trendings from "../trendings/Trendings";
import Player from "../player/Player";
import Favorites from "../favorites/Favorites";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.css";
import Login from "../auth/Login";
import { useEffect } from "react";
import { setClientToken } from "../../spotify";

const Home = () => {
  const [token, setToken] = useState("");
  useEffect(() => {
    const checkToken = window.localStorage.getItem("token");
    const hash = window.location.hash;
    window.location.hash = "";
    if (!checkToken && hash) {
      const savetoken = hash.split("&")[0].split("=")[1];
      window.localStorage.setItem("token", savetoken);
      setToken(savetoken);
      setClientToken(savetoken);
    } else {
      setToken(checkToken);
      setClientToken(checkToken);
    }
  }, []);
  return !token ? (
    <Login />
  ) : (
    <Router>
      <div className="main_body">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Library />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/trendings" element={<Trendings />} />
          <Route path="/player" element={<Player />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Home;
