import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { getArtists } from "../../store/artist";

function ArtistsList() {
  const dispatch = useDispatch();
  const artists = useSelector((state) => Object.values(state.artist));

  useEffect(() => {
    dispatch(getArtists());
  }, [dispatch]);

  // console.log("In ArtistsList.js, artists = ", artists);

  const artistListItems = artists.map((artist, index) => {
    return (
      <li key={index}>
      
        <NavLink to={`/artists/${artist.id}`}><img src={artist.avatar} alt="avatar"></img>{artist.artistname}</NavLink>
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
