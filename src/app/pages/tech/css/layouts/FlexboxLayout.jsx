import {Box, Button, Card, CardHeader, Divider, FormControl, FormControlLabel, FormLabel, IconButton, ListItemText, MenuItem, MenuList, Radio, RadioGroup, Stack, Typography} from "@mui/material";
import {useState} from "react";
import {Menu} from "@mui/icons-material";

const ResponsiveCard = ({title}) => {
  return (
    <Card sx={{m:{xs:"0 0.5rem", xl:"0 1rem"}}}>
      <CardHeader title={title} titleTypographyProps={{align:"center", fontSize:{xs:"1rem", xl:"3rem"}}}/>
    </Card>
  );
};

export default function FlexboxLayout() {
  const [style, setStyle] = useState({
    height: {xs:"10rem", lg:"28rem", xl:"20rem"},
    display: "flex",
    justifyContent: "start",
    alignItems: "normal"
  });

  const reset = () => {
    setStyle({
      height: {xs:"10rem", lg:"28rem", xl:"20rem"},
      display: "flex",
      justifyContent: "start",
      alignItems: "normal"
    })
  }

  const handleChange = (name) => (e) => {
    setStyle({...style, [name]: e.target.value});
  };

  return (
    <Box id="FlexboxLayout">
      <Typography sx={{fontSize: {xs: "1.75rem", sm: "2rem", md: "3rem", lg: "4rem", xl: "5rem"}}} component="h1" align="center" fontWeight="bold">Flexible Box Layout</Typography>
      <Divider/>
      <Box id="Article" position="relative">
        <IconButton title="nav menu" style={{position: "fixed", top: "7rem", right: "1rem", zIndex: 999}}>
          <Menu sx={{display: {sm: "block", md: "none"}}}/>
        </IconButton>
        <Stack className="demo" border="medium solid lightgreen" spacing={2} position="relative">
          <Button onClick={reset} variant="contained" color="warning" style={{position: "absolute", right: 0, margin: "0.5rem", width: "fit-content"}} disableElevation>Reset</Button>
          <Box className="display" color="transparent" sx={style}>
            <ResponsiveCard title="Box 1"/>
            <ResponsiveCard title="Box 2"/>
            <ResponsiveCard title="Box 3"/>
          </Box>
          <Stack className="properties" spacing={1} p={2}>
            <FormControl>
              <FormLabel>justify-content</FormLabel>
              <RadioGroup
                row
                name="justify-content"
                value={style.justifyContent}
                onChange={handleChange("justifyContent")}
              >
                <FormControlLabel value="start" control={<Radio/>} label="start"/>
                <FormControlLabel value="end" control={<Radio/>} label="end"/>
                <FormControlLabel value="center" control={<Radio/>} label="center"/>
              </RadioGroup>
            </FormControl>
            <FormControl>
              <FormLabel>align-content</FormLabel>
              <RadioGroup
                row
                name="align-items"
                value={style.alignItems}
                onChange={handleChange("alignItems")}
              >
                <FormControlLabel value="normal" control={<Radio/>} label="normal"/>
                <FormControlLabel value="stretch" control={<Radio/>} label="stretch"/>
                <FormControlLabel value="center" control={<Radio/>} label="center"/>
                <FormControlLabel value="start" control={<Radio/>} label="start"/>
                <FormControlLabel value="end" control={<Radio/>} label="end"/>
              </RadioGroup>
            </FormControl>
          </Stack>
          <code className="code">xxx</code>
        </Stack>
      </Box>
    </Box>
  );
};
