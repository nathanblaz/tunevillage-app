// constants
const ADD_AVATAR = "artist/ADD_AVATAR";
const GET_ARTIST = "artist/GET_USER";
const DELETE_AVATAR = "artist/DELETE)AVATAR";

// action creators

const addAvatar = (avatar) => ({
  type: ADD_AVATAR,
  payload: avatar,
});

const getArtist = (artist) => ({
  type: GET_USER,
  payload: artist,
});

const deleteAvatar = (avatar) => ({
  type: DELETE_AVATAR,
  payload: avatar,
});

// thunks

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

export const uploadAvatar = (formData, artistId) => async (dispatch) => {
  const res = await fetch(`/api/artists/${artistId}/avatar`, {
    method: "POST",
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

export default function artistReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_AVATAR:
      const newAvatarState = { ...action.payload };
      return newAvatarState;
    case DELETE_AVATAR:
      const removeAvatarState = { ...action.payload };
      return removeAvatarState;
    case GET_USER:
      return { ...action.payload };
    default:
      return state;
  }
}
