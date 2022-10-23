import {
  Facebook as FacebookIcon,
  Instagram as InstagramIcon,
  Pinterest as PinterestIcon,
  Twitter as TwitterIcon,
  WhatsApp as WhatsAppIcon,
} from "@mui/icons-material";
import {
  Autocomplete,
  Box, Button,
  Container,
  Divider,
  Stack,
  TextField, Typography,
  Link as MuiLink,
} from "@mui/material";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import "../../assets/styles/Footer.css";
import myAxios from "../../common/utils/myAxios";

export const Footer = () => {
  const [options, setOptions] = useState([]);
  const [value, setValue] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [ip, setIp] = useState(null);

  useEffect(() => {
    console.log("Footer loaded.");
    myAxios.get("http://ip-api.com/json/?lang=zh-CN").then(response => {setIp(response.data);});
  }, []);

  return (
    <Box pt={2} pb={2} id="Footer" component="footer">
      <Container maxWidth={false} id="FooterContainer">
        <Stack justifyItems="center">
          <Typography variant="h4" align="center">
            <Link to="/blog/">Andyの博客</Link>
          </Typography>
          <Stack direction={{xs: "column", xl: "row"}} columnGap={5} rowGap={1} justifyContent="center" alignItems="center">
            <Link to="/blog/">首页</Link>
            <Link to="/blog/tech">技术分享</Link>
            <Link to="/blog/utilities/">在线工具</Link>
            <Link to="/blog/life">日常生活</Link>
            <Link to="/blog/reading">我的书屋</Link>
            <Link to="/blog/gallery">照片墙</Link>
            <Link to="/blog/about">关于我</Link>
          </Stack>
          <Divider sx={{mb: 1}}/>
          <Box className="social mb-4">
            <Typography variant="h6" align="center">Stay in touch</Typography>
            <Stack direction="row" spacing={2} alignItems="center" justifyContent="center">
              <Box className="instagram"><a href="#1"><InstagramIcon/></a></Box>
              <Box className="facebook"><a href="#2"><FacebookIcon/></a></Box>
              <Box className="tw"><a href="#3"><TwitterIcon/></a></Box>
              <Box className="pin"><a href="#4"><PinterestIcon/></a></Box>
              <Box className="whatsapp"><a href="#5"><WhatsAppIcon/></a></Box>
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
                  <TextField {...params} placeholder="Enter your email here..."/>
                }
              />
              <Button disableElevation variant="contained" size="large" color="success">Subscribe</Button>
            </Stack>
          </Box>
          <Divider sx={{mb: 1}}/>
          <Typography className="copyright" align="center">
            <small>
              Copyright &copy; 2022 <MuiLink href="https://github.com/AndyFang36">Andy Fang</MuiLink>. All Rights Reserved.
            </small>
          </Typography>
          <Typography>
            {ip === null ? "" : `IP: ${ip["query"]}, Location: ${ip["city"]}, ${ip["regionName"]}, ${ip["country"]}`}
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};
