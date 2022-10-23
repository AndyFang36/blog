import {createSlice} from "@reduxjs/toolkit";

export const loginStateSlice = createSlice({
  name: "loggedIn",
  initialState: {
    loggedIn: !!localStorage.getItem("token"),
  },
  reducers: {
    login: (state) => {state.loggedIn = true},
    logout: (state) => {state.loggedIn = false},
  }
});

export const {login, logout} = loginStateSlice.actions;

export default loginStateSlice.reducer;