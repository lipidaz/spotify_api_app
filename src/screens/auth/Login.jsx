import React from "react";
import { loginEndpoint } from "../../spotify";
import "./login.css";

const Login = () => {
  return (
    <div className="login_page">
      <img
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
        alt="logo"
        className="logo"
      />
      <a href={loginEndpoint}>
        <div className="login_button">LOG IN</div>
      </a>
    </div>
  );
};

export default Login;
