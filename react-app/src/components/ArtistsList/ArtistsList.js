import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { getArtists } from "../../store/artist";
import "./ArtistsList.css";

function ArtistsList() {
  const dispatch = useDispatch();
  const artists = Object.values(useSelector((state) => state.artist));

  useEffect(() => {
    dispatch(getArtists());
  }, [dispatch]);

  console.log("In ArtistsList.js, artists = ", artists);

  const artistListItems = artists.map((artist, index) => {
    return (
      <li key={index} className={"artist-li"}>
        <div className={"artist-thumb-container"}>
          <NavLink to={`/artists/${artist.id}`}>
            <img src={artist.avatar} alt="avatar" className="thumbnail"></img>
            {artist.artistname}
          </NavLink>
        </div>
      </li>
    );
  });

  return (
    <div className="artist-container">
      <ul>{artistListItems}</ul>
    </div>
  );
}

export default ArtistsList;
