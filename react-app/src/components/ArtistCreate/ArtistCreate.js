import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { createArtist } from "../../store/artist";

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

    // dispatch(createArtist(formData));
    history.push(`/users/${user.id}`);
  };

  return (
    <>
      <h1>Add A New Artist</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-container">
          <label className="form-input">
            Artist Name
            <input
              type="text"
              name="artistname"
              placeholder="Name"
              onChange={(e) => setArtistname(e.target.value)}
              value={artistname}
            />
          </label>
          <label className="form-input">
            Artist Profile Image
            <input type="file" name="file_upload" onChange={setAvatar} />
          </label>
          <label className="form-input">
            Artist Bio
            <textarea
              name="bio"
              placeholder="Bio"
              onChange={(e) => setBio(e.target.value)}
              value={bio}
            />
          </label>
          <button type="submit" id="createArtistBtn">
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default CreateArtist;
