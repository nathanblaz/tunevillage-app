import React, { useEffect, useState } from "react";
import { Modal } from "../../context/Modal";
// import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createSong } from "../../store/song";
import { getAnArtist } from "../../store/artist";
import { renderArtistSongs } from "../../store/song";

const CreateSongModal = ({ artistId }) => {
  const [showModal, setShowModal] = useState(false);

  //   const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const idForDispatch = Number(artistId);

  const [title, setTitle] = useState("");
  const [song, setSong] = useState(null);

  const uploadSong = (e) => {
    const file = e.target.files[0];
    setSong(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("song", song);
    formData.append("artist_id", Number(artistId));

    // console.log("Inside of SongCreateModal/index.js, formData = ", formData);
    setShowModal(false);

    dispatch(createSong(formData));
  };

  useEffect(() => {
    console.log(
      "Inside of SongCreateModal/index.js useEffect, aristId = ",
      artistId
    );
    dispatch(renderArtistSongs(artistId));
  }, [dispatch, artistId]);

  return (
    <>
      <button id="add-song" onClick={() => setShowModal(true)}>
        Add Song
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <h2>Add A New Song</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-container">
              <label className="form-input">
                Song Title
                <input
                  type="text"
                  name="title"
                  placeholder="Title"
                  onChange={(e) => setTitle(e.target.value)}
                  value={title}
                />
              </label>
              <label className="form-input">
                Song
                <input
                  type="file"
                  accept="audio/*"
                  name="file_upload"
                  onChange={uploadSong}
                />
              </label>
              <button type="submit" id="createSongBtn">
                Submit
              </button>
            </div>
          </form>
        </Modal>
      )}
    </>
  );
};

export default CreateSongModal;
