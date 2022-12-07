import {
  applyMiddleware,
  combineReducers,
  configureStore,
} from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { adminReducer } from "./Redux/Reducers/Adminreducer";

const reducers = combineReducers({
  admin: adminReducer,
});

let intialState = {};

const middleware = [thunk];

const store = configureStore(
  {
    reducer: reducers,
  },
  intialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
