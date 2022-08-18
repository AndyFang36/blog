import {Drafts, ExpandLess, ExpandMore, Inbox, Send, StarBorder} from "@mui/icons-material";
import {Collapse, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, ListSubheader} from "@mui/material";
import {useState} from "react";
import {NavLink, useLocation} from "react-router-dom";
import {string} from "prop-types";
import {useSelector} from "react-redux";

export const CategoryMenu = (props) => {
  const {component, ...rest} = props;

  const theme = useSelector(state => state["themeToggle"]["theme"]);

  const [open, setOpen] = useState(true);
  const [open1, setOpen1] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleClick1 = () => {
    setOpen1(!open1);
  };

  return (
    <List
      {...rest}
      className="category-menu"
      sx={{width: "100%", maxWidth: 360, color: theme.palette.text.secondary, backgroundColor: theme.palette.background.default}}
      component={component}
      subheader={<ListSubheader sx={{color:"inherit", backgroundColor:"inherit"}}>分类</ListSubheader>}
    >
      <ListItem disablePadding>
        <ListItemButton onClick={handleClick1}>
          <ListItemIcon><Send/></ListItemIcon>
          <ListItemText primary="CSS"/>
          {open1 ? <ExpandLess/> : <ExpandMore/>}
        </ListItemButton>
      </ListItem>
      <Collapse in={open1} timeout="auto" unmountOnExit>
        <List className="collapse-list" disablePadding>
          <ListItem disablePadding>
            <ListItemButton sx={{pl: 4}}>
              <ListItemIcon><Send/></ListItemIcon>
              <ListItemText primary="管理员信息管理"/>
            </ListItemButton>
          </ListItem>
          <Divider/>
          <ListItem disablePadding>
            <ListItemButton sx={{pl: 4}}>
              <ListItemIcon><Send/></ListItemIcon>
              <ListItemText primary="用户信息管理"/>
            </ListItemButton>
          </ListItem>
          <Divider/>
          <NavLink to="/management/basic/bicycles">
            <ListItem disablePadding>
              <ListItemButton sx={{pl: 4}}>
                <ListItemIcon><Send/></ListItemIcon>
                <ListItemText primary="自行车信息管理"/>
              </ListItemButton>
            </ListItem>
          </NavLink>
          <Divider/>
          <NavLink to="/management/basic/notices">
            <ListItem disablePadding>
              <ListItemButton sx={{pl: 4}}>
                <ListItemIcon><Send/></ListItemIcon>
                <ListItemText primary="消息通知"/>
              </ListItemButton>
            </ListItem>
          </NavLink>
        </List>
      </Collapse>
      <Divider/>
      <ListItemButton>
        <ListItemIcon><Drafts/></ListItemIcon>
        <ListItemText primary="JavaScript"/>
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon><Send/></ListItemIcon>
        <ListItemText primary="React"/>
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon><Drafts/></ListItemIcon>
        <ListItemText primary="Windows"/>
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon><Send/></ListItemIcon>
        <ListItemText primary="SQL"/>
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon><Drafts/></ListItemIcon>
        <ListItemText primary="Jet Brain"/>
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon><Send/></ListItemIcon>
        <ListItemText primary="Spring Boot"/>
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon><Drafts/></ListItemIcon>
        <ListItemText primary="Java"/>
      </ListItemButton>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon><Inbox/></ListItemIcon>
        <ListItemText primary="Inbox"/>{open ? <ExpandLess/> : <ExpandMore/>}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{pl: 4}}>
            <ListItemIcon><StarBorder/></ListItemIcon>
            <ListItemText primary="Starred"/>
          </ListItemButton>
          <ListItemButton sx={{pl: 4}}>
            <ListItemIcon><StarBorder/></ListItemIcon>
            <ListItemText primary="Starred"/>
          </ListItemButton>
          <ListItemButton sx={{pl: 4}}>
            <ListItemIcon><StarBorder/></ListItemIcon>
            <ListItemText primary="Starred"/>
          </ListItemButton>
          <ListItemButton sx={{pl: 4}}>
            <ListItemIcon><StarBorder/></ListItemIcon>
            <ListItemText primary="Starred"/>
          </ListItemButton>
          <ListItemButton sx={{pl: 4}}>
            <ListItemIcon><StarBorder/></ListItemIcon>
            <ListItemText primary="Starred"/>
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
};

CategoryMenu.propTypes = {
  component: string,
};
