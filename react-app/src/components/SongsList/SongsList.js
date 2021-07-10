import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { renderArtistSongs } from "../../store/song";

const SongsList = ({ artistId }) => {
  const dispatch = useDispatch();
  // const artist =
  const songs = Object.values(useSelector((state) => state.song));

  console.log("In SongsList.js, songs = ", songs);

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
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SongsList;
