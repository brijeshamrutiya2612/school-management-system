import axios from "axios";
import {
  LOGIN_FAIL,
  LOGIN_PENDING,
  LOGIN_SUCCESS,
} from "../Constants/Adminconstant";

export const loginAction = (login) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_PENDING });
    const { data } = await axios.get("http://localhost:3001/admin");
    const final = data.find((t) => t.email === login.email);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: { ...final, isAuthenticated: true },
    });
    if (final.email) {
      const res = await axios.put(`http://localhost:3001/admin/${final.id}`, {
        ...final,
        isAuthenticated: true,
      });
      const r = await res.data;
      return r;
    } else {
      dispatch({ type: LOGIN_FAIL, payload: "Some Problem with Login" });
    }
  } catch (error) {
    dispatch({ type: LOGIN_FAIL, payload: error });
  }
};

export const logoutAction = (login) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_PENDING });
    const { data } = await axios.get("http://localhost:3001/admin");
    const final = data.find((t) => t.email === login.email);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: { ...final, isAuthenticated: false },
    });
    if (final.email) {
      const res = await axios.put(`http://localhost:3001/admin/${final.id}`, {
        ...final,
        isAuthenticated: false,
      });
      const r = await res.data;
      return r;
    } else {
      dispatch({ type: LOGIN_FAIL, payload: "Some Problem with Logout" });
    }
  } catch (error) {
    dispatch({ type: LOGIN_FAIL, payload: error });
  }
};
