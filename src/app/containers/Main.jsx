import {Box} from "@mui/material";
import {Route, Routes} from "react-router-dom";
import {AboutPage} from "../pages/AboutPage";
import {GalleryPage} from "../pages/GalleryPage";
import {HomePage} from "../pages/HomePage";
import {LifePage} from "../pages/LifePage";
import {ReadingPage} from "../pages/ReadingPage";
import {TechnologyPage} from "../pages/TechnologyPage";
import {UtilityPage} from "../pages/utils/UtilityPage";

export const Main = () => {
  return (
    <Box component="main" id="MainContainer">
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/tech/*" element={<TechnologyPage/>}/>
        <Route path="/life" element={<LifePage/>}/>
        <Route path="/utility/*" element={<UtilityPage/>}/>
        <Route path="/reading" element={<ReadingPage/>}/>
        <Route path="/gallery" element={<GalleryPage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
      </Routes>
    </Box>
  );
};
