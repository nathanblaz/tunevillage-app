import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ListSongs from "./ListSongs/";

function User() {
  const [user, setUser] = useState({});

  const { userId } = useParams();

  // console.log("In User.js, userId = ", userId);

  useEffect(() => {
    if (!userId) {
      return;
    }
    (async () => {
      const response = await fetch(`/api/users/${userId}`);
      const user = await response.json();
      setUser(user);
    })();
  }, [userId]);

  if (!user) {
    return null;
  }

  return (
    <div>
      <img src={user.avatar} alt="avatar"></img>
      <ul>
        <li>
          <strong>User Id</strong> {userId}
        </li>
        <li>
          <strong>Username</strong> {user.username}
        </li>
        <li>
          <strong>Email</strong> {user.email}
        </li>
        <li>
          <strong>Bio</strong> {user.bio}
        </li>
      </ul>
      <ListSongs userId={userId} />
    </div>
  );
}
export default User;
