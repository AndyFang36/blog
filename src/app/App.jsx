import {useSelector} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import {Header} from "./containers/Header";
import {Main} from "./containers/Main";
import {Footer} from "./containers/Footer";
import {Box, CssBaseline} from "@mui/material";
import {refreshToTop} from "refresh-to-top";
import ScrollToTop from "react-scroll-to-top";
import {ArrowUpward} from "@mui/icons-material";
import "../assets/styles/App.css";

export const App = () => {
  const theme = useSelector(state => state["themeToggle"]["theme"]);

  refreshToTop();

  return (
    <Box id="App" sx={{color: theme.palette.text.primary, backgroundColor: theme.palette.background.default}}>
      <CssBaseline/>
      <BrowserRouter>
        <Header/>
        <Main/>
        <Footer/>
      </BrowserRouter>
      <ScrollToTop
        smooth
        component={<ArrowUpward fontSize="large" sx={{color: "white"}}/>}
        style={{backgroundColor: "orange", width: "3rem", height: "3rem"}}
      />
    </Box>
  );
};
