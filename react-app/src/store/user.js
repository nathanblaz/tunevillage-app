// constants

const GET_USER = "user/GET_USER";

// action creators

const getUser = (user) => ({
  type: GET_USER,
  payload: user,
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

// reducer
const initialState = {};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER:
      return { ...action.payload };
    default:
      return state;
  }
}
