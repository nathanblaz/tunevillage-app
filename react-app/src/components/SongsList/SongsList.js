import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { renderArtistSongs } from "../../store/song";
import SongUpdateModal from "../SongUpdateModal";
import SongDeleteModal from "../SongDeleteModal";

const SongsList = ({ artistId }) => {
  const dispatch = useDispatch();

  const currentUser = useSelector((state) => state.session.user);
  const artistProfile = useSelector((state) => state.artist);
  const songs = Object.values(useSelector((state) => state.song));

  // console.log("In SongsList.js, songs = ", songs);

  //   console.log("In ListSongs.js, userId = ", userId);
  useEffect(() => {
    dispatch(renderArtistSongs(artistId));
  }, [dispatch, artistId]);

  return (
    <div className="song-container">
      <ul>
        {songs?.map((song, index) => (
          <li key={index}>
            Song: {`${song.title}`}
            <audio controls src={`${song.song_url}`}></audio>
            {currentUser.id === Number(artistProfile.user_id) ? (
              <>
                <SongUpdateModal
                  songTitle={song.title}
                  artistId={artistId}
                  songId={song.id}
                />
                <SongDeleteModal artistId={artistId} songId={song.id} />
              </>
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SongsList;
