// constants
const SET_ARTISTS = "artist/SET_ARTISTS";
const ADD_ARTIST = "artist/ADD_ARTIST";
const DELETE_ARTIST = "artist/DELETE_ARTIST";
const ADD_AVATAR = "artist/ADD_AVATAR";
const GET_ARTIST = "artist/GET_ARTIST";
const DELETE_AVATAR = "artist/DELETE_AVATAR";

// action creators

const setArtists = (artists) => ({
  type: SET_ARTISTS,
  payload: artists,
});

const addArtist = (artist) => ({
  type: ADD_ARTIST,
  payload: artist,
});

const deleteArtist = (artist) => ({
  type: DELETE_ARTIST,
  payload: artist,
});

const addAvatar = (avatar) => ({
  type: ADD_AVATAR,
  payload: avatar,
});

const getArtist = (artist) => ({
  type: GET_ARTIST,
  payload: artist,
});

const deleteAvatar = (avatar) => ({
  type: DELETE_AVATAR,
  payload: avatar,
});

// thunks

export const getArtists = (id) => async (dispatch) => {
  const res = await fetch(`/api/artists/`);
  if (res.ok) {
    const data = await res.json();
    dispatch(setArtists(data.artists));
  } else {
    console.log("error--getArtists thunk");
    console.log(res);
  }
};

export const createArtist = (formData) => async (dispatch) => {
  const res = await fetch("/api/artists/new", {
    method: "POST",
    body: formData,
  });
  if (res.ok) {
    const newArtist = await res.json();
    dispatch(addArtist(newArtist));
    return newArtist;
  } else {
    console.log("error--upload Album thunk (fetch call)");
  }
};

export const getAnArtist = (artistId) => async (dispatch) => {
  const res = await fetch(`/api/artists/${artistId}`);
  if (res.ok) {
    const artistProfile = await res.json();
    dispatch(getArtist(artistProfile));
  } else {
    console.log("error--getAnArtist thunk");
    console.log(res);
  }
};

export const deleteAnArtist = (id) => async (dispatch) => {
  const res = await fetch(`/api/artists/${id}`, {
    method: "DELETE",
  });
  if (res.ok) {
    dispatch(deleteArtist(id));
  } else {
    console.log("error--deleteAnArtist thunk");
    console.log(res);
  }
};

export const uploadAvatar = (formData, artistId) => async (dispatch) => {
  const res = await fetch(`/api/artists/${artistId}/avatar`, {
    method: "PUT",
    body: formData,
  });
  if (res.ok) {
    const data = await res.json();
    dispatch(addAvatar(data));
  } else {
    console.log("error--uploadAvatar thunk");
    console.log(res);
  }
};

export const removeAvatar = (artistId) => async (dispatch) => {
  const res = await fetch(`/api/artists/${artistId}/avatar`, {
    method: "PUT",
  });
  if (res.ok) {
    dispatch(deleteAvatar(artistId));
  } else {
    console.log("error--removeAvatar thunk");
    console.log(res);
  }
};

// reducer
const initialState = {};

export default function reducer(state = initialState, action) {
  const newState = { ...state };
  switch (action.type) {
    case SET_ARTISTS:
      return { ...action.payload };
    case ADD_ARTIST:
      // newState[action.payload] = action.payload;
      // return newState;
      return { ...action.payload };
    case GET_ARTIST:
      return { ...action.payload };
    case DELETE_ARTIST:
      const oldState = {
        ...state,
      };
      delete oldState[action.payload.id];
      return oldState;
    case ADD_AVATAR:
      return { ...action.payload };
    case DELETE_AVATAR:
      delete newState[action.payload];
      return newState;
    default:
      return state;
  }
}
