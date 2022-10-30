import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import apiClient from "../../spotify";
import Featured from "./Featured";
import NewRelease from "./NewRelease";
import Similar from "./Similar";

const Feed = () => {
  const location = useLocation();
  const [similar, setSimilar] = useState();
  const [featured, setFeatured] = useState([]);
  const [newRelease, setNewRelease] = useState([]);

  useEffect(() => {
    apiClient
      .get(`/artists/${location.state?.id}/related-artists`)
      .then((res) => {
        const a = res.data?.artists.slice(0, 18);
        setSimilar(a);
      })
      .catch((err) => console.error(err));

    apiClient
      .get(`/browse/featured-playlists`)
      .then((res) => {
        const a = res.data?.playlists.items.slice(0, 18);
        setFeatured(a);
      })
      .catch((err) => console.error(err));

    apiClient
      .get(`/browse/new-releases`)
      .then((res) => {
        const a = res.data?.albums.items.slice(0, 18);
        setNewRelease(a);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="screen_container">
      {location.state?.title === "Similar Artists" ? (
        <Similar similar={similar} />
      ) : location.state?.title === "Made for You" ? (
        <Featured featured={featured} />
      ) : location.state?.title === "New Releases" ? (
        <NewRelease newRelease={newRelease} />
      ) : (
        <Featured featured={featured} />
      )}
      {/* <Similar similar={similar} />
      <Featured featured={featured} />
      <NewRelease newRelease={newRelease} /> */}
    </div>
  );
};

export default Feed;
