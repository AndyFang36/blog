import {Box} from "@mui/material";
import {Suspense} from "react";
import {Route, Routes} from "react-router-dom";
import {GalleryPage} from "../pages/GalleryPage";
import {HomePage, AboutPage} from "../pages";
import {LifePage} from "../pages/life/LifePage";
import {ReadingPage} from "../pages/ReadingPage";
import {TechnologyPage} from "../pages/tech/TechnologyPage";
import {UtilityPage} from "../pages/utils/UtilityPage";
import {LoadingPage} from "../pages/LoadingPage";

export const Main = () => {
  return (
    <Box component="main" id="MainContainer">
      <Suspense fallback={<LoadingPage/>}>
        <Routes>
          <Route index element={<HomePage/>}/>
          <Route path="tech/*" element={<TechnologyPage/>}/>
          <Route path="life" element={<LifePage/>}/>
          <Route path="utility/*" element={<UtilityPage/>}/>
          <Route path="reading" element={<ReadingPage/>}/>
          <Route path="gallery" element={<GalleryPage/>}/>
          <Route path="about" element={<AboutPage/>}/>
        </Routes>
      </Suspense>
    </Box>
  );
};
