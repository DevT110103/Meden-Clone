import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    login: {
      currentUser: null,
      isFetching: false,
      error: false,
    },
    logOut: {
      token: '',
      isFetching: false,
      err: false,
    },
  },
  reducers: {
    loginStart: (state) => {
      state.login.isFetching = true;
      state.login.error = false;
    },
    loginSuccess: (state, action) => {
      state.login.isFetching = false;
      state.login.currentUser = action.payload;
      state.login.error = false;
    },
    loginFailed: (state) => {
      state.login.isFetching = false;
      state.login.error = true;
    },

    logOutStart: (state) => {
      state.logOut.isFetching = true;
      state.logOut.err = false;
    },
    logOutSuccess: (state, action) => {
      state.logOut.isFetching = false;
      state.logOut.token = action.payload;
      state.logOut.err = false;
    },
    logOutFailed: (state) => {
      state.logOut.isFetching = false;
      state.logOut.err = true;
    },
  },
});

export const { loginStart, loginFailed, loginSuccess, logOutStart, logOutSuccess, logOutFailed } = authSlice.actions;
export default authSlice.reducer;
