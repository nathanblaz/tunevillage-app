import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { renderUserSongs } from "../../store/song";

const ListSongs = ({ userId }) => {
  const dispatch = useDispatch();
  const songs = useSelector((state) => Object.values(state.songReducer));

  //   console.log("In ListSongs.js, userId = ", userId);
  useEffect(() => {
    dispatch(renderUserSongs(userId));
  }, [dispatch, userId]);

  return (
    <div className="song-container">
      <ul>
        {songs.map((song) => (
          <li key={song.id}>
            Song: {`${song.title}`}
            <audio controls src={`${song.song_url}`}></audio>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListSongs;
