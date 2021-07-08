import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { getArtists } from "../../store/artist";

function ArtistsList() {
  const dispatch = useDispatch();
  const artists = useSelector((state) => Object.values(state.artist));

  useEffect(() => {
    dispatch(getArtists());
  }, [dispatch, getArtists]);

  console.log("In ArtistsList.js, artists = ", artists);

  const artistListItems = artists.map((artist) => {
    return (
      <li key={artist.id}>
        <NavLink to={`/artists/${artist.id}`}>{artist.artistname}</NavLink>
      </li>
    );
  });

  return (
    <>
      <h1>Artist List: </h1>
      <ul>{artistListItems}</ul>
    </>
  );
}

export default ArtistsList;
