import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
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
    </div>
  );
}
export default User;
