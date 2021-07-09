import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { getArtists } from "../../store/artist";
import { v4 as uuidv4 } from "uuid";

function ArtistsList() {
  const dispatch = useDispatch();
  const artists = useSelector((state) => Object.values(state.artist));

  useEffect(() => {
    dispatch(getArtists());
  }, [dispatch]);

  // console.log("In ArtistsList.js, artists = ", artists);

  const artistListItems = artists.map((artist) => {
    return (
      // Note: I was using artist.id for my <li> key items, but would get this
      // error intermittently when navigating back to pages with this component
      // rendered:
      //
      // Warning: Each child in a list should have a unique "key" prop
      //
      // Because I know I artist.id's values are accessible and are used to render
      // the Navlinks, I believe the error is an order of operations-related
      // issue. I landed on using UUID's for key values to prevent the error.
      // I understand that this might be a performance-intensive workaround but
      // decided that for the purposes of this project it was a way to resolve
      // the error reliably. I intend to research these errors more and circle
      // back to see if there are better alternatives to using UUIDs for keys.

      <li key={uuidv4()}>
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
