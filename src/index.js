import ReactDOM from "react-dom/client";
import {StrictMode} from "react";
import {Provider} from "react-redux";
import {store} from "./app/store";
import {BrowserRouter} from "react-router-dom";
import {RouteToTop} from "./common/components/RouteToTop";
import App from "./app/App";
import AOS from "aos";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";
import "./assets/styles/index.css";
import "aos/dist/aos.css";
import "./assets/styles/tuesday.css";

if (typeof window["__REACT_DEVTOOLS_GLOBAL_HOOK__"] === "object") {
  window["__REACT_DEVTOOLS_GLOBAL_HOOK__"].inject = function () {};
}

AOS.init({
  /* Global settings: */
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
  initClassName: "aos-init", // class applied after initialization
  animatedClassName: "aos-animate", // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  /* Settings that can be overridden on per-element basis, by `data-aos-*` attributes: */
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});

ReactDOM.createRoot(document.getElementById("Root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <RouteToTop>
          <App/>
        </RouteToTop>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);

window.addEventListener("load", ()=>console.log("window load"))
window.addEventListener("beforeunload", ()=>console.log("window beforeunload"))
window.addEventListener("unload", ()=>console.log("window unload"))
document.addEventListener("loadstart", ()=>console.log("doc load start."))
document.addEventListener("DOMContentLoaded", ()=>console.log("DOM content loaded."))

serviceWorkerRegistration.register();

reportWebVitals(console.log);
