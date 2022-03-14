import {Box, List, ListItem, ListItemIcon, ListItemText, Menu, MenuItem} from "@mui/material";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Brightness4, Brightness7, DesktopMac} from "@mui/icons-material";
import {changeToDarkTheme, changeToLightTheme, syncWithOSTheme} from "./themeToggleSlice";

const options = [
    {name: "Please select a theme", icon: null},
    {name: "Light Theme", icon: <Brightness4/>},
    {name: "Dark Theme", icon: <Brightness7/>},
    {name: "Sync with OS", icon: <DesktopMac/>},
];

export const ThemeToggle = () => {
    const theme = useSelector(state => state["themeToggle"].theme);
    const dispatch = useDispatch();
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedOption, setSelectedOption] = useState(1);

    const open = Boolean(anchorEl);

    const handleClickListItem = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuItemClick = (e, index) => {
        setSelectedOption(index);
        setAnchorEl(null);

        switch (index) {
            case 1:
                dispatch(changeToLightTheme());
                break;
            case 2:
                dispatch(changeToDarkTheme());
                break;
            case 3:
                if (window.matchMedia('(prefers-color-scheme)').media === 'not all') {
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
            <List component="nav">
                <ListItem
                    button
                    id="lock-button"
                    aria-haspopup="listbox"
                    aria-controls="lock-menu"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClickListItem}
                >
                    <ListItemText primary={options[selectedOption].name}/>
                </ListItem>
            </List>
            <Menu
                id="lock-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{'aria-labelledby': 'lock-button', role: 'listbox',}}
            >
                {options.map((option, index) => (
                    <MenuItem
                        key={"option-" + option.name}
                        disabled={index === 0}
                        selected={index === selectedOption}
                        onClick={(e) => handleMenuItemClick(e, index)}
                    >
                        <ListItemIcon>{option.icon}</ListItemIcon>
                        <ListItemText>{option.name}</ListItemText>
                    </MenuItem>
                ))}
            </Menu>
        </Box>
    );
}