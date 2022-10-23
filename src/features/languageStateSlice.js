import {createSlice} from "@reduxjs/toolkit";

const languageList = {
  english: ["en", "en-US", "en-GB", "en-GB-oxendict", "en-CA", "en-AU", "en-NZ", "en-IN", "en-ZA"],
  chinese: ["zh", "zh-CN", "zh-HK", "zh-TW"],
};

function getInitLanguage() {
  console.log("🌐️ Initializing the site language...");
  const prevLanguage = localStorage.getItem("languageMode");
  return ["en", "zh"].includes(prevLanguage) ? prevLanguage : "en";
}

export const languageStateSlice = createSlice({
  name: "language",
  initialState: {
    language: getInitLanguage(),
  },
  reducers: {
    changeLanguageTo: (state, action) => {
      state.language = action.payload;
      localStorage.setItem("languageMode", action.payload);
    },
    syncWithOSLanguage: (state, action) => {
      const navLanguage = action.payload;
      state.language = languageList.english.includes(navLanguage) ?
        "en" : (languageList.chinese.includes(navLanguage) ? "zh" : "en");
      localStorage.setItem("languageMode", "auto");
    },
  },
});

export const {changeLanguageTo, syncWithOSLanguage} = languageStateSlice.actions;

export default languageStateSlice.reducer;
