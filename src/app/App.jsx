import {useSelector} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import {Header} from "./containers/Header";
import {Main} from "./containers/Main";
import {Footer} from "./containers/Footer";
import {Box, CssBaseline} from "@mui/material";
import {ScrollToTop} from "../common/ScrollToTop";
import ScrollToTopBtn  from "react-scroll-to-top";
import {ArrowUpward} from "@mui/icons-material";
import "../assets/styles/App.css";

export const App = () => {
  const theme = useSelector(state => state["themeToggle"]["theme"]);

  return (
    <Box
      id="App"
      sx={{
        color: theme.palette.text.primary,
        backgroundImage: theme.mode === "light" ?
          "linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%)" : "linear-gradient(to top right, #434343 0%, black 100%)",
      }}
    >
      <CssBaseline/>
      <BrowserRouter>
        <ScrollToTop>
          <Header/>
          <Main/>
          <Footer/>
        </ScrollToTop>
      </BrowserRouter>
      <ScrollToTopBtn
        smooth
        component={<ArrowUpward fontSize="large" sx={{color: "white"}}/>}
        style={{backgroundColor: theme.palette.primary, width: "3rem", height: "3rem"}}
      />
    </Box>
  );
};
