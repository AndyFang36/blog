import {lazy} from "react";

const
  HomePage = lazy(() => import("./HomePage")),
  TechnologyPage = lazy(() => import("./tech/TechnologyPage")),
  LifePage = lazy(() => import("./life/LifePage")),
  GalleryPage = lazy(() => import("./GalleryPage")),
  AboutPage = lazy(() => import("./AboutPage"));

export {HomePage, TechnologyPage, LifePage, GalleryPage, AboutPage};
