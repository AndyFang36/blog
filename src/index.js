import ReactDOM from "react-dom/client";
import {StrictMode} from "react";
import {Provider} from "react-redux";
import store from "./app/store";
import {BrowserRouter} from "react-router-dom";
import {ScrollToTop} from "./common/ScrollToTop";
import {CssBaseline} from "@mui/material";
import {App} from "./app/App";
// import reportWebVitals from './reportWebVitals';
import "./assets/styles/index.css";

ReactDOM.createRoot(document.getElementById("Root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ScrollToTop>
          <CssBaseline>
            <App/>
          </CssBaseline>
        </ScrollToTop>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);

// reportWebVitals(console.log);
