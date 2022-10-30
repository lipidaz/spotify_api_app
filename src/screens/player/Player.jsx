import React from "react";
import "./player.css";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import apiClient from "../../spotify";
import { useState } from "react";
import SongCard from "../../components/songcard/SongCard";
import Queue from "../../components/queue/Queue";
import AudioPlayer from "../../components/audioPlayer/AudioPlayer";
import Widgets from "../../components/widgets/Widgets";

const Player = () => {
  const location = useLocation();
  const [tracks, setTracks] = useState([]);
  const [currentTrack, setCurrentTrack] = useState({});
  const [currentIndex, setCurrentIndex] = useState();

  useEffect(() => {
    if (location.state?.id) {
      apiClient
        .get("playlists/" + location.state?.id + "/tracks")
        .then((res) => {
          setTracks(res.data.items);
          setCurrentTrack(res.data.items[0].track);
          setCurrentIndex(0);
        });
    } else if (location.state?.index !== undefined) {
      apiClient.get("me/tracks?market=ES&limit=50").then((res) => {
        setTracks(res.data.items);
        if (!currentIndex) {
          setCurrentIndex(
            location.state?.index === 0 ? 0 : location.state?.index
          );
        }
        setCurrentTrack(
          res.data.items[
            location.state?.index === 0 ? 0 : location.state?.index
          ].track
        );
      });
    } else if (location.state?.tind !== undefined) {
      apiClient.get("playlists/37i9dQZEVXbNG2KDcFcKOF").then((res) => {
        setTracks(res.data.tracks.items);
        if (!currentIndex) {
          setCurrentIndex(
            +location.state?.tind === 0 ? 0 : location.state?.tind
          );
        }
        setCurrentTrack(res.data.tracks.items[location.state?.tind].track);
      });
    } else if (location.state?.feat_id !== undefined) {
      apiClient.get("playlists/" + location.state?.feat_id).then((res) => {
        setTracks(res.data.tracks.items);
        setCurrentIndex(0);
        setCurrentTrack(res.data.tracks.items[0].track);
      });
    }
  }, [location.state]);

  useEffect(() => {
    if (location.state?.id) {
      apiClient
        .get("playlists/" + location.state?.id + "/tracks")
        .then((res) => {
          setCurrentTrack(res.data.items[currentIndex].track);
        });
    } else if (location.state?.index !== undefined) {
      apiClient.get("me/tracks?market=ES&limit=50").then((res) => {
        setCurrentTrack(res.data.items[currentIndex].track);
      });
    } else if (location.state?.tind !== undefined) {
      apiClient.get("playlists/37i9dQZEVXbNG2KDcFcKOF").then((res) => {
        setCurrentTrack(res.data.tracks.items[currentIndex].track);
      });
    } else if (location.state?.feat_id) {
      apiClient.get("playlists/" + location.state?.feat_id).then((res) => {
        setCurrentTrack(res.data.tracks.items[currentIndex].track);
      });
    }
  }, [currentIndex, currentTrack]);

  return (
    <div className="screen_container flex">
      <div className="left_player_body">
        <AudioPlayer
          currentTrack={currentTrack}
          total={tracks}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
        <Widgets artistId={currentTrack.album} />
      </div>
      <div className="right_player_body">
        <SongCard album={currentTrack.album} />
        <Queue
          currentTrack={currentTrack}
          tracks={tracks}
          setCurrentIndex={setCurrentIndex}
        />
      </div>
    </div>
  );
};

export default Player;
