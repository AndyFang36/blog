import {IconButton, ListItemIcon, ListItemText, Menu, MenuItem, Tooltip, IconButtonProps} from "@mui/material";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Brightness4, Brightness7, DesktopMac} from "@mui/icons-material";
import {changeToDarkTheme, changeToLightTheme, syncWithOSTheme} from "./themeStateSlice";

// const MuiMenuItem = styled(props => <MenuItem {...props}/>)(({theme}) => ({
//   // backgroundColor: theme.palette.background.default,
//   // "&.Mui-selected": {backgroundColor: theme.palette.background.paper},
//   // "&.Mui-selected:hover": {backgroundColor: theme.palette.background.paper},
//   // "&:hover": {backgroundColor: theme.palette.background.paper}
// }));

const options = [
  {name: "亮色主题", icon: <Brightness7/>},
  {name: "暗色主题", icon: <Brightness4/>},
  {name: "跟随系统", icon: <DesktopMac/>},
];

interface ThemeToggleProp extends IconButtonProps {
  title?: string,
  arrow?: boolean,
}

export const ThemeToggle = (props: ThemeToggleProp) => {
  const {title = "切换主题", arrow = false, size, ...others} = props;
  const theme = useSelector(state => state["themeToggle"]["theme"]);
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedOption, setSelectedOption] = useState(0);
  const themeMedia = window.matchMedia("(prefers-color-scheme: light)");

  const openMenu = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const closeMenu = () => {
    setAnchorEl(null);
  };

  const syncWithOS = (e: MediaQueryList | MediaQueryListEvent): void => {
    console.info(e);
    dispatch(syncWithOSTheme(e.matches ? "light" : "dark"));
  };
  const selectTheme = (index) => () => {
    setSelectedOption(index);
    setAnchorEl(null);
    switch (index) {
      case 0:
        themeMedia.removeEventListener("change", syncWithOS);
        dispatch(changeToLightTheme());
        break;
      case 1:
        themeMedia.removeEventListener("change", syncWithOS);
        dispatch(changeToDarkTheme());
        break;
      case 2:
        if (window.matchMedia("(prefers-color-scheme)").media === "not all") {
          alert("⚠ 当前浏览器不支持亮暗主题切换！");
        } else {
          syncWithOS(themeMedia);
          themeMedia.addEventListener("change", syncWithOS);
        }
        break;
      default:
        console.error("选择主题出错");
        break;
    }
  };

  useEffect(() => {
    const localTheme = localStorage.getItem("themeMode");
    localTheme === "auto" ? setSelectedOption(2) : (
      theme === "light" ? setSelectedOption(0) : setSelectedOption(1)
    );
  }, [theme]);

  return <>
    <Tooltip title={title} arrow={arrow}>
      <IconButton id="ThemeToggle" onClick={openMenu} size={size} {...others}>
        {options[selectedOption].icon}
      </IconButton>
    </Tooltip>
    <Menu
      id="ThemeMenu"
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={closeMenu}
      MenuListProps={{"aria-describedby": "theme menu", role: "menu"}}
    >
      {options.map((option, index) => (
        <MenuItem key={`option-${option.name}`} selected={index === selectedOption} onClick={selectTheme(index)}>
          <ListItemIcon>{option.icon}</ListItemIcon>
          <ListItemText>{option.name}</ListItemText>
        </MenuItem>
      ))}
    </Menu>
  </>;
};
