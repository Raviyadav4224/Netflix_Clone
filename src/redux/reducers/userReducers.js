import { createReducer } from "@reduxjs/toolkit";

export const userReducer = createReducer(
  {},
  {
    loadUserRequest: (state) => {
      state.loading = true;
    },
    loadUserSuccess: (state, action) => {
      state.loading = false;
      state.userInfo = action.payload;
    },
    loadUserFail: (state, action) => {
      state.loading = false;
      state.userInfo = action.payload;
    },
    loginRequest: (state) => {
      state.loading = true;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.userInfo = action.payload;
    },
    loginFail: (state) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.userInfo = null;
    },
    logOutRequest: (state) => {
      state.loading = true;
    },
    logOutSuccess: (state) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.userInfo = null;
    },
    logOutFail: (state) => {
      state.loading = false;
      state.isAuthenticated = true;
    },
  }
);
