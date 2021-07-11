// constants
const SET_SONGS = "song/SET_SONGS";
const ADD_SONG = "song/ADD_SONG";
const UPDATE_SONG = "song/UPDATE_SONG";
const DELETE_SONG = "song/DELETE_SONG";

// action creators
const setSongs = (songs) => ({
  type: SET_SONGS,
  payload: songs,
});

const addSong = (song) => ({
  type: ADD_SONG,
  payload: song,
});

const updateSong = (song) => ({
  type: UPDATE_SONG,
  payload: song,
});

const deleteSong = (song) => ({
  type: DELETE_SONG,
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

export const updateASong = (formData, id) => async (dispatch) => {
  const res = await fetch(`/api/songs/${id}/update`, {
    method: "PUT",
    body: formData,
  });
  if (res.ok) {
    const data = await res.json();
    dispatch(updateSong(data));
  } else {
    console.log("error--updateASong thunk");
    console.log(res);
  }
};

export const deleteASong = (id) => async (dispatch) => {
  const res = await fetch(`/api/songs/${id}`, {
    method: "DELETE",
  });
  if (res.ok) {
    dispatch(deleteSong(id));
  } else {
    console.log("error--deleteASong thunk");
    console.log(res);
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
      const addSongNewState = { ...state };
      addSongNewState[action.payload.id] = action.payload;
      return addSongNewState;
    case UPDATE_SONG:
      const updateSongNewState = { ...state };
      updateSongNewState[action.payload.id] = action.payload;
      return updateSongNewState;
    case DELETE_SONG:
      const oldState = {
        ...state,
      };
      delete oldState[action.payload];
      return oldState;
    default:
      return state;
  }
}
