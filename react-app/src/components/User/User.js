import React, { useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getAUser } from "../../store/user";

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
      </ul>
      <div className="user-artists">
        <h2>Your Artists</h2>
      </div>
      <button type="button" id="create-artist-button">
        <NavLink to={`/users/${userId}/new-artist`}>Create An Artist</NavLink>
      </button>
      <button type="button" id="delete-artist-button">
        <NavLink to={`/users/${userId}/delete-artist`}>
          Delete An Artist
        </NavLink>
      </button>
    </div>
  );
}
export default User;
