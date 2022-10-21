import {ExpandLess, ExpandMore, Info, Send, Webhook} from "@mui/icons-material";
import {
  Card, CardContent, Collapse,
  Divider,
  List, ListItem, ListItemButton, ListItemIcon, ListItemText,
  Typography,
  useTheme
} from "@mui/material";
import {Fragment, useState} from "react";
import {NavLink, useLocation} from "react-router-dom";
import {FaHtml5, FaCss3Alt, FaReact, FaNodeJs} from "react-icons/fa";
import {DiJavascript} from "react-icons/di";
import {SiSpring} from "react-icons/si";

const list = [
  {name: "Introduction", path: "/tech/", icon: <Send/>, sub: null},
  {
    name: "HTML", path: "/tech/html", icon: <FaHtml5/>, sub: [
      {
        name: "Elements", path: "/tech/html/elements", icon: <FaHtml5/>, sub: [
          {name: "Embedded Content", path: "/tech/html/elements/embedded", icon: <FaHtml5/>}
        ]
      }
    ]
  },
  {
    name: "CSS", path: "/tech/css", icon: <FaCss3Alt/>, sub: [
      {
        name: "Layout", path: "/tech/css/layout", icon: <Send/>, sub: [
          {name: "Flexbox", path: "/tech/css/layout/flexbox", icon: <Send/>},
          {name: "Grid", path: "/tech/css/layout/grid", icon: <FaCss3Alt/>},
          {name: "Table", path: "/tech/css/layout/table", icon: <FaCss3Alt/>},
        ]
      },
      {
        name: "Animation", path: "/tech/css/animation", icon: <Send/>, sub: [
          {name: "xxx", path: "/tech/css/animation/xxx", icon: <Send/>}
        ]
      }
    ]
  },
  {
    name: "JavaScript", path: "/tech/javascript", icon: <DiJavascript/>, sub: [
      {
        name: "Core", path: "/tech/javascript/core", icon: <DiJavascript/>, sub: [
          {name: "Text formatting", path: "/tech/javascript/core/text-formatting", icon: <DiJavascript/>},
          {name: "Indexed collections", path: "/tech/javascript/core/indexed-collections", icon: <DiJavascript/>},
        ]
      },
      {
        name: "Web API", path: "/tech/javascript/api", icon: <DiJavascript/>, sub: [
          {name: "Height Compare", path: "/tech/javascript/api/heightCompare", icon: <DiJavascript/>},
        ]
      }
    ]
  },
  {
    name: "React", path: "/tech/react", icon: <FaReact/>, sub: [
      /*      {
              name: "Core", path: "/tech/react/core", icon: <Webhook/>, sub: []
            },
            {
              name: "Forms", path: "/tech/react/forms", icon: <Webhook/>, sub: []
            },*/
      {
        name: "Hooks", path: "/tech/react/hooks", icon: <Webhook/>, sub: [
          {isLabel: true, label: "Basic Hooks"},
          {name: "useState", path: "/tech/react/hooks/useState", icon: <Webhook/>},
          {name: "useEffect", path: "/tech/react/hooks/useEffect", icon: <Webhook/>},
          {name: "useContext", path: "/tech/react/hooks/useContext", icon: <Webhook/>},
          {isLabel: true, label: "Additional Hooks"},
          {name: "useReducer", path: "/tech/react/hooks/useReducer", icon: <Webhook/>},
          {name: "useMemo", path: "/tech/react/hooks/useMemo", icon: <Webhook/>},
          {isLabel: true, label: "Library Hooks"},
          {isLabel: true, label: "Custom Hooks"},
        ]
      },
    ]
  },
  {
    name: "Node.js", icon: <FaNodeJs/>, path: "/tech/nodejs", sub: [
      {name: "package.json", icon: <FaNodeJs/>, path: "/tech/nodejs/package-file", sub: null}
    ]
  },
  {
    name: "Other", icon: <Info/>, path: "/tech/other", sub: [
      {name: "天气API", icon: <Info/>, path: "/tech/other/weather-api", sub: null}
    ]
  },
];

