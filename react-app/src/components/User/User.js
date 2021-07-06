import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ListSongs from "../ListSongs";
import UploadAvatarModal from "../UploadAvatarModal";
import { getAUser } from "../../store/user";

function User() {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.session.user);
  // const [userProfile, setUserProfile] = useState({});

  const { userId } = useParams();
  const userProfile = useSelector((state) => state.userReducer);
  console.log("******", userProfile);

  // console.log("In User.js, currentUser = ", currentUser);
  // console.log("In User.js, userId = ", userId);

  // if (currentUser.id === Number(userId)) {
  //   console.log("we have a match");
  // }

  useEffect(() => {
    dispatch(getAUser(Number(userId)));
  }, [dispatch, userId]);

  console.log(userProfile.avatar === null);

  return (
    <div>
      {userProfile.avatar !== null ? (
        <img src={userProfile?.avatar} alt="avatar"></img>
      ) : (
        <img
          src="https://blueheronhillsgc.com/wp-content/uploads/2016/03/female-profile-blank.jpg"
          alt="blank-avatar"
        ></img>
      )}
      {currentUser.id === Number(userId) ? (
        <UploadAvatarModal userId={userId} />
      ) : null}
      <ul>
        <li>
          <strong>User Id</strong> {userId}
        </li>
        <li>
          <strong>Username</strong> {userProfile.username}
        </li>
        <li>
          <strong>Email</strong> {userProfile.email}
        </li>
        <li>
          <strong>Bio</strong> {userProfile.bio}
        </li>
      </ul>
      <ListSongs userId={userId} />
    </div>
  );
}
export default User;
