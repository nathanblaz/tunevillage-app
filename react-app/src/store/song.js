// constants
const SET_SONGS = "song/SET_SONGS";
const ADD_SONG = "song/ADD_SONG";

// action creators
const setSongs = (songs) => ({
  type: SET_SONGS,
  payload: songs,
});

const addSong = (song) => ({
  type: ADD_SONG,
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

export const createSong = (formData) => async (dispatch) => {
  // console.log("Inside of createSong thunk, formData = ", formData);
  const res = await fetch("/api/songs/new", {
    method: "POST",
    body: formData,
  });
  if (res.ok) {
    const newSong = await res.json();
    dispatch(addSong(newSong));
    return newSong;
  } else {
    console.log("error--upload createSong thunk (fetch call)");
    console.log("Inside of createSong thunk, formData = ", formData);
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
    case ADD_SONG:
      return { ...action.payload };
    default:
      return state;
  }
}
