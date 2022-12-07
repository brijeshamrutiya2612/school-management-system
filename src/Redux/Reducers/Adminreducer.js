import { createReducer } from "@reduxjs/toolkit";
import {
  LOGIN_FAIL,
  LOGIN_PENDING,
  LOGIN_SUCCESS,
} from "../Constants/Adminconstant";

const intialState = {
  adminInfo: [],
};

export const adminReducer = (state = intialState, action) => {
  switch (action.type) {
    case LOGIN_PENDING:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        adminInfo: action.payload,
      };
    case LOGIN_FAIL:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
