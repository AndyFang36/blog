import {lazy} from "react";

const
  CallbackHook = lazy(() => import("../hooks/CallbackHook")),
  MemoHook = lazy(() => import("./MemoHook"));

export {CallbackHook, MemoHook};
