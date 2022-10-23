import {Box, Button, Typography} from "@mui/material";
import ArticleTitle from "../../../../components/ArticleTitle";
import {useEffect, useRef, useState} from "react";
import DemoVideo from "../../../../../assets/videos/welcome.mp4";

export default function EmbeddedContent() {
  const videoEl = useRef(null);
  const [supported, setSupported] = useState(false);

  const togglePIP = () => {
    if (document.pictureInPictureElement) {
      document.exitPictureInPicture().then(() => console.log("PIP退出成功！"));
    } else if (document.pictureInPictureEnabled) {
      videoEl.current.requestPictureInPicture().then((pipWindow) => {
        pipWindow.addEventListener("resize", () => console.log("resizing"), false);
      });
    }
  };

  useEffect(() => {
    setSupported(videoEl.current && document.pictureInPictureEnabled);
  }, [videoEl]);

  return (
    <Box id="EmbeddedContent">
      <ArticleTitle>媒体元素</ArticleTitle>
      <a href="https://seifi.org/javascript/picture-in-picture-javascript-safari.html">
        https://seifi.org/javascript/picture-in-picture-javascript-safari.html
      </a>
      <h2>📌 `Video` element</h2>
      <Typography>
        Here is an example of loading a video, and attaching the relative events to a PiP button.
      </Typography>
      <Typography>
        If the button is grayed out, your browser does not support webkitSetPresentationMode
      </Typography>
      <video ref={videoEl} controls={true} width="100%">
        <source src={DemoVideo} type="video/mp4"/>
      </video>
      <Button onClick={togglePIP} variant="contained" disabled={!supported}>PIP</Button>
    </Box>
  );
}
