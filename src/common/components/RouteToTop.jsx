import {useLocation} from "react-router-dom";
import {useEffect} from "react";

export const RouteToTop = ({children}) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: "smooth"});
  }, [location]);

  return children;
};
