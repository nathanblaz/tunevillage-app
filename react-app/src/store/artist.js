// constants
const SET_ARTISTS = "artist/SET_ARTISTS";
const ADD_ARTIST = "artist/ADD_ARTIST";
const DELETE_ARTIST = "artist/DELETE_ARTIST";
const ADD_AVATAR = "artist/ADD_AVATAR";
const GET_ARTIST = "artist/GET_ARTIST";
const UPDATE_BIO = "artist/UPDATE_BIO";

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

const addAvatar = (artist) => ({
  type: ADD_AVATAR,
  payload: artist,
});

const getArtist = (artist) => ({
  type: GET_ARTIST,
  payload: artist,
});

const updateBio = (artist) => ({
  type: UPDATE_BIO,
  payload: artist,
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
    console.log("error--upload createArtist thunk (fetch call)");
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

export const updateABio = (formData, artistId) => async (dispatch) => {
  const res = await fetch(`/api/artists/${artistId}/bio`, {
    method: "PUT",
    body: formData,
  });
  if (res.ok) {
    const data = await res.json();
    dispatch(updateBio(data));
  } else {
    console.log("error--updateABio thunk");
    console.log(res);
  }
};

// reducer
const initialState = {};

export default function reducer(state = initialState, action) {
  const newState = { ...state };
  switch (action.type) {
    case SET_ARTISTS:
      console.log("action.pahyload in SET_ARTISTS is:", action.payload);
      const manyArtistsState = {};
      action.payload.forEach((artist) => {
        manyArtistsState[artist.id] = artist;
      });
      return manyArtistsState;
    // return { ...action.payload };
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
    case UPDATE_BIO:
      return { ...action.payload };
    default:
      return state;
  }
}
