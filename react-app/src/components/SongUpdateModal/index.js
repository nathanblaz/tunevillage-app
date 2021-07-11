import React, { useEffect, useState } from "react";
import { Modal } from "../../context/Modal";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getAnArtist } from "../../store/artist";
import { updateASong, renderArtistSongs } from "../../store/song";

const SongUpdateModal = ({ songTitle, artistId, songId }) => {
  const [showModal, setShowModal] = useState(false);
  const user = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory();
  const [title, setTitle] = useState("");

  console.log("Inside SongUpdateModal/index.js, songTitle = ", songTitle);
  console.log("Inside SongUpdateModal/index.js, title = ", title);
  console.log("Inside SongUpdateModal/index.js, songId = ", songId);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(
      "Inside SongUpdateModal/index.js handleSubmit, title = ",
      title
    );

    const formData = new FormData();
    formData.append("title", title);

    dispatch(updateASong(formData, songId));
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
      <button id="edit-title" onClick={() => setShowModal(true)}>
        Edit Title
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <form onSubmit={handleSubmit}>
            <label className="form-input">
              Song Title
              <textarea
                name="title"
                placeholder={songTitle}
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              />
            </label>
            <button type="submit" id="updateTitleBtn">
              Submit
            </button>
          </form>
        </Modal>
      )}
    </div>
  );
};

export default SongUpdateModal;
