import React, {StrictMode} from "react";
import ReactDOM from "react-dom/client";
import {App} from "./app/App";
import store from "./app/store";
import {Provider} from "react-redux";
import "./assets/styles/index.css";
// import reportWebVitals from './reportWebVitals';

const rootDOM = ReactDOM.createRoot(document.getElementById("Root"));
rootDOM.render(<StrictMode><Provider store={store}><App/></Provider></StrictMode>);

// reportWebVitals(console.log);
