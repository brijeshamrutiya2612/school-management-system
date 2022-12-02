import { createAction, createReducer } from "@reduxjs/toolkit";

const pendding = createAction("pendding");
const success = createAction("success");
const fail = createAction("fail");

const intialState = {
  loading: false,
  adminInfo: [],
  adminToken: null,
  error: null,
  success: false,
};

const adminSlice = createReducer(intialState, (builder) => {
  builder
    .addCase(pendding, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(success, (state, action) => {
      state.loading = false;
      const adminInfo = action.payload;
      return {...state, adminInfo: adminInfo};
    });
});

export default adminSlice;
