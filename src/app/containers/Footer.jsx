import {
  Facebook as FacebookIcon,
  Instagram as InstagramIcon,
  Pinterest as PinterestIcon,
  Twitter as TwitterIcon,
  WhatsApp as WhatsAppIcon,
} from "@mui/icons-material";
import {Box, Container, Divider, Stack, Typography} from "@mui/material";
import {Link} from "react-router-dom";

export const Footer = () => {
  return (
    <Box component="footer" id="Footer">
      <Container maxWidth={false} id="FooterContainer">
        <Stack justifyItems="center">
          <Typography variant="body1">
            <Link to="/">Andyの博客</Link>
          </Typography>
          <Stack direction="row" spacing={2} alignItems="center">
            <Box>首页</Box>
            <Divider sx={{height: "1em", border: "thin solid black"}}/>
            <Box>技术分享</Box>
            <Divider sx={{height: "1em", border: "thin solid black"}}/>
            <Box>About</Box>
            <Divider sx={{height: "1em", border: "thin solid black"}}/>
            <Box>About</Box>
            <Divider sx={{height: "1em", border: "thin solid black"}}/>
            <Box>About</Box>
            <Divider sx={{height: "1em", border: "thin solid black"}}/>
            <Box>About</Box>
          </Stack>
          <Divider/>
          <div className="social mb-4">
            <h3>Stay in touch</h3>
            <Stack direction="row" spacing={2} alignItems="center">
              <Box className="in"><a href="#"><InstagramIcon/></a></Box>
              <Box className="fb"><a href="#"><FacebookIcon/></a></Box>
              <Box className="tw"><a href="#"><TwitterIcon/></a></Box>
              <Box className="pin"><a href="#"><PinterestIcon/></a></Box>
              <Box className="dr"><a href="#"><WhatsAppIcon/></a></Box>
            </Stack>
          </div>
          <Divider/>
          <Typography className="copyright">
            <small>Copyright &copy; 2022 Andy Fang. All Rights Reserved.</small>
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};
