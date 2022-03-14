import {Provider} from "react-redux";
import store from "./store";
import {BrowserRouter} from "react-router-dom";
import {Header} from "./containers/Header";
import {Main} from "./containers/Main";
import {Footer} from "./containers/Footer";
import {CssBaseline} from "@mui/material";
import {refreshToTop} from "refresh-to-top";
import ".././assets/css/App.css";

export const App = () => {
    refreshToTop();

    return (
        <Provider store={store}>
            <CssBaseline/>
            <BrowserRouter>
                <Header/>
                <Main/>
                <Footer/>
            </BrowserRouter>
        </Provider>
    );
}