import {
  ADD_ADMISSION_DETAIL_PENDING,
  ADD_STUDENT_DETAIL_FAIL,
  ADD_STUDENT_DETAIL_RESULT,
  GET_STUDENT_DETAIL_BY_ID_FAIL,
  GET_STUDENT_DETAIL_BY_ID_SUCCESS,
  GET_STUDENT_DETAIL_RESULT,
  LOGIN_FAIL,
  LOGIN_PENDING,
  LOGIN_SUCCESS,
  LOGOUT_FAIL,
  LOGOUT_PENDING,
  LOGOUT_SUCCESS,
} from "../Constants/Adminconstant";

const intialState = {
  adminInfo: [],
  error: [],
  addStudent: [],
  studentError: [],
  getStudent: [],
  getStudentById: [],
  getStudentById_error: [],
};

export const adminReducer = (state = intialState, action) => {
  switch (action.type) {
    case LOGIN_PENDING:
    case LOGOUT_PENDING:
    case ADD_ADMISSION_DETAIL_PENDING:
    case GET_STUDENT_DETAIL_BY_ID_FAIL:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS:
    case LOGOUT_SUCCESS:
      return {
        ...state,
        loading: false,
        adminInfo: action.payload,
      };
    case ADD_STUDENT_DETAIL_RESULT:
      return {
        ...state,
        loading: false,
        addStudent: action.payload,
      };
    case GET_STUDENT_DETAIL_RESULT:
      return {
        ...state,
        loading: false,
        getStudent: action.payload,
      };
    case LOGIN_FAIL:
    case LOGOUT_FAIL:
      return { ...state, error: action.payload };
    case ADD_STUDENT_DETAIL_FAIL:
      return { ...state, studentError: action.payload };
    case GET_STUDENT_DETAIL_BY_ID_FAIL:
      return { ...state, getStudentById_error: action.payload };
    default:
      return state;
  }
};
