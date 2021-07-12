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

  // console.log("In UserArtistsList.js, artists = ", artists);

  const userArtistListItems = artists.map((artist, index) => {
    return currentUser.id === Number(artist.user_id) ? (
      <li key={index} className={"artist-li"}>
        <div className={"artist-thumb-container"}>
          <NavLink to={`/artists/${artist.id}`}>
            <img src={artist.avatar} alt="avatar" className="thumbnail"></img>
            {artist.artistname}
          </NavLink>
          <ArtistDeleteModal artistId={artist.id} />
        </div>
      </li>
    ) : null;
  });

  return (
    <div className="artist-container">
      <ul className="artist-ul">{userArtistListItems}</ul>
    </div>
  );
}

export default UserArtistsList;
