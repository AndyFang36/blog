import {Box, Card, CardActions, CardContent, Container, Typography} from "@mui/material";
import ReadingImg from "../../assets/images/bg/reading.png"
import  "../../assets/styles/ReadingPage.css"
import {MuiPaper} from "../../common/components/MuiPaper";

export const ReadingPage = () => {
  return (
    <Box id="ReadingPage">
      <Container id="BackgroundImg" maxWidth={false} disableGutters>
        <img src={ReadingImg} alt="reading" width="100%"/>
        <Box className="text">
          <Typography sx={{fontSize:{"xs":"1.5rem","sm":"1.5rem", "md":"2rem", "lg":"3rem", "xl":"8rem"}}}>Boost Your <br/> Success</Typography>
          <Typography variant="h4">Tips and tools for <br/> a productive mindset</Typography>
        </Box>
      </Container>
      <Container maxWidth="xl" sx={{mt:6}}>
        <Typography>This is reading page.</Typography>
        <MuiPaper sx={{height:1000}}>
          <Typography>Hello, Let's read!</Typography>
        </MuiPaper>
      </Container>
    </Box>
  );
};
