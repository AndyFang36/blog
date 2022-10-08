import {lazy} from "react";

const
  EffectHook = lazy(()=>import("./EffectHook")),
  CallbackHook = lazy(() => import("./CallbackHook")),
  MemoHook = lazy(() => import("./MemoHook"));

export {EffectHook, CallbackHook, MemoHook};
