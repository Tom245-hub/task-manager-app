import {
  USER_POST_REQUEST,
  USER_POST_SUCCESS,
  USER_POST_FAILURE,
} from "../constans/userConstans";

export const postUser = (loginObject) => async (dispatch) => {
  dispatch({
    type: USER_POST_REQUEST,
  });

  try {
    const response = fetch("http://localhost:8000/users", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(loginObject),
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: USER_POST_SUCCESS,
          payload: data,
        });
      });
  } catch (error) {
    dispatch({
      type: USER_POST_FAILURE,
    });
  }
};
