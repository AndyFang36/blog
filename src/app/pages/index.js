import {lazy} from "react";

const
  HomePage = lazy(()=>import("./HomePage")),
  AboutPage = lazy(()=>import("./AboutPage"))

export {HomePage, AboutPage}
