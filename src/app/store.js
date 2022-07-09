import {configureStore} from "@reduxjs/toolkit";
import themeToggleReducer from "../features/theme-toggle/themeStateSlice";
import loginStateReducer from "../features/loginStateSlice";

export default configureStore({
    reducer: {
        themeToggle: themeToggleReducer,
        loginState: loginStateReducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware({serializableCheck: false}),
});
