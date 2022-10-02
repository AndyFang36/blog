import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem, Stack,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import {useEffect, useState} from "react";
import {Menu as MenuIcon} from "@mui/icons-material";
import {useSelector} from "react-redux";
import {NavLink} from "react-router-dom";
import Logo from "../../assets/images/logo.svg";
import MyAvatar from "../../assets/images/avatars/avatar-1.png";
import "../../assets/styles/Header.css";
import {ThemeToggle} from "../../features/theme-toggle/ThemeToggle";

const pages = [
  {name: "首页", path: "/"},
  {name: "技术分享", path: "/tech"},
  {name: "在线工具", path: "/utility"},
  {name: "生活日常", path: "/life"},
  {name: "我的书屋", path: "/reading"},
  {name: "照片墙", path: "/gallery"},
  {name: "关于我", path: "/about"},
];
const settings = ["个人资料", "我的账户", "后台管理", "退出登录"];

export const Header = () => {
  const theme = useSelector(state => state["themeToggle"]["theme"]);
  const [scrolled, setScrolled] = useState(false);

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
      scrollTop > 0 ? setScrolled(true) : setScrolled(false);
    });
  });

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      id="Header"
      position="sticky"
      elevation={scrolled ? 3 : 0}
      sx={{
        color: theme.palette.text.primary,
        backgroundColor: "rgba(255,172,73,0.6)",
        backdropFilter: scrolled ? "blur(3px)" : "none"
      }}
    >
      <Container maxWidth={false} id="HeaderContainer">
        <Toolbar disableGutters>
          <Typography
            className="site-name"
            variant="h4"
            noWrap
            component="h4"
            sx={{mr: 2, display: {xs: "none", md: "flex"}}}
          >
            <img src={Logo} alt="Logo" style={{verticalAlign: "text-bottom"}}/>ndyの博客
          </Typography>
          <Box sx={{flexGrow: 1, display: {xs: "flex", md: "none"}}}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon/>
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{vertical: "bottom", horizontal: "left"}}
              keepMounted
              transformOrigin={{vertical: "top", horizontal: "left"}}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{display: {xs: "block", md: "none"}}}
            >
              {pages.map((page, index) => (
                <MenuItem key={"pageLink" + index} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* desktop */}
          <Typography variant="h6" noWrap component="h6" sx={{flexGrow: 1, display: {xs: "flex", md: "none"}}}>
            <Box component="img" src={Logo} alt="Logo"/>Andyの博客
          </Typography>
          <Stack direction="row" spacing={2} component="nav" sx={{flexGrow: 1, display: {xs: "none", md: "flex"}}}>
            {pages.map((page, index) => (
              <NavLink to={page.path} key={"navLink-" + index}>
                <Button onClick={handleCloseNavMenu} sx={{height: "100%", color: theme.palette.text.primary}}>
                  {page.name}
                </Button>
              </NavLink>
            ))}
          </Stack>
          <Box sx={{flexGrow: 0}}>
            <ThemeToggle/>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>
                <Avatar alt="Andy Fang" src={MyAvatar}/>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{mt: "45px"}}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{vertical: "top", horizontal: "right"}}
              keepMounted
              transformOrigin={{vertical: "top", horizontal: "right"}}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
