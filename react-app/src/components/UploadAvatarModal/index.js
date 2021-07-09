import React, { useEffect, useState } from "react";
import { Modal } from "../../context/Modal";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { uploadAvatar, getAnArtist } from "../../store/artist";

const UploadAvatarModal = ({ artistId }) => {
  const [showModal, setShowModal] = useState(false);
  const user = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory();

  const [avatar, setAvatar] = useState(null);

  const updateAvatar = (e) => {
    const file = e.target.files[0];
    setAvatar(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("avatar", avatar);

    dispatch(uploadAvatar(formData, artistId));
    // history.push(`/`);
    // history.goBack();
    setShowModal(false);
    // history.push(`/artists/${artistId}`);
  };

  useEffect(() => {
    dispatch(getAnArtist(parseInt(artistId)));
  }, [dispatch, artistId]);

  return (
    <div>
      {user.avatar === null ? (
        <button id="edit-profile" onClick={() => setShowModal(true)}>
          Add A Profile Image
        </button>
      ) : (
        <button id="edit-profile" onClick={() => setShowModal(true)}>
          Change Profile Image
        </button>
      )}

      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <form onSubmit={handleSubmit}>
            <label>
              <input
                type="file"
                accept="image/*"
                name="file_upload"
                onChange={updateAvatar}
              />
            </label>
            <button type="submit" id="uploadAvatarBtn">
              Submit
            </button>
          </form>
        </Modal>
      )}
    </div>
  );
};

export default UploadAvatarModal;
