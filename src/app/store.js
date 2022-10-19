import {configureStore} from "@reduxjs/toolkit";
import themeToggleReducer from "../features/theme-toggle/themeStateSlice";
import loginStateReducer from "../features/loginStateSlice";
import alertStateReducer from "../features/alertStateSlice";

export const store = configureStore({
  reducer: {
    themeToggle: themeToggleReducer,
    loginState: loginStateReducer,
    alertState: alertStateReducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware({serializableCheck: false}),
  devTools: process.env.NODE_ENV === `development` // 只在开发模式中启用
});
