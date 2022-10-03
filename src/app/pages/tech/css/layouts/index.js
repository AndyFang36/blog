import {lazy} from "react";

const
  FlexboxLayout = lazy(() => import("./FlexboxLayout")),
  GridLayout = lazy(() => import("./GridLayout")),
  TableLayout = lazy(() => import("./TableLayout"));

export {FlexboxLayout, GridLayout, TableLayout};
