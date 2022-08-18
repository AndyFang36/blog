import {Box, Container, Divider, Link as Anchor, Typography} from "@mui/material";
import "../../assets/styles/LifePage.css";

export const LifePage = () => {
  return (
    <Box id="LifePage" pt={2}>
      <Container maxWidth={false} disableGutters>
        <section>
          <Box id="Welcome">
            <Typography fontWeight="bold" sx={{fontSize:{"xs":"1.5rem","sm":"1.5rem", "md":"2rem", "lg":"3rem", "xl":"4rem"}}}>Leap of Faith</Typography>
            <Typography sx={{fontSize:{"xs":"1rem","sm":"1.5rem", "md":"2rem", "lg":"3rem", "xl":"3.5rem"}}}>Trusting God is a lifelong journey. Don't travel alone.</Typography>
            <Anchor href="#All" color="inherit" underline="none"><Typography sx={{fontSize:{"xs":"1.5rem","sm":"1.5rem", "md":"2rem", "lg":"3rem", "xl":"4rem"}}} fontWeight="bolder">↓</Typography></Anchor>
          </Box>
        </section>
        <Typography id="All" variant="h3" align="center">All My Stories</Typography>
        <Divider/>
        <section>
          <Box height={600}>xxxxxxxxxxxx</Box>
        </section>
        <section></section>
        <section></section>
        <section></section>

      </Container>
    </Box>
  );
};
