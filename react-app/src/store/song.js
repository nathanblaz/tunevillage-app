// constants
const SET_SONGS = "song/SET_SONGS";

// action creators
const setSongs = (song) => ({
  type: SET_SONGS,
  payload: song,
});

// thunks

export const renderArtistSongs = (id) => async (dispatch) => {
  const res = await fetch(`/api/artists/${id}/songs`);
  if (res.ok) {
    const data = await res.json();
    dispatch(setSongs(data.songs));
  } else {
    console.log("This artist has no songs");
  }
};

// reducer

const initialState = {};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_SONGS:
      const newState = {};
      action.payload.forEach((song) => {
        newState[song.id] = song;
      });
      return newState;

    default:
      return state;
  }
}
