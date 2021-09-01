import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createArtist, getArtists } from "../../store/artist";

const CreateArtist = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);

  const [artistname, setArtistname] = useState("");
  const [bio, setBio] = useState("");
  const [avatar, setAvatar] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("artistname", artistname);
    formData.append("avatar", avatar);
    formData.append("bio", bio);
    formData.append("user_id", user.id);

    console.log("Inside of ArtistCreate.js line 23, formData = ", formData);

    dispatch(createArtist(formData));
    dispatch(getArtists());
    history.push(`/users/${user.id}`);
  };

  const updateAvatar = (e) => {
    const file = e.target.files[0];
    setAvatar(file);
  };

  return (
    <div className="card">
      <h1>Add A New Artist</h1>
      <form onSubmit={handleSubmit}>
        <div className="formInputContainer">
          <label className="form-input">Artist Name</label>
          <input
            type="text"
            name="artistname"
            placeholder="Name"
            onChange={(e) => setArtistname(e.target.value)}
            value={artistname}
          />

          <label>Artist Profile Image</label>
          <input
            type="file"
            accept="image/*"
            name="file_upload"
            onChange={updateAvatar}
          />

          <label>Artist Bio</label>
          <textarea
            name="bio"
            placeholder="Bio"
            onChange={(e) => setBio(e.target.value)}
            value={bio}
          />

          <button className="submitBtn" type="submit" id="createArtistBtn">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateArtist;
