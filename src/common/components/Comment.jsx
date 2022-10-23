import {Box} from "@mui/material";
import {SimpleMdeReact as MarkdownEditor} from "react-simplemde-editor";

export const Comment = () => {
  return(
    <Box id="Comment">
        <MarkdownEditor/>
    </Box>
  );
}