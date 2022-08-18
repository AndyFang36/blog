import {
  Facebook as FacebookIcon,
  Instagram as InstagramIcon,
  Pinterest as PinterestIcon, Twitter as TwitterIcon,
  WhatsApp as WhatsAppIcon,
} from "@mui/icons-material";
import {Autocomplete, Box, Button, Container, Divider, Stack, TextField, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import "../../assets/styles/Footer.css";
import {useState} from "react";

export const Footer = () => {
  const theme = useSelector(state => state["themeToggle"]["theme"]);
  const [options, setOptions] = useState([]);
  const [value, setValue] = useState("");
  const [inputValue, setInputValue] = useState("");

  return (
    <Box pt={2} pb={2} id="Footer" component="footer">
      <Container maxWidth={false} id="FooterContainer">
        <Stack justifyItems="center">
          <Typography variant="h4" align="center">
            <Link to="/">A<span className="andy">ndy</span>の博客</Link>
          </Typography>
          <Stack className="links" direction="row" spacing={2} alignItems="center" justifyContent="center">
            <Typography>首页</Typography>
            <Divider sx={{borderColor: theme.palette.text.disabled}}/>
            <Typography>技术分享</Typography>
            <Divider sx={{borderColor: theme.palette.text.disabled}}/>
            <Typography>About</Typography>
            <Divider sx={{borderColor: theme.palette.text.disabled}}/>
            <Typography>About</Typography>
            <Divider sx={{borderColor: theme.palette.text.disabled}}/>
            <Typography>About</Typography>
            <Divider sx={{borderColor: theme.palette.text.disabled}}/>
            <Typography>隐私协议</Typography>
          </Stack>
          <Divider sx={{mb: 1}}/>
          <Box className="social mb-4">
            <Typography variant="h6" align="center">Stay in touch</Typography>
            <Stack direction="row" spacing={2} alignItems="center" justifyContent="center">
              <Box className="in"><a href="#"><InstagramIcon/></a></Box>
              <Box className="fb"><a href="#"><FacebookIcon/></a></Box>
              <Box className="tw"><a href="#"><TwitterIcon/></a></Box>
              <Box className="pin"><a href="#"><PinterestIcon/></a></Box>
              <Box className="dr"><a href="#"><WhatsAppIcon/></a></Box>
            </Stack>
            <Stack direction="row" justifyContent="center" spacing={2} alignItems="center">
              <Autocomplete
                sx={{width: 300}}
                size="small"
                freeSolo
                options={options}
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                  setOptions([]);
                }}
                inputValue={inputValue}
                onInputChange={(event, newInputValue) => {
                  if (newInputValue.trim() === "") {
                    setOptions([]);
                  } else {
                    setOptions([
                      newInputValue + "@icloud.com",
                      newInputValue + "@gmail.com",
                      newInputValue + "@outlook.com",
                      newInputValue + "@sina.com",
                      newInputValue + "@yahoo.com",
                      newInputValue + "@qq.com",
                      newInputValue + "@163.com",
                    ]);
                  }
                  setInputValue(newInputValue);
                }}
                clearOnEscape
                clearOnBlur
                open={inputValue !== ""}
                renderInput={(params) =>
                  <TextField {...params} placeholder="Enter your email here"/>
                }
              />
              <Button disableElevation variant="contained" size="large" color="success">Subscribe</Button>
            </Stack>
          </Box>
          <Divider sx={{mb: 1}}/>
          <Typography className="copyright" align="center">
            <small>Copyright &copy; 2022 Andy Fang. All Rights Reserved.</small>
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};
