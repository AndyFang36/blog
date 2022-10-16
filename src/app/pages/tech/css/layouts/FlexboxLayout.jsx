import {Box, Button, Card, CardHeader, Collapse, Divider, FormControl, FormControlLabel, IconButton, Radio, RadioGroup, Stack, TextField, Toolbar, Typography} from "@mui/material";
import {useState} from "react";
import {Add, Code as CodeIcon, CodeOff as CodeOffIcon, ContentCopy, Info as InfoIcon, Menu, Remove} from "@mui/icons-material";
import {useDispatch, useSelector} from "react-redux";
import SyntaxHighlighter from "react-syntax-highlighter";
import {atomOneLight, atomOneDark} from "react-syntax-highlighter/dist/esm/styles/hljs";
import {openAlert} from "../../../../../features/alertStateSlice";
import MyFormLabel from "../../../../../common/components/MyFormLabel";
import MyTooltip from "../../../../../common/components/MyTooltip";

export default function FlexboxLayout() {
  const dispatch = useDispatch();
  const theme = useSelector(state => state["themeToggle"]["theme"]);
  const initStyle = {
    container: {
      minHeight: "20rem",
      display: "flex",
      flexWrap: "nowrap",
      flexDirection: "row",
      justifyContent: "start",
      alignItems: "normal"
    },
    box: {
      flexBasis: "auto",
      flexGrow: 0,
      order: 0
    },
  };
  const [style, setStyle] = useState(initStyle);
  const [count, setCount] = useState(7);
  const [open, setOpen] = useState({
    demo1: false
  });
  const code = {
    demo1:
      `#Container {\n` +
      `  display: ${style.container.display};\n` +
      `  flex-direction: ${style.container.flexDirection};\n` +
      `  flex-wrap: ${style.container.flexWrap};\n` +
      `  justify-content: ${style.container.justifyContent};\n` +
      `  align-items: ${style.container.alignItems};\n` +
      `}\n\n` +
      `#Box {\n` +
      `  flex-basis: ${style.box.flexBasis};\n` +
      `  flex-grow: ${style.box.flexGrow};\n` +
      `  order: ${style.box.order};\n` +
      `}`,
    demo2:
      ``
  };

  const reset = () => {
    setStyle(initStyle);
    setCount(7);
    setOpen(false);
  };

  const changeBoxStyle = (name) => (e) => {
    setStyle({...style, box: {...style.box, [name]: e.target.value}});
  };
  const changeContainerStyle = (name) => (e) => {
    setStyle({...style, container: {...style.container, [name]: e.target.value}});
  };
  const decrease = () => {
    setCount(prevState => prevState === 1 ? prevState : prevState - 1);
  };
  const increase = () => {
    setCount(prevState => prevState === 7 ? prevState : prevState + 1);
  };

  const toggleCodeBlock = (name) => () => {
    setOpen({...open, [name]: !open[name]});
  };
  const copyCode = () => {
    navigator.clipboard.writeText(code.demo1).then(
      () => dispatch(openAlert({open: true, severity: "success", message: "源码已被复制到您的粘贴板！"})),
      error => console.error(error)
    );
  };

  function DemoItem({title, order = 0, style}) {
    return (
      <Card sx={{
        width: "10rem",
        height: "10rem",
        m: 1,
        color: theme.palette.text.secondary,
        backgroundColor: theme.palette.background.secondary,
        order: order,
        ...style
      }}>
        <CardHeader
          title={title}
          titleTypographyProps={{
            align: "center", fontSize: {xs: "1rem", md: "1.5rem", xl: "2rem"}
          }}
        />
      </Card>
    );
  }

  return (
    <Box id="FlexboxLayout">
      <Typography component="h1" align="center" fontWeight="bold">Flexible Box Layout</Typography>
      <Divider/>
      <Box id="Article" position="relative">
        <IconButton title="nav menu" style={{position: "fixed", top: "7rem", right: "1rem", zIndex: 999}}>
          <Menu sx={{display: {sm: "block", md: "none"}}}/>
        </IconButton>
        <Stack bgcolor={theme.palette.background.default} className="demo" spacing={1} borderRadius={5}>
          <Toolbar style={{justifyContent: "space-between"}}>
            <Stack direction="row" spacing={1} fontSize="large">
              <span>🔴</span><span>🟡</span><span>🟢</span>
            </Stack>
            <Button onClick={reset} variant="contained" color="warning" disableElevation>Reset</Button>
          </Toolbar>
          <Divider/>
          <Box className="display" sx={style.container}>
            {new Array(count).fill(0).map((v, i) => (
              i === 0 ?
                <DemoItem key={`demo-item-${i}`} title={`Box ${i + 1}`} order={i} style={style.box}/>
                :
                <DemoItem key={`demo-item-${i}`} title={`Box ${i + 1}`} order={i}/>
            ))}
          </Box>
          <Divider/>
          <Stack className="property" spacing={1}>
            <Stack direction="row" alignItems="center">
              <MyFormLabel>盒子数量：</MyFormLabel>
              <IconButton onClick={decrease} disabled={count === 1}><Remove color="warning"/></IconButton>
              <Typography variant="h5">{count}</Typography>
              <IconButton onClick={increase} disabled={count === 7}><Add color="success"/></IconButton>
            </Stack>
            <fieldset>
              <legend>Box Style</legend>
              <Stack>
                <FormControl>
                  <MyFormLabel>
                    <label>flex-basis</label>
                    <MyTooltip title="The flex-basis CSS property sets the initial main size of a flex item.">
                      <InfoIcon/>
                    </MyTooltip>
                  </MyFormLabel>
                  <RadioGroup
                    row
                    name="flex-basis"
                    value={style.box.flexBasis}
                    onChange={changeBoxStyle("flexBasis")}
                  >
                    <FormControlLabel value="auto" control={<Radio/>} label="auto"/>
                    <FormControlLabel value="5rem" control={<Radio/>} label="5rem"/>
                    <FormControlLabel value="50%" control={<Radio/>} label="50%"/>
                    <FormControlLabel value="content" control={<Radio/>} label="content"/>
                    <FormControlLabel value="max-content" control={<Radio/>} label="max-content"/>
                    <FormControlLabel value="min-content" control={<Radio/>} label="min-content"/>
                    <FormControlLabel value="fit-content" control={<Radio/>} label="fit-content"/>
                  </RadioGroup>
                </FormControl>
                <FormControl>
                  <MyFormLabel>
                    <label>flex-grow</label>
                    <MyTooltip title="The flex-grow CSS property sets the flex grow factor of a flex item's main size.">
                      <InfoIcon/>
                    </MyTooltip>
                  </MyFormLabel>
                  <RadioGroup
                    row
                    name="flex-grow"
                    value={style.box.flexGrow}
                    onChange={changeBoxStyle("flexGrow")}
                  >
                    <FormControlLabel value={0} control={<Radio/>} label="0"/>
                    <FormControlLabel value={1} control={<Radio/>} label="1"/>
                    <FormControlLabel value={2} control={<Radio/>} label="2"/>
                    <FormControlLabel value={3} control={<Radio/>} label="3"/>
                    <FormControlLabel value={4} control={<Radio/>} label="4"/>
                  </RadioGroup>
                </FormControl>
                <FormControl>
                  <MyFormLabel>
                    <label>order</label>
                    <MyTooltip title="The order CSS property sets the order to lay out an item in a flex or grid container. Items in a container are sorted by ascending order value and then by their source code order.">
                      <InfoIcon/>
                    </MyTooltip>
                  </MyFormLabel>
                  <RadioGroup
                    row
                    name="order"
                    value={style.box.order}
                    onChange={changeBoxStyle("order")}
                  >
                    <FormControlLabel value={-1} control={<Radio/>} label="-1"/>
                    <FormControlLabel value={0} control={<Radio/>} label="0"/>
                    <FormControlLabel value={1} control={<Radio/>} label="1"/>
                    <FormControlLabel value={4} control={<Radio/>} label="4"/>
                    <FormControlLabel value={7} control={<Radio/>} label="7"/>
                  </RadioGroup>
                </FormControl>
              </Stack>
            </fieldset>
            <fieldset>
              <legend>Container Style</legend>
              <Stack>
                <FormControl>
                  <MyFormLabel>flex-direction</MyFormLabel>
                  <RadioGroup
                    row
                    name="flex-direction"
                    value={style.container.flexDirection}
                    onChange={changeContainerStyle("flexDirection")}
                  >
                    <FormControlLabel value="row" control={<Radio/>} label="row"/>
                    <FormControlLabel value="row-reverse" control={<Radio/>} label="row-reverse"/>
                    <FormControlLabel value="column" control={<Radio/>} label="column"/>
                    <FormControlLabel value="column-reverse" control={<Radio/>} label="column-reverse"/>
                  </RadioGroup>
                </FormControl>
                <FormControl>
                  <MyFormLabel>flex-wrap</MyFormLabel>
                  <RadioGroup
                    row
                    name="flex-wrap"
                    value={style.container.flexWrap}
                    onChange={changeContainerStyle("flexWrap")}
                  >
                    <FormControlLabel value="nowrap" control={<Radio/>} label="nowrap"/>
                    <FormControlLabel value="wrap" control={<Radio/>} label="wrap"/>
                    <FormControlLabel value="wrap-reverse" control={<Radio/>} label="wrap-reverse"/>
                  </RadioGroup>
                </FormControl>
                <FormControl>
                  <MyFormLabel>justify-content</MyFormLabel>
                  <RadioGroup
                    row
                    name="justify-content"
                    value={style.container.justifyContent}
                    onChange={changeContainerStyle("justifyContent")}
                  >
                    <FormControlLabel value="start" control={<Radio/>} label="start"/>
                    <FormControlLabel value="end" control={<Radio/>} label="end"/>
                    <FormControlLabel value="center" control={<Radio/>} label="center"/>
                  </RadioGroup>
                </FormControl>
                <FormControl>
                  <MyFormLabel>align-content</MyFormLabel>
                  <RadioGroup
                    row
                    name="align-items"
                    value={style.container.alignItems}
                    onChange={changeContainerStyle("alignItems")}
                  >
                    <FormControlLabel value="normal" control={<Radio/>} label="normal"/>
                    <FormControlLabel value="stretch" control={<Radio/>} label="stretch"/>
                    <FormControlLabel value="center" control={<Radio/>} label="center"/>
                    <FormControlLabel value="start" control={<Radio/>} label="start"/>
                    <FormControlLabel value="end" control={<Radio/>} label="end"/>
                  </RadioGroup>
                </FormControl>
              </Stack>
            </fieldset>
          </Stack>
          <Divider/>
          <Toolbar className="bottom" style={{justifyContent: "end"}}>
            <IconButton title={open.demo1 ? "hide" : "open"} onClick={toggleCodeBlock("demo1")}>
              {open.demo1 ? <CodeOffIcon/> : <CodeIcon/>}
            </IconButton>
            <IconButton title="copy" onClick={copyCode}>
              <ContentCopy/>
            </IconButton>
          </Toolbar>
          <Collapse in={open.demo1} timeout="auto" unmountOnExit>
            <SyntaxHighlighter
              language="css"
              style={theme.mode === "light" ? atomOneLight : atomOneDark}
              showLineNumbers={true}
              wrapLongLines={true}
            >
              {code.demo1}
            </SyntaxHighlighter>
          </Collapse>
        </Stack>
      </Box>
    </Box>
  );
};
