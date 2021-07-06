// constants
const ADD_AVATAR = "avatar/ADD_AVATAR";

// action creators

const addAvatar = (avatar) => ({
  type: ADD_AVATAR,
  payload: avatar,
});

// thunks

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

    default:
      return state;
  }
}
