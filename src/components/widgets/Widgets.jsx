import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import apiClient from "../../spotify";
import WidgetCard from "./WidgetCard";
import "./widgets.css";

const Widgets = ({ artistId }) => {
  const [similar, setSimilar] = useState([]);
  const [featured, setFeatured] = useState([]);
  const [newRelease, setNewRelease] = useState([]);
  const id = artistId?.artists[0]?.id;

  useEffect(() => {
    apiClient
      .get(`/artists/${id}/related-artists`)
      .then((res) => {
        const a = res.data?.artists.slice(0, 3);
        setSimilar(a);
      })
      .catch((err) => console.error(err));

    apiClient
      .get(`/browse/featured-playlists`)
      .then((res) => {
        const a = res.data?.playlists.items.slice(0, 3);
        setFeatured(a);
      })
      .catch((err) => console.error(err));

    apiClient
      .get(`/browse/new-releases`)
      .then((res) => {
        const a = res.data?.albums.items.slice(0, 3);
        setNewRelease(a);
      })
      .catch((err) => console.error(err));
  }, [id]);

  return (
    <div className="widgets_container">
      <WidgetCard title="Similar Artists" similar={similar} id={id} />
      <WidgetCard title="Made for You" featured={featured} />
      <WidgetCard title="New Releases" newRelease={newRelease} />
    </div>
  );
};

export default Widgets;