export const Sidebar = ({width, id, className, component, ...others}) => {
  const {pathname} = useLocation();
  const theme = useTheme();
  const style = {
    listItem: {
      backgroundColor: theme.palette.primary.main,
      // "&.active": theme.palette.primary.secondary
    },
    sidebar: {
      minHeight: "83vh", maxHeight: "85vh", overflowY: "auto", position: "fixed", width: width
    }
  };
  const [open, setOpen] = useState({
    "/tech/html": pathname.includes(`/tech/html`),
    "/tech/html/elements": pathname.includes(`/tech/html/elements`),
    "/tech/css": pathname.includes(`/tech/css`),
    "/tech/css/layout": pathname.includes(`/tech/css/layout`),
    "/tech/css/animation": pathname.includes(`/tech/css/animation`),
    "/tech/javascript": pathname.includes(`/tech/javascript`),
    "/tech/react": pathname.includes(`/tech/react`),
    "/tech/react/hooks": pathname.includes(`/tech/react/hooks`),
    "/tech/nodejs": pathname.includes(`/tech/nodejs`),
    "/tech/other": pathname.includes(`/tech/other`)
  });

  const toggleCollapse = (name) => () => {
    setOpen({...open, [name]: !open[name]});
  };

  return (
    <Card id={id} className={className} component={component} style={style.sidebar} {...others}>
      <CardContent sx={{pr: 0, pl: {md: 2, lg: 3, xl: 4}}}>
        <List className="lv1">
          {list.map((item, i) =>
            item.sub === null ?
              <ListItem key={`item-${i}`} style={style.listItem}>
                <NavLink to={"/blog" + item.path}>
                  <ListItemButton>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.name}/>
                  </ListItemButton>
                </NavLink>
              </ListItem>
              :
              <Fragment key={`item-${i}`}>
                <ListItem className="sup" style={style.listItem}>
                  <ListItemButton onClick={toggleCollapse(item.path)}>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.name}/>
                    {open[item.path] ? <ExpandLess/> : <ExpandMore/>}
                  </ListItemButton>
                </ListItem>
                <Collapse in={open[item.path]} timeout="auto" unmountOnExit>
                  <List className="sub lv2">
                    {item.sub.map((item2, j) =>
                      item2.sub === null ?
                        <ListItem key={`item-${i}-${j}`} style={style.listItem}>
                          <NavLink to={"/blog" + item2.path}>
                            <ListItemButton>
                              <ListItemIcon>{item2.icon}</ListItemIcon>
                              <ListItemText primary={item2.name}/>
                            </ListItemButton>
                          </NavLink>
                        </ListItem>
                        :
                        <Fragment key={`item-${i}-${j}`}>
                          <ListItem className="sup" style={style.listItem}>
                            <ListItemButton onClick={toggleCollapse(item2.path)}>
                              <ListItemIcon>{item2.icon}</ListItemIcon>
                              <ListItemText primary={item2.name}/>
                              {open[item2.path] ? <ExpandLess/> : <ExpandMore/>}
                            </ListItemButton>
                          </ListItem>
                          <Collapse in={open[item2.path]} timeout="auto" unmountOnExit>
                            <List className="sub lv3">
                              {item2.sub.map((item3, k) =>
                                item3.isLabel ?
                                  <Fragment key={`label-${i}-${j}-${k}`}>
                                    <Typography color="gray" variant="body2">{item3.label}</Typography>
                                    <Divider/>
                                  </Fragment>
                                  :
                                  <ListItem key={`item-${i}-${j}-${k}`} style={style.listItem}>
                                    <NavLink to={"/blog" + item3.path} style={{".active":{backgroundColor: theme.palette.background.paper}}}>
                                      <ListItemButton>
                                        <ListItemIcon>{item3.icon}</ListItemIcon>
                                        <ListItemText
                                          primary={item3.name}
                                          style={{
                                            overflow: "hidden",
                                            textOverflow: "ellipsis",
                                            whiteSpace: "nowrap"
                                          }}
                                        />
                                      </ListItemButton>
                                    </NavLink>
                                  </ListItem>
                              )}
                            </List>
                          </Collapse>
                        </Fragment>
                    )}
                  </List>
                </Collapse>
              </Fragment>
          )}
        </List>
      </CardContent>
    </Card>
  );
};
