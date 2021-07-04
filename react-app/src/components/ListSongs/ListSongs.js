import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const ListSongs = ({ user }) => {
  const dispatch = useDispatch();
  const songs = useSelector((state) => Object.values(state.songReducer));

  useEffect(() => {
    dispatch(renderUserSongs());
  }, [dispatch]);

  return (
    <div className="song-container">
      <ul>
        {songs.map((song) => (
          <>
            <li>Song: {`${song.title}`}</li>
            <audio src={`${song.song_url}`}></audio>
          </>
        ))}
      </ul>
    </div>
  );
};

export default ListSongs;
