import {ColorLens, Construction, Drafts, EmojiEmotions, ExpandLess, ExpandMore, Flag, Handyman, Inbox, PictureInPicture, Send, StarBorder, ViewQuilt, Webhook} from "@mui/icons-material";
import {Box, Card, CardContent, Collapse, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, ListSubheader, Typography} from "@mui/material";
import {useState} from "react";
import {Link, NavLink, useLocation} from "react-router-dom";
import {useSelector} from "react-redux";

const ListGroupLabel = ({label, ...others}) => {
  return (
    <>
      <Typography color="gray" ml={2} mt={1} variant="h6" {...others}>{label}</Typography>
      <Divider/>
    </>
  );
};

export const CategoryMenu = () => {
  const theme = useSelector(state => state["themeToggle"]["theme"]);
  const [open, setOpen] = useState({
    "html": false,
    "javascript": false,
    "react": false,
    "react/hooks": false,
  });

  const toggleCollapse = (name) => () => {
    setOpen({...open, [name]: !open[name]});
  };


  return (
    <Card
      id="Sidebar"
      component="nav"
      style={{borderRadius:"1rem", minHeight: "80vh", maxHeight:"90vh", overflowY: "auto", position:"fixed", width:"17vw"}}
    >
      <CardContent sx={{pr: 0}}>
        <List component="ul">
          <ListItem>
            <NavLink to="/doc">
              <ListItemButton>
                <ListItemIcon><Send/></ListItemIcon>
                <ListItemText primary="Introduction"/>
              </ListItemButton>
            </NavLink>
          </ListItem>
          {/* HTML */}
          <ListItem>
            <Link to="/doc/html">
              <ListItemButton>
                <ListItemIcon><Send/></ListItemIcon>
                <ListItemText primary="HTML"/>
              </ListItemButton>
            </Link>
          </ListItem>
          {/* CSS */}
          <ListItem>
            <Link to="/doc/css">
              <ListItemButton>
                <ListItemIcon><Send/></ListItemIcon>
                <ListItemText primary="CSS"/>
              </ListItemButton>
            </Link>
          </ListItem>
          {/* JavaScript */}
          <ListItem>
            <Link to="/doc/js">
              <ListItemButton>
                <ListItemIcon><Send/></ListItemIcon>
                <ListItemText primary="JavaScript"/>
              </ListItemButton>
            </Link>
          </ListItem>
          {/* React */}
          <ListItem className="first-lv">
            <ListItemButton onClick={toggleCollapse("react")}>
              <ListItemIcon><ViewQuilt/></ListItemIcon>
              <ListItemText primary="React"/>
              <ListItemIcon>{open["react"] ? <ExpandLess/> : <ExpandMore/>}</ListItemIcon>
            </ListItemButton>
          </ListItem>
          <Collapse in={open["react"]} timeout="auto" unmountOnExit>
            <List className="second-lv">
              <ListItem>
                <ListItemButton onClick={toggleCollapse("react/hooks")}>
                  <ListItemIcon><StarBorder/></ListItemIcon>
                  <ListItemText primary="Hooks"/>
                  <ListItemIcon>{open["react/hooks"] ? <ExpandLess/> : <ExpandMore/>}</ListItemIcon>
                </ListItemButton>
              </ListItem>
              <Collapse in={open["react/hooks"]} timeout="auto" unmountOnExit>
                <List className="third-lv">
                  <ListItem>
                    <NavLink to="/tech/react/hooks/intro">
                      <ListItemButton>
                        <ListItemIcon><Webhook fontSize="large"/></ListItemIcon>
                        <ListItemText primary="Introduction"/>
                      </ListItemButton>
                    </NavLink>
                  </ListItem>
                  <ListGroupLabel label="Basic Hooks"/>
                  <ListItem>
                    <NavLink to="/doc/useState">
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
                    <NavLink to="/doc/useMemo">
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
                <ListItemButton sx={{pl: 4}}>
                  <ListItemIcon><StarBorder/></ListItemIcon>
                  <ListItemText primary="Forms"/>
                </ListItemButton>
              </ListItem>
              <ListItem>
                <Link to="/tech/react/hooks/use-memo">
                  <ListItemButton sx={{pl: 4}}>
                    <ListItemIcon><StarBorder/></ListItemIcon>
                    <ListItemText primary="useMemo"/>
                  </ListItemButton>
                </Link>
              </ListItem>
            </List>
          </Collapse>
          <ListItem>
            <Link to="/doc/about">
              <ListItemButton>
                <ListItemIcon><EmojiEmotions/></ListItemIcon>
                <ListItemText primary="About"/>
              </ListItemButton>
            </Link>
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
};
