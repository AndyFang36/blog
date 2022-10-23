import {Box, Stack, Typography} from "@mui/material";
import {useEffect, useState} from "react";

export default function TechIntroPage() {
  const [emoji, setEmoji] = useState("\u{01F354}");

  useEffect(() => {
    const setRandomEmoji = () => {
      const emojiArr = [
        parseInt(Math.random() * (2342323 - 232323 + 1) + 232323), // Smileys & Emotion
        parseInt(Math.random() * (2342323 - 232323 + 1) + 232323), // ssss
        parseInt(Math.random() * (2342323 - 232323 + 1) + 232323), // ssss
        parseInt(Math.random() * (2342323 - 232323 + 1) + 232323), // ssss
        parseInt(Math.random() * (2342323 - 232323 + 1) + 232323), // ssss
      ];
      // let result = "";
      // for (let i = 0; i < 5; i++) result += Math.floor(Math.random() * 16).toString(16);
      setEmoji(String.fromCodePoint(parseInt(Math.random() * (128580 - 128512 + 1) + 128512)));
    };
    setRandomEmoji();
    const interval = setInterval(setRandomEmoji, 666);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box id="TechIntroPage">
      <Typography variant="h2">Welcome! Happy hacking!</Typography>
      <Stack alignItems="center">
        <span style={{fontSize: "50vh"}}>{emoji}</span>
      </Stack>
    </Box>
  );
}
