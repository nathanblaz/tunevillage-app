import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import SongsList from "../SongsList";
import UploadAvatarModal from "../UploadAvatarModal";
import DeleteAvatarModal from "../DeleteAvatarModal";
import { getAnArtist } from "../../store/artist";

function Artist() {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.session.user);

  const { artistId } = useParams();
  const artistProfile = useSelector((state) => state.artist);

  console.log("In Artist.js, currentUser.id = ", currentUser.id);
  console.log("In Artist.js, artistId.id = ", currentUser.id);
  console.log(
    "In Artist.js, currentUser.id === Number(artistProfile.user_id) : ",
    currentUser.id === Number(artistProfile.user_id)
  );

  useEffect(() => {
    dispatch(getAnArtist(Number(artistId)));
  }, [dispatch, artistId]);

  return (
    <div>
      {artistProfile.avatar !== null ? (
        <img src={artistProfile?.avatar} alt="avatar"></img>
      ) : (
        <img
          src="https://blueheronhillsgc.com/wp-content/uploads/2016/03/female-profile-blank.jpg"
          alt="blank-avatar"
        ></img>
      )}
      {currentUser.id === Number(artistProfile.user_id) ? (
        <>
          <UploadAvatarModal artistId={artistId} />
          {/* <DeleteAvatarModal artistId={artistId} /> */}
        </>
      ) : null}
      <ul>
        <li>
          <strong>Bio</strong> {artistProfile.bio}
        </li>
      </ul>
      <SongsList artistId={artistId} />
    </div>
  );
}
export default Artist;
