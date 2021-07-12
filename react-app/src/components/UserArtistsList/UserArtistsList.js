import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { getArtists } from "../../store/artist";
import ArtistDeleteModal from "../ArtistDeleteModal";

function UserArtistsList() {
  const dispatch = useDispatch();
  const artists = Object.values(useSelector((state) => state.artist));
  const currentUser = useSelector((state) => state.session.user);

  useEffect(() => {
    dispatch(getArtists());
  }, [dispatch]);

  console.log("In ArtistsList.js, artists = ", artists);

  const userArtistListItems = artists.map((artist, index) => {
    return currentUser.id === Number(artist.user_id) ? (
      <li key={index} className={"artist-li"}>
        <NavLink to={`/artists/${artist.id}`}>
          {artist.artistname}
          <img src={artist.avatar} alt="avatar" className="thumbnail"></img>
        </NavLink>
        <ArtistDeleteModal artistId={artist.id} />
      </li>
    ) : null;
  });

  return (
    <div className="artist-container">
      <ul>{userArtistListItems}</ul>
    </div>
  );
}

export default UserArtistsList;
