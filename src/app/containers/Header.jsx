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
import {Link, NavLink} from "react-router-dom";
import Logo from "../../assets/images/logo.svg";
import MyAvatar from "../../assets/images/avatars/avatar-1.png";
import "../../assets/styles/Header.css";
import {ThemeToggle} from "../../features/theme-toggle/ThemeToggle";

const pages = [
  {name: "首页", path: "/"},
  {name: "技术分享", path: "/tech"},
  {name: "在线工具", path: "/utilities"},
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
    const c = new AbortController();
    window.addEventListener("scroll", () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset;
      scrollTop > 0 ? setScrolled(true) : setScrolled(false);
    }, {signal: c.signal});
    return () => c.abort();
  }, []);

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
      elevation={scrolled ? 3 : 0}
      position={scrolled ? "fixed" : "absolute"}
      style={{
        top: 0,
        backgroundColor: scrolled ? "rgba(255,255,255, 0.25)" : "transparent",
        backdropFilter: scrolled ? "blur(3px)" : "none",
        transition: "background-color 0.25s, box-shadow 0.25s, backdrop-filter 0.25s",
      }}
    >
      <Container maxWidth={false}>
        <Toolbar disableGutters>
          {/* desktop */}
          <Link to="/" style={{color: "inherit"}}>
            <Typography
              className="site-name"
              variant="h4"
              noWrap
              sx={{mr: 2, display: {xs: "none", md: "flex"}}}
              alignItems="baseline"
            >
              <img src={Logo} alt="Logo" style={{verticalAlign: "text-bottom", height: "1em"}}/>ndyの博客
            </Typography>
          </Link>
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
          {/* mobile */}
          <Link to="/" style={{color: "inherit"}}>
            <Typography
              className="site-name"
              variant="h6"
              noWrap
              sx={{flexGrow: 1, display: {xs: "flex", md: "none"}}}
              alignItems="baseline"
            >
              <img src={Logo} alt="Logo" style={{verticalAlign: "text-bottom", height: "1em"}}/>ndyの博客
            </Typography>
          </Link>
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
