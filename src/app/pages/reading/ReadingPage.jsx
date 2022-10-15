import {Box, Container, Typography} from "@mui/material";
import ReadingImg from "../../../assets/images/bg/reading.png";
import "../../../assets/styles/ReadingPage.css";
import {MuiPaper} from "../../../common/components/MuiPaper";
import PrideAndPrejudice from "../../../assets/books/Pride and Prejudice.pdf";

export const ReadingPage = () => {
  document.title = "我的书屋 - Andyの博客";

  return (
    <Box id="ReadingPage">
      <Container id="BackgroundImg" maxWidth={false} disableGutters>
        <img src={ReadingImg} alt="reading" width="100%"/>
        <Box className="text">
          <Typography sx={{fontSize: {"xs": "1.5rem", "sm": "1.5rem", "md": "2rem", "lg": "3rem", "xl": "8rem"}}}>Boost Your <br/> Success</Typography>
          <Typography variant="h4">Tips and tools for <br/> a productive mindset</Typography>
        </Box>
      </Container>
      <Container maxWidth="xl" sx={{mt: 6}}>
        <Typography>This is reading page.</Typography>
        <MuiPaper>
          <Typography>Hello, Let's read!</Typography>
          <object data={PrideAndPrejudice} width="100%" height={1000} title="pdf"></object>
        </MuiPaper>
      </Container>
    </Box>
  );
};
