import {ReactElement} from "react";
import {Box, Button, Stack} from "@mui/material";
import {NavLink, Route, Routes} from "react-router-dom";
import LowercaseUppercaseConverter from "./LowercaseUppercaseConverter";

function TextUtilIntro(): ReactElement {
  return (
    <Box id="TextUtilIntro">
      Welcome to use text util.👇
    </Box>
  );
}

export default function TextUtil(): ReactElement {
  return(
    <Box id="TextUtil">
      <Stack direction="row" justifyContent="center" alignItems="center" columnGap={2}>
        <NavLink to="/blog/utilities/text">
          <Button variant="contained">介绍</Button>
        </NavLink>
        <NavLink to="/blog/utilities/text/lowercase-uppercase">
          <Button variant="contained">字母大小写转换</Button>
        </NavLink>
        <Button variant="contained">xxx</Button>
        <Button variant="contained">xxx</Button>
        <Button variant="contained">xxx</Button>
        <Button variant="contained">xxx</Button>
      </Stack>
      <Box>
        <Routes>
          <Route index element={<TextUtilIntro/>}/>
          <Route path="lowercase-uppercase" element={<LowercaseUppercaseConverter/>}/>
        </Routes>
      </Box>
    </Box>
  )
}
