// constants
const ADD_AVATAR = "user/ADD_AVATAR";
const GET_USER = "user/GET_USER";

// action creators

const addAvatar = (avatar) => ({
  type: ADD_AVATAR,
  payload: avatar,
});

const getUser = (user) => ({
  type: GET_USER,
  payload: user,
});

// thunks

export const getAUser = (userId) => async (dispatch) => {
  const response = await fetch(`/api/users/${userId}`);
  if (response.ok) {
    const userProfile = await response.json();
    dispatch(getUser(userProfile));
  } else {
    console.log("error--getAUser thunk");
    console.log(response);
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

// reducer
const initialState = {};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_AVATAR:
      const updatedState = { ...action.payload };
      return updatedState;
    case GET_USER:
      return { ...action.payload };
    default:
      return state;
  }
}
