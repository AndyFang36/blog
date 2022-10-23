import {Box} from "@mui/material";
import {Suspense, useEffect} from "react";
import {Outlet, Route, Routes} from "react-router-dom";
import {HomePage, TechnologyPage, LifePage, GalleryPage, AboutPage} from "../pages";
import {ReadingPage} from "../pages/reading/ReadingPage";
import {UtilityPage} from "../pages/utils/UtilityPage";
import {LoadingPage} from "../pages/LoadingPage";
import ErrorPage from "../errors/ErrorPage";

export const Main = () => {
  useEffect(() => {
    console.log(`load main`);
  }, []);

  return (
    <Box id="Main" component="main">
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
            <Route path="*" element={<ErrorPage type="NOT_FOUND"/>}/>
          </Route>
        </Routes>
      </Suspense>
    </Box>
  );
};
