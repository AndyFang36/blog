import {Drafts, EmojiEmotions, ExpandLess, ExpandMore, Handyman, Send, StarBorder, ViewQuilt, Webhook} from "@mui/icons-material";
import {Card, CardContent, Collapse, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography} from "@mui/material";
import {useState} from "react";
import {Link, NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import {FaHtml5, FaCss3Alt, FaReact} from "react-icons/fa";
import {DiJavascript} from "react-icons/di";
import {SiSpring} from "react-icons/si";

const ListGroupLabel = ({label, ...others}) => {
  return (
    <>
      <Typography color="gray" variant="body2" {...others}>{label}</Typography>
      <Divider/>
    </>
  );
};

export const Sidebar = () => {
  const theme = useSelector(state => state["themeToggle"]["theme"]);
  const style = {
    sidebar: {
      backgroundColor: theme.palette.background.paper,
      minHeight: "80vh", maxHeight: "90vh", overflowY: "auto", position: "fixed", width: "17vw"
    }
  };
  const [open, setOpen] = useState({
    "html": false,
    "css": false,
    "css/layout": false,
    "javascript": false,
    "react": false,
    "react/hooks": false,
  });

  const toggleCollapse = (name) => () => {
    setOpen({...open, [name]: !open[name]});
  };

  return (
    <Card id="Sidebar" component="nav" style={style.sidebar}>
      <CardContent sx={{pr: 0, pl: 4}}>
        <List className="lv1">
          <ListItem>
            <NavLink to="/tech/">
              <ListItemButton>
                <ListItemIcon><Send/></ListItemIcon>
                <ListItemText primary="Introduction"/>
              </ListItemButton>
            </NavLink>
          </ListItem>
          {/* HTML */}
          <ListItem>
            <NavLink to="/tech/html">
              <ListItemButton>
                <ListItemIcon><FaHtml5/></ListItemIcon>
                <ListItemText primary="HTML"/>
              </ListItemButton>
            </NavLink>
          </ListItem>
          <Collapse in={open["html"]} timeout="auto" unmountOnExit>
            <List className="sub lv2">
              <ListItem className="sup">
                <NavLink to="/tech/html/layout">
                  <ListItemButton onClick={toggleCollapse("css/layout")}>
                    <ListItemIcon><Webhook/></ListItemIcon>
                    <ListItemText primary="Layout"/>
                    {open["css/layout"] ? <ExpandLess/> : <ExpandMore/>}
                  </ListItemButton>
                </NavLink>
              </ListItem>
              <Collapse in={open["html/layout"]} timeout="auto" unmountOnExit>
                <List className="sub lv3">
                  <ListItem>
                    <NavLink to="/tech/react/hooks/flexbox">
                      <ListItemButton>
                        <ListItemIcon><Webhook/></ListItemIcon>
                        <ListItemText primary="Introduction"/>
                      </ListItemButton>
                    </NavLink>
                  </ListItem>
                  <ListItem>
                    <NavLink to="/tech/react/hooks/intro">
                      <ListItemButton>
                        <ListItemIcon><Webhook/></ListItemIcon>
                        <ListItemText primary="Introduction"/>
                      </ListItemButton>
                    </NavLink>
                  </ListItem>
                </List>
              </Collapse>
              <ListItem></ListItem>
              <ListItem></ListItem>
              <ListItem></ListItem>
              <ListItem></ListItem>
              <ListItem></ListItem>
            </List>
          </Collapse>
          {/* CSS */}
          <ListItem>
            <NavLink to="/tech/css">
              <ListItemButton onClick={toggleCollapse("css")}>
                <ListItemIcon><FaCss3Alt/></ListItemIcon>
                <ListItemText primary="CSS"/>
                {open["css"] ? <ExpandLess fontSize="large"/> : <ExpandMore fontSize="large"/>}
              </ListItemButton>
            </NavLink>
          </ListItem>
          <Collapse in={open["css"]} timeout="auto" unmountOnExit>
            <List className="sub lv2">
              {/* Layout */}
              <ListItem className="sup">
                <NavLink to="/tech/css/layout">
                  <ListItemButton onClick={toggleCollapse("css/layout")}>
                    <ListItemIcon><Webhook/></ListItemIcon>
                    <ListItemText primary="Layout"/>
                    {open["css/layout"] ? <ExpandLess/> : <ExpandMore/>}
                  </ListItemButton>
                </NavLink>
              </ListItem>
              <Collapse in={open["css/layout"]} timeout="auto" unmountOnExit>
                <List className="sub lv3">
                  <ListItem>
                    <NavLink to="/tech/css/layout/flexbox">
                      <ListItemButton>
                        <ListItemIcon><Webhook/></ListItemIcon>
                        <ListItemText primary="Flexbox Layout"/>
                      </ListItemButton>
                    </NavLink>
                  </ListItem>
                  <ListItem>
                    <NavLink to="/tech/react/hooks/intro">
                      <ListItemButton>
                        <ListItemIcon><Webhook/></ListItemIcon>
                        <ListItemText primary="Introduction"/>
                      </ListItemButton>
                    </NavLink>
                  </ListItem>
                </List>
              </Collapse>
              {/* Animation */}
              <ListItem></ListItem>
              <ListItem></ListItem>
              <ListItem></ListItem>
              <ListItem></ListItem>
              <ListItem></ListItem>
            </List>
          </Collapse>
          {/* JavaScript */}
          <ListItem className="sup">
            <NavLink to="/tech/javascript">
              <ListItemButton>
                <ListItemIcon><DiJavascript/></ListItemIcon>
                <ListItemText primary="JavaScript"/>
              </ListItemButton>
            </NavLink>
          </ListItem>
          <Collapse in={open["javascript"]} timeout="auto" unmountOnExit>
            <List className="sub lv2">
              <ListItem></ListItem>
              <ListItem></ListItem>
              <ListItem></ListItem>
              <ListItem></ListItem>
              <ListItem></ListItem>
              <ListItem></ListItem>
            </List>
          </Collapse>
          {/* React */}
          <ListItem className="sup">
            <ListItemButton onClick={toggleCollapse("react")}>
              <ListItemIcon><FaReact color="skyblue"/></ListItemIcon>
              <ListItemText primary="React"/>
              {open["react"] ? <ExpandLess fontSize="large"/> : <ExpandMore fontSize="large"/>}
            </ListItemButton>
          </ListItem>
          <Collapse in={open["react"]} timeout="auto" unmountOnExit>
            <List className="sub lv2">
              <ListItem className="sup">
                <ListItemButton onClick={toggleCollapse("react/hooks")}>
                  <ListItemIcon><Webhook/></ListItemIcon>
                  <ListItemText primary="Hooks"/>
                  {open["react/hooks"] ? <ExpandLess/> : <ExpandMore/>}
                </ListItemButton>
              </ListItem>
              <Collapse in={open["react/hooks"]} timeout="auto" unmountOnExit>
                <List className="sub lv3">
                  <ListItem>
                    <NavLink to="/tech/react/hooks/intro">
                      <ListItemButton>
                        <ListItemIcon><Webhook/></ListItemIcon>
                        <ListItemText primary="Introduction"/>
                      </ListItemButton>
                    </NavLink>
                  </ListItem>
                  <ListGroupLabel label="Basic Hooks"/>
                  <ListItem>
                    <NavLink to="/tech/react/hooks/useState">
                      <ListItemButton>
                        <ListItemIcon><Webhook fontSize="large"/></ListItemIcon>
                        <ListItemText primary="useState"/>
                      </ListItemButton>
                    </NavLink>
                  </ListItem>
                  <ListItem>
                    <NavLink to="/doc/useEffect">
                      <ListItemButton>
                        <ListItemIcon><Webhook fontSize="large"/></ListItemIcon>
                        <ListItemText primary="useEffect"/>
                      </ListItemButton>
                    </NavLink>
                  </ListItem>
                  <ListItem>
                    <NavLink to="/doc/useContext">
                      <ListItemButton>
                        <ListItemIcon><Webhook fontSize="large"/></ListItemIcon>
                        <ListItemText primary="useContext"/>
                      </ListItemButton>
                    </NavLink>
                  </ListItem>
                  <ListGroupLabel label="Additional Hooks"/>
                  <ListItem>
                    <NavLink to="/doc/useReducer">
                      <ListItemButton>
                        <ListItemIcon><Webhook fontSize="large"/></ListItemIcon>
                        <ListItemText primary="useReducer"/>
                      </ListItemButton>
                    </NavLink>
                  </ListItem>
                  <ListItem>
                    <NavLink to="/tech/react/hooks/useMemo">
                      <ListItemButton>
                        <ListItemIcon><Webhook fontSize="large"/></ListItemIcon>
                        <ListItemText primary="useMemo"/>
                      </ListItemButton>
                    </NavLink>
                  </ListItem>
                  <ListItem>
                    <NavLink to="/tech/react/hooks/useCallback">
                      <ListItemButton>
                        <ListItemIcon><Drafts fontSize="large"/></ListItemIcon>
                        <ListItemText primary="useCallback"/>
                      </ListItemButton>
                    </NavLink>
                  </ListItem>
                  <ListItem>
                    <NavLink to="/doc/useRef">
                      <ListItemButton>
                        <ListItemIcon><Webhook fontSize="large"/></ListItemIcon>
                        <ListItemText primary="useRef"/>
                      </ListItemButton>
                    </NavLink>
                  </ListItem>
                  <ListItem>
                    <NavLink to="/doc/useImperativeHandle">
                      <ListItemButton>
                        <ListItemIcon><Webhook fontSize="large"/></ListItemIcon>
                        <ListItemText primary="useImperativeHandle"/>
                      </ListItemButton>
                    </NavLink>
                  </ListItem>
                  <ListItem>
                    <NavLink to="/useLayoutEffect">
                      <ListItemButton>
                        <ListItemIcon><Webhook fontSize="large"/></ListItemIcon>
                        <ListItemText primary="useLayoutEffect"/>
                      </ListItemButton>
                    </NavLink>
                  </ListItem>
                  <ListItem>
                    <NavLink to="/useDebugValue">
                      <ListItemButton>
                        <ListItemIcon><Webhook fontSize="large"/></ListItemIcon>
                        <ListItemText primary="useDebugValue"/>
                      </ListItemButton>
                    </NavLink>
                  </ListItem>
                  <ListItem>
                    <NavLink to="/useDeferredValue">
                      <ListItemButton>
                        <ListItemIcon><Webhook fontSize="large"/></ListItemIcon>
                        <ListItemText primary="useDeferredValue"/>
                      </ListItemButton>
                    </NavLink>
                  </ListItem>
                  <ListItem>
                    <NavLink to="/useTransition">
                      <ListItemButton>
                        <ListItemIcon><Webhook fontSize="large"/></ListItemIcon>
                        <ListItemText primary="useTransition"/>
                      </ListItemButton>
                    </NavLink>
                  </ListItem>
                  <ListItem>
                    <NavLink to="/useId">
                      <ListItemButton>
                        <ListItemIcon><Webhook fontSize="large"/></ListItemIcon>
                        <ListItemText primary="useId"/>
                      </ListItemButton>
                    </NavLink>
                  </ListItem>
                  <ListGroupLabel label="Library Hooks"/>
                  <ListItem>
                    <NavLink to="/useSyncExternalStore">
                      <ListItemButton>
                        <ListItemIcon><Drafts fontSize="large"/></ListItemIcon>
                        <ListItemText primary="useSyncExternalStore"/>
                      </ListItemButton>
                    </NavLink>
                  </ListItem>
                  <ListItem>
                    <NavLink to="/useInsertionEffect">
                      <ListItemButton>
                        <ListItemIcon><Webhook fontSize="large"/></ListItemIcon>
                        <ListItemText primary="useInsertionEffect"/>
                      </ListItemButton>
                    </NavLink>
                  </ListItem>
                  <ListGroupLabel label="Custom Hook"/>
                  <ListItem>
                    <NavLink to="/custom">
                      <ListItemButton>
                        <ListItemIcon><Handyman fontSize="large"/></ListItemIcon>
                        <ListItemText primary="Building Your Hooks"/>
                      </ListItemButton>
                    </NavLink>
                  </ListItem>
                </List>
              </Collapse>
              <ListItem>
                <ListItemButton>
                  <ListItemIcon><StarBorder/></ListItemIcon>
                  <ListItemText primary="Forms"/>
                </ListItemButton>
              </ListItem>
              <ListItem>
                <Link to="/tech/react/hooks/use-memo">
                  <ListItemButton>
                    <ListItemIcon><StarBorder/></ListItemIcon>
                    <ListItemText primary="useMemo"/>
                  </ListItemButton>
                </Link>
              </ListItem>
            </List>
          </Collapse>
          {/* Spring */}
          <ListItem>
            <Link to="/tech/spring">
              <ListItemButton>
                <ListItemIcon><SiSpring color="limegreen"/></ListItemIcon>
                <ListItemText primary="Spring"/>
              </ListItemButton>
            </Link>
          </ListItem>
          {/* Others */}
          <ListItem>
            <Link to="/tech/others">
              <ListItemButton>
                <ListItemIcon><EmojiEmotions/></ListItemIcon>
                <ListItemText primary="Others"/>
              </ListItemButton>
            </Link>
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
};
