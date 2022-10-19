import {useDispatch, useSelector} from "react-redux";
import {Header, Main, Footer} from "./containers";
import {Alert, Box, Snackbar} from "@mui/material";
import ScrollToTop from "react-scroll-to-top";
import {ArrowUpward} from "@mui/icons-material";
import {closeAlert} from "../features/alertStateSlice";
import "../assets/styles/App.css";
import {useEffect} from "react";
import {useLocation} from "react-router-dom";
import PullToRefresh from "pulltorefreshjs";
import {showDevicePixelRatio, showWidthAndHeight} from "../common/utils/infoUtil";

export const App = () => {
  const location = useLocation();
  const theme = useSelector(state => state["themeToggle"]["theme"]);
  const {open, severity, message} = useSelector(state => state["alertState"]["alert"]);
  const dispatch = useDispatch();

  useEffect(() => {
    const controller = new AbortController();
    // let imagesToLoad = document.querySelectorAll("img[data-src]");
    // imagesToLoad.forEach(img => {
    //   img.setAttribute("src", img.getAttribute("data-src"));
    //   img.addEventListener("load", () => {
    //     img.removeAttribute("data-src");
    //   }, {signal: controller.signal});
    // });
    // return () => controller.abort();
    // 媒体查询
    showDevicePixelRatio();
    window.addEventListener("resize", e => {
        showWidthAndHeight();
        window.matchMedia(`(width: 320px)`).matches ?
          console.log(`🟢(width: 320px) matched!`) :
          console.log(`🔵width: ${window.innerWidth}px`);
        window.matchMedia(`(height: 568px)`).matches ?
          console.log(`🟢(height: 568px) matched!`) :
          console.log(`🔵height: ${window.innerHeight}px`);
      },
      {signal: controller.signal}
    );
    // 下拉刷新
    PullToRefresh.init({
      mainElement: "body",
      onRefresh() {window.location.reload();}
    });
    return () => {
      PullToRefresh.destroyAll();
      controller.abort();
    };
  }, [location]);

  return (
    <Box
      id="App"
      sx={{
        position: "relative",
        color: theme.palette.text.primary,
        backgroundImage: theme.mode === "light" ?
          "linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%)" : "linear-gradient(to top right, #434343 0%, black 100%)",
      }}
    >
      <Header/>
      <Main/>
      <Footer/>
      <ScrollToTop
        smooth
        component={<ArrowUpward fontSize="large" sx={{color: "white"}}/>}
        style={{
          width: `3rem`,
          height: `3rem`,
          display:"flex",
          justifyContent:`center`,
          alignItems: `center`,
          backgroundColor: theme.palette.primary,
        }}
      />
      <Snackbar id="MuiAlert" open={open} autoHideDuration={5000} onClose={() => dispatch(closeAlert())}>
        <Alert onClose={() => dispatch(closeAlert())} severity={severity} variant="filled" sx={{width: "100%"}}>
          {message}
        </Alert>
      </Snackbar>
    </Box>
  );
};
