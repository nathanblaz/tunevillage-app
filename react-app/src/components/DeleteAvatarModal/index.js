import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { removeAvatar } from "../../store/user";

const DeleteAvatarModal = ({ userId }) => {
  const [showModal, setShowModal] = useState(false);
  const user = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(removeAvatar(userId));
    setShowModal(false);
    history.push(`/users/${user.id}`);
  };

  return (
    <div>
      {user.avatar !== null ? (
        <button id="edit-profile" onClick={() => setShowModal(true)}>
          Delete Profile Image
        </button>
      ) : null}
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <div id="delete-confirm">
            Are you sure you want to delete this profile image?
            <button className="modal--button-div" onClick={handleSubmit}>
              Delete
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default DeleteAvatarModal;
