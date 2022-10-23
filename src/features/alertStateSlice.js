import {createSlice} from "@reduxjs/toolkit";

export const alertStateSlice = createSlice({
  name: "alert",
  initialState: {
    alert: {
      open: false,
      severity: "info",
      message: ""
    }
  },
  reducers: {
    openAlert: (state, action) => {
      state.alert = action.payload;
    },
    closeAlert: (state) => {
      state.alert.open = false;
    }
  }
});

export const {openAlert, closeAlert} = alertStateSlice.actions;

export default alertStateSlice.reducer;
