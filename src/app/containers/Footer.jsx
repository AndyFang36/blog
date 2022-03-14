import {Box, Container, Divider, Stack, Typography} from "@mui/material";

export const Footer = () => {
    return (
        <Box component="footer">
            <Container>
                <div>
                    <Typography variant="body1">
                        <a href="#">Andyの博客</a>
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
                    <div className="social mb-4">
                        <h3>Stay in touch</h3>
                        <Stack direction="row" spacing={2} alignItems="center">
                            <Box className="in"><a href="#"><span className="icon-instagram"></span></a></Box>
                            <Box className="fb"><a href="#"><span className="icon-facebook"></span></a></Box>
                            <Box className="tw"><a href="#"><span className="icon-twitter"></span></a></Box>
                            <Box className="pin"><a href="#"><span className="icon-pinterest"></span></a></Box>
                            <Box className="dr"><a href="#"><span className="icon-dribbble"></span></a></Box>
                        </Stack>
                    </div>
                    <Typography className="copyright">
                        <small>Copyright &copy; 2022 Andy Fang. All Rights Reserved.</small>
                    </Typography>
                </div>
            </Container>
        </Box>
    );
}