import {useEffect, useRef} from "react";
import {Box} from "@mui/material";
import "./Clock.css";

export const Clock = () => {
  const hourEl = useRef(), minuteEl = useRef(), secondEl = useRef();

  // initialize the clock in a self-invoking function
  useEffect(() => {
    // use requestAnimationFrame for smoothness (shimmed with setTimeout fallback)
    const requestAnimFrame = (() => (
      window.requestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      function (callback) {
        window.setTimeout(callback, 1000 / 60);
      }
    ))();
    // position the hands
    const paint = () => {
      let now = new Date(),
        then = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0), //midnight
        diffInMil = now.getTime() - then.getTime(), // difference in milliseconds
        h = diffInMil / 1000 / 60 / 60,  //hours
        m = h * 60,  // minutes
        s = m * 60;  // seconds
      // rotate the hands accordingly
      hourEl.current["style"].webkitTransform = "rotate(" + h * 30 + "deg)";
      minuteEl.current["style"].webkitTransform = "rotate(" + m * 6 + "deg)";
      secondEl.current["style"].webkitTransform = "rotate(" + s * 6 + "deg)";
    };
    // set up a loop
    (function loop() {
      requestAnimFrame(loop);
      paint();
    })();
  }, []);

  return (
    <Box id="Clock">
      <div className="hour">
        <div className="min"></div>
        <div className="min"></div>
        <div className="min"></div>
        <div className="min"></div>
        <div className="min"></div>
      </div>
      <div className="hour">
        <div className="min"></div>
        <div className="min"></div>
        <div className="min"></div>
        <div className="min"></div>
        <div className="min"></div>
      </div>
      <div id="alarm"></div>
      <div id="min" ref={minuteEl}></div>
      <div id="hour" ref={hourEl}></div>
      <div id="sec" ref={secondEl}></div>
      <ol>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ol>
    </Box>
  );
};
