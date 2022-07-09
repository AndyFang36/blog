import {Box, List, ListItem, ListItemIcon, ListItemText, Menu, MenuItem} from "@mui/material";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Brightness4, Brightness7, DesktopMac} from "@mui/icons-material";
import {changeToDarkTheme, changeToLightTheme, syncWithOSTheme} from "./themeStateSlice";
import "./ThemeToggle.css";

const options = [
    {name: "亮色主题", icon: <Brightness7/>},
    {name: "暗色主题", icon: <Brightness4/>},
    {name: "跟随系统", icon: <DesktopMac/>},
];

export const ThemeToggle = () => {
    const theme = useSelector(state => state["themeToggle"]["theme"]);
    const dispatch = useDispatch();
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedOption, setSelectedOption] = useState(0);

    const open = Boolean(anchorEl);

    useEffect(() => {
        theme.mode === "light" ? setSelectedOption(0) : setSelectedOption(1);
    }, [theme.mode]);

    const handleClickListItem = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuItemClick = (e, index) => {
        setSelectedOption(index);
        setAnchorEl(null);

        switch (index) {
            case 0:
                dispatch(changeToLightTheme());
                break;
            case 1:
                dispatch(changeToDarkTheme());
                break;
            case 2:
                if (window.matchMedia("(prefers-color-scheme)").media === "not all") {
                    alert("当前浏览器不支持亮暗主题切换！");
                    break;
                } else {
                    dispatch(syncWithOSTheme());
                    break;
                }
            default:
                console.error("选择主题出错");
        }
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
      <Box id="ThemeToggle">
          <List component="nav" disablePadding>
              <ListItem
                disablePadding
                button
                id="lock-button"
                aria-haspopup="listbox"
                aria-controls="lock-menu"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClickListItem}
              >
                  <ListItemText primary={options[selectedOption].icon}/>
              </ListItem>
          </List>
          <Menu
            id="lock-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{"aria-labelledby": "lock-button", role: "listbox"}}
          >
              {options.map((option, index) => (
                <MenuItem
                  key={"option-" + option.name}
                  selected={index === selectedOption}
                  onClick={(e) => handleMenuItemClick(e, index)}
                  sx={[
                      {backgroundColor: theme.palette.background.default},
                      {"&.Mui-selected": {backgroundColor: theme.palette.background.secondary}},
                      {"&.Mui-selected:hover": {backgroundColor: theme.palette.background.secondary}},
                      {"&:hover": {backgroundColor: theme.palette.background.secondary}},
                  ]}
                >
                    <ListItemIcon>{option.icon}</ListItemIcon>
                    <ListItemText>{option.name}</ListItemText>
                </MenuItem>
              ))}
          </Menu>
      </Box>
    );
};
