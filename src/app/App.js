import {useDispatch, useSelector} from "react-redux";
import {Header} from "./containers/Header";
import {Main} from "./containers/Main";
import {Footer} from "./containers/Footer";
import {Alert, Box, Snackbar} from "@mui/material";
import ScrollToTopBtn from "react-scroll-to-top";
import {ArrowUpward} from "@mui/icons-material";
import {closeAlert} from "../features/alertStateSlice";
import "../assets/styles/App.css";

export const App = () => {
  const theme = useSelector(state => state["themeToggle"]["theme"]);
  const alert = useSelector(state => state["alertState"]["alert"]);
  const dispatch = useDispatch();

  return (
    <Box
      id="App"
      sx={{
        color: theme.palette.text.primary,
        backgroundImage: theme.mode === "light" ?
          "linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%)" : "linear-gradient(to top right, #434343 0%, black 100%)",
      }}
    >

      <Header/>
      <Main/>
      <Footer/>
      <ScrollToTopBtn
        smooth
        component={<ArrowUpward fontSize="large" sx={{color: "white"}}/>}
        style={{backgroundColor: theme.palette.primary, width: "3rem", height: "3rem"}}
      />
      <Snackbar open={alert.open} autoHideDuration={5000} onClose={() => dispatch(closeAlert())}>
        <Alert onClose={() => dispatch(closeAlert())} severity={alert.severity} variant="filled" sx={{width: "100%"}}>
          {alert.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};
