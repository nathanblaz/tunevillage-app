import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { uploadAvatar } from "../../store/user";

const UploadAvatar = ({ userId }) => {
  const user = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory();

  const [avatar, setAvatar] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("avatar", avatar);

    setUploading(true);
    dispatch(uploadAvatar(userId, formData));
    setUploading(false);
    history.push(`/users/${user.id}`);
  };

  const updateAvatar = (e) => {
    const file = e.target.files[0];
    setAvatar(file);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="file"
            accept="image/*"
            name="file_upload"
            onChange={updateAvatar}
          />
        </label>
      </form>
    </div>
  );
};

export default UploadAvatar;
