import React from "react";
import ReactDOM from "react-dom/client";
import {App} from "./app/App";
import store from "./app/store";
import {Provider} from "react-redux";
import "./assets/styles/index.css";
// import reportWebVitals from './reportWebVitals';

ReactDOM.createRoot(document.getElementById("Root")).render(<Provider store={store}><App/></Provider>);

// reportWebVitals(console.log);
