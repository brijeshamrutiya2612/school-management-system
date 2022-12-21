import axios from "axios";
import { toast } from "react-toastify";
import {
  ADD_STUDENT_DETAIL_FAIL,
  ADD_STUDENT_DETAIL_PENDING,
  ADD_STUDENT_DETAIL_RESULT,
  GET_STUDENT_DETAIL_BY_ID_FAIL,
  GET_STUDENT_DETAIL_BY_ID_PENDING,
  GET_STUDENT_DETAIL_BY_ID_SUCCESS,
  GET_STUDENT_DETAIL_RESULT,
  LOGIN_FAIL,
  LOGIN_PENDING,
  LOGIN_SUCCESS,
  LOGOUT_FAIL,
  LOGOUT_PENDING,
  LOGOUT_SUCCESS,
} from "../Constants/Adminconstant";

export const loginAction = (login) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_PENDING });
    const { data } = await axios.get("http://localhost:3001/admin");
    const final = data.find((t) => t.email === login.email);
    if (final && final.email) {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: { ...final, isAuthenticated: true },
      });
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
    dispatch({ type: LOGOUT_PENDING });
    const { data } = await axios.get("http://localhost:3001/admin");
    const final = data.find((t) => t.email === login.email);
    dispatch({
      type: LOGOUT_SUCCESS,
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
      dispatch({ type: LOGOUT_FAIL, payload: "Some Problem with Logout" });
    }
  } catch (error) {
    dispatch({ type: LOGOUT_FAIL, payload: error });
  }
};

/// =============== Student Action ====================   ///

// Get All Student Detail

export const getStudentDetail = () => async (dispatch) => {
  try {
    dispatch({ type: ADD_STUDENT_DETAIL_PENDING });
    const { data } = await axios.get("http://localhost:3001/students");
    dispatch({
      type: GET_STUDENT_DETAIL_RESULT,
      payload: data
    });
  } catch (error) {
    dispatch({ type: LOGIN_FAIL, payload: error });
  }
};

// Get Student Detail by Id

export const getStudentDetailById = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_STUDENT_DETAIL_BY_ID_PENDING });
    const { data } = await axios.get(`http://localhost:3001/students/${id}`);
    dispatch({
      type: GET_STUDENT_DETAIL_BY_ID_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({ type: GET_STUDENT_DETAIL_BY_ID_FAIL, payload: error });
  }
};

// Add Student Detail

export const addStudentDetail = (studentdata) => async (dispatch) => {
  try {
    dispatch({ type: ADD_STUDENT_DETAIL_PENDING });
    const getData = await axios.get("http://localhost:3001/students");
    const final = getData.data.filter((e) => e.email === studentdata.email);
    if (final.length > 0) {
      toast.error(`${studentdata.email} is already register`);
      dispatch({
        type: ADD_STUDENT_DETAIL_FAIL,
        payload: final,
      });
    } else if (studentdata.mobile.length !== 10) {
      toast.error("Mobile No. must be Enter in 10 Digits");
      dispatch({
        type: ADD_STUDENT_DETAIL_FAIL,
        payload: "Password must be Enter in 6 to 10 Character",
      });
    } else {
      const {status} = await axios.post("http://localhost:3001/students", {
        ...studentdata,
        studAuthentication: false,
      });
      toast.success("Successfull Add Student Detail");
      dispatch({
        type: ADD_STUDENT_DETAIL_RESULT,
        payload: status
      });
    }
  } catch (error) {
    dispatch({ type: ADD_STUDENT_DETAIL_FAIL, payload: error });
  }
};
