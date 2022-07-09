import {createSlice} from '@reduxjs/toolkit'
import {lightTheme} from "../../assets/themes/lightTheme";
import {darkTheme} from "../../assets/themes/darkTheme";

/** <b>初始化主题</b> */
function initTheme() {
    if (window.matchMedia('(prefers-color-scheme)').media === 'not all') {
        if (window.matchMedia('(prefers-color-scheme: light)').matches) {
            return lightTheme;
        } else {
            return darkTheme;
        }
    } else {
        const prevTheme = localStorage.getItem("theme");
        if (prevTheme !== null && prevTheme !== "") {
            return prevTheme === "light" ? lightTheme : darkTheme;
        } else {
            return lightTheme;
        }
    }
}

const themeMedia = window.matchMedia("(prefers-color-scheme: light)");
let osTheme = themeMedia.matches ? lightTheme : darkTheme;
themeMedia.addEventListener("change", (e) => {
    if (e.matches) {
        // console.log('OS: light');
        osTheme = lightTheme;
    } else {
        // console.log('OS: dark');
        osTheme = darkTheme;
    }
});

export const themeStateSlice = createSlice({
    name: "theme",
    initialState: {
        theme: initTheme(),
    },
    reducers: {
        changeToLightTheme: (state) => {
            state.theme = lightTheme;
            localStorage.setItem("theme", "light");
        },
        changeToDarkTheme: (state) => {
            state.theme = darkTheme;
            localStorage.setItem("theme", "dark");
        },
        syncWithOSTheme: (state) => {
            state.theme = osTheme;
            localStorage.setItem("theme", osTheme.palette.mode);
        }
    },
});

export const {changeToLightTheme, changeToDarkTheme, syncWithOSTheme} = themeStateSlice.actions;

export default themeStateSlice.reducer;
