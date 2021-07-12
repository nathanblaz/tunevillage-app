import React, { useEffect, useState } from "react";
import { Modal } from "../../context/Modal";
import { useDispatch } from "react-redux";
// import { useHistory } from "react-router-dom";
import { updateABio, getAnArtist } from "../../store/artist";

const UpdateBioModal = ({ artistBio, artistId }) => {
  const [showModal, setShowModal] = useState(false);
  // const user = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  // const history = useHistory();

  const [bio, setBio] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("bio", bio);

    dispatch(updateABio(formData, artistId));
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
      <button id="edit-bio" onClick={() => setShowModal(true)}>
        Update Bio
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <form onSubmit={handleSubmit}>
            <label className="form-input">
              Artist Bio
              <textarea
                name="bio"
                placeholder={artistBio}
                onChange={(e) => setBio(e.target.value)}
                value={bio}
              />
            </label>
            <button type="submit" id="updateBioBtn">
              Submit
            </button>
          </form>
        </Modal>
      )}
    </div>
  );
};

export default UpdateBioModal;
