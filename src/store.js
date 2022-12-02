import { configureStore } from "@reduxjs/toolkit";
import adminReducer from "./Redux/Reducers/Adminreducer";

const store = configureStore({
  reducer: {
    admin: adminReducer,
  },
});

export default store;

// let intialState = {};
// const middleware = [thunk];
// intialState,
// composeWithDevTools(applyMiddleware(...middleware))
