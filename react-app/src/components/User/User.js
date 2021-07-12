import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getAUser } from "../../store/user";
import UserArtistsList from "../UserArtistsList";
import "./User.css";

function User() {
  const dispatch = useDispatch();
  // const currentUser = useSelector((state) => state.session.user);

  const { userId } = useParams();
  const userProfile = useSelector((state) => state.userReducer);
  // console.log("******", userProfile);

  // console.log("In User.js, currentUser = ", currentUser);
  // console.log("In User.js, userId = ", userId);

  // if (currentUser.id === Number(userId)) {
  //   console.log("we have a match");
  // }

  useEffect(() => {
    dispatch(getAUser(Number(userId)));
  }, [dispatch, userId]);

  return (
    <div>
      <div className="user-page-container">
        <h2>User Profile</h2>
        <ul>
          <li>
            <strong>Username:</strong> {userProfile.username}
          </li>
          <li>
            <strong>Email:</strong> {userProfile.email}
          </li>
        </ul>
        <h2>Your Artists</h2>
        <button type="button" id="create-artist-button">
          <Link to={`/users/${userId}/new-artist`}>Create An Artist</Link>
        </button>
      </div>
      <UserArtistsList />
    </div>
  );
}
export default User;
