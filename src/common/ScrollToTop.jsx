import {useLocation} from "react-router-dom";
import {useEffect} from "react";

export const ScrollToTop = (props) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: "smooth"});
  }, [location]);

  return <>{props.children}</>;
};
