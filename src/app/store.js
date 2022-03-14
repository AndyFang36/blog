import {configureStore} from "@reduxjs/toolkit";
import themeToggleReducer from "../features/theme-toggle/themeToggleSlice";
import loginStateReducer from "../features/loginStateSlice";

export default configureStore({
    reducer: {
        themeToggle: themeToggleReducer,
        loginState: loginStateReducer,
    },
});