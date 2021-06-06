import {
  USER_POST_REQUEST,
  USER_POST_SUCCESS,
  USER_POST_FAILURE,
} from "../constans/userConstans";
import { LOADING_STATES } from "../constans/commonConstans";

const initialState = {
  loading: {},
  data: {},
  error: {},
};

const user = (state = initialState, action) => {
  const newLoading = { ...state.loading };

  switch (action.type) {
    case USER_POST_REQUEST:
      return {
        ...state,
        loading: {
          ...state.loading,
          [action.type]: LOADING_STATES.LOADING,
        },
        data: {},
        error: {},
      };

    case USER_POST_SUCCESS:
      delete newLoading.USER_POST_REQUEST;
      return {
        ...state,
        loading: {
          ...state.loading,
          [action.type]: LOADING_STATES.LOADED,
        },
        data: action.payload,
        error: {},
      };

    case USER_POST_FAILURE:
      delete newLoading.USER_POST_REQUEST;
      return {
        ...state,
        loading: {
          ...state.loading,
          [action.type]: LOADING_STATES.FAILED,
        },
        data: {},
        error: action.payload,
      };

    default:
      return state;
  }
};

export default user;
