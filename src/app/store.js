import {configureStore} from "@reduxjs/toolkit";
import themeToggleReducer from "../features/theme-toggle/themeStateSlice";
import loginStateReducer from "../features/loginStateSlice";
import alertStateReducer from "../features/alertStateSlice";

export default configureStore({
    reducer: {
        themeToggle: themeToggleReducer,
        loginState: loginStateReducer,
        alertState: alertStateReducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware({serializableCheck: false}),
});
