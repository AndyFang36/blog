import {Box} from "@mui/material";
import {Suspense} from "react";
import {Outlet, Route, Routes} from "react-router-dom";
import {HomePage, TechnologyPage, LifePage, GalleryPage, AboutPage} from "../pages";
import {ReadingPage} from "../pages/reading/ReadingPage";
import {UtilityPage} from "../pages/utils/UtilityPage";
import {LoadingPage} from "../pages/LoadingPage";

export const Main = () => {
  return (
    <Box component="main" id="MainContainer">
      <Suspense fallback={<LoadingPage/>}>
        <Routes>
          <Route path="/blog/*" element={<Outlet/>}>
            <Route index element={<HomePage/>}/>
            <Route path="tech/*" element={<TechnologyPage/>}/>
            <Route path="life" element={<LifePage/>}/>
            <Route path="utilities/*" element={<UtilityPage/>}/>
            <Route path="reading" element={<ReadingPage/>}/>
            <Route path="gallery" element={<GalleryPage/>}/>
            <Route path="about" element={<AboutPage/>}/>
          </Route>
        </Routes>
      </Suspense>
    </Box>
  );
};
