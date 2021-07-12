import React, { useState, useEffect } from "react";
import { Modal } from "../../context/Modal";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { deleteAnArtist, getArtists } from "../../store/artist";

const ArtistDeleteModal = ({ artistId }) => {
  const [showModal, setShowModal] = useState(false);
  // const user = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(deleteAnArtist(Number(artistId)));
    history.push(`/`);
    history.goBack();
    setShowModal(false);
  };

  useEffect(() => {
    dispatch(getArtists(Number(artistId)));
  }, [dispatch, artistId]);

  return (
    <div>
      <button id="delete-artist-button" onClick={() => setShowModal(true)}>
        Delete Artist
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <div id="delete-confirm">
            Are you sure you want to delete this artist?
            <button className="modal--button-div" onClick={handleSubmit}>
              Delete
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default ArtistDeleteModal;
