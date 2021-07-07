// constants
const ADD_AVATAR = "user/ADD_AVATAR";
const GET_USER = "user/GET_USER";
const DELETE_AVATAR = "user/DELETE)AVATAR";

// action creators

const addAvatar = (avatar) => ({
  type: ADD_AVATAR,
  payload: avatar,
});

const getUser = (user) => ({
  type: GET_USER,
  payload: user,
});

const deleteAvatar = (avatar) => ({
  type: DELETE_AVATAR,
  payload: avatar,
});

// thunks

export const getAUser = (userId) => async (dispatch) => {
  const res = await fetch(`/api/users/${userId}`);
  if (res.ok) {
    const userProfile = await res.json();
    dispatch(getUser(userProfile));
  } else {
    console.log("error--getAUser thunk");
    console.log(res);
  }
};

export const uploadAvatar = (formData, userId) => async (dispatch) => {
  const res = await fetch(`/api/users/${userId}/avatar`, {
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

export const removeAvatar = (userId) => async (dispatch) => {
  const res = await fetch(`/api/users/${userId}/avatar`, {
    method: "PUT",
  });
  if (res.ok) {
    dispatch(deleteAvatar(userId));
  } else {
    console.log("error--removeAvatar thunk");
    console.log(res);
  }
};

// reducer
const initialState = {};

export default function userReducer(state = initialState, action) {
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
