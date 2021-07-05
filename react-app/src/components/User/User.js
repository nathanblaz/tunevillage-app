import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import ListSongs from "../ListSongs";

function User() {
  const currentUser = useSelector((state) => state.session.user);
  const [userProfile, setUserProfile] = useState({});

  const { userId } = useParams();

  // console.log("In User.js, currentUser = ", currentUser);
  // console.log("In User.js, userId = ", userId);

  // if (currentUser.id === Number(userId)) {
  //   console.log("we have a match");
  // }

  useEffect(() => {
    if (!userId) {
      return;
    }
    (async () => {
      const response = await fetch(`/api/users/${userId}`);
      const userProfile = await response.json();
      setUserProfile(userProfile);
    })();
  }, [userId]);

  if (!userProfile) {
    return null;
  }

  return (
    <div>
      <img src={userProfile.avatar} alt="avatar"></img>
      {currentUser.id === Number(userId) ? (
        <div>
          <button id="edit-profile">Edit Profile</button>
        </div>
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
