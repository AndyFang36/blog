import {createSlice} from "@reduxjs/toolkit";

/** <h2>初始化主题</h2>
 * @description 返回主题模式
 * @return {string} 返回 “light” 或 "dark"
 */
function getInitThemeMode(): "light" | "dark" {
  console.log("🎨 Initializing the site theme...");
  const prevTheme = localStorage.getItem("themeMode");
  return ["light", "dark"].includes(prevTheme) ? prevTheme : (
    prevTheme === "auto" ?
      (window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark") : "light"
  );
}

export const themeStateSlice = createSlice({
  name: "theme",
  initialState: {
    theme: getInitThemeMode(),
  },
  reducers: {
    changeToLightTheme: (state) => {
      state.theme = "light";
      localStorage.setItem("themeMode", "light");
      console.log("🌞 theme mode: light");
    },
    changeToDarkTheme: (state) => {
      state.theme = "dark";
      localStorage.setItem("themeMode", "dark");
      console.log("🌛 theme mode: dark");
    },
    syncWithOSTheme: (state, action) => {
      state.theme = action.payload;
      localStorage.setItem("themeMode", "auto");
      console.log("🖥️ theme mode: auto");
    }
  },
});

export const {changeToLightTheme, changeToDarkTheme, syncWithOSTheme} = themeStateSlice.actions;

export default themeStateSlice.reducer;
