import {useEffect, FC} from "react";
import {useLocation} from "react-router-dom";

export default function Redirection({from, to, children}): FC<{ from: Array, to: String }> {
  const {pathname} = useLocation();

  useEffect(() => {
    if (from.includes(pathname)) window.location.assign(to);
  }, [from, to, pathname]);

  return children;
}
