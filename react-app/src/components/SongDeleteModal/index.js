import React, { useState, useEffect } from "react";
import { Modal } from "../../context/Modal";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getAnArtist } from "../../store/artist";
import { deleteASong, renderArtistSongs } from "../../store/song";

const SongDeleteModal = ({ artistId, songId }) => {
  const [showModal, setShowModal] = useState(false);
  // const user = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(deleteASong(songId));
    history.push(`/`);
    history.goBack();
    setShowModal(false);
  };

  useEffect(() => {
    dispatch(getAnArtist(parseInt(artistId)));
    dispatch(renderArtistSongs(artistId));
  }, [dispatch, artistId]);

  return (
    <div>
      <button id="edit-profile" onClick={() => setShowModal(true)}>
        Delete Song
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <div id="delete-confirm">
            Are you sure you want to delete this song?
            <button className="modal--button-div" onClick={handleSubmit}>
              Delete
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default SongDeleteModal;
