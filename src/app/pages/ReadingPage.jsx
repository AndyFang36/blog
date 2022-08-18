import {Box, Card, CardActions, CardContent, Container, Typography} from "@mui/material";
import ReadingImg from "../../assets/images/bg/reading.png"
import  "../../assets/styles/ReadingPage.css"

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
        This is reading page.
        <Card>
          <CardActions>All Posts Motivation Success Self Improvement</CardActions>
          <CardContent>
            <Typography height={1000}>xxxx</Typography>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};
