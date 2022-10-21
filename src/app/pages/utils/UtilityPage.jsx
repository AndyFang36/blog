import {Box, Button, Card, CircularProgress, Container, Divider, FormControlLabel, FormGroup, Stack, Switch, Tab, Tabs, Toolbar, Typography} from "@mui/material";
import {Navigate, NavLink, Outlet, Route, Routes, useLocation, useNavigate} from "react-router-dom";
import {AllUtilities} from "./AllUtilities";
import {SimplifiedTraditionalConversion} from "./text/SimplifiedTraditionalConversion";
import {useEffect, useState} from "react";
import {MuiPaper} from "../../../common/components/mui/MuiPaper";
import {APILoader, ControlBarControl, Geolocation, HawkEyeControl, Map, MapTypeControl, Marker, ScaleControl, ToolBarControl, Weather} from "@uiw/react-amap";
import MapUtils from "./map/MapUtils";
import TextUtil from "./text/TextUtil";

const bg = {
  backgroundColor: "lightblue",
  fontWeight: "bold",
  fontSize: "large",
};

export const UtilityPage = () => {
  const navigate = useNavigate();
  const {pathname} = useLocation();
  const [activeTab, setActiveTab] = useState(pathname.split("/")[3]);

  const handleChange = (e, newValue) => {
    setActiveTab(newValue);
    navigate("/blog/utilities/" + (newValue === "all" ? "/" : newValue));
  };

  return (
    <Box id="UtilityPage" pt="5rem">
      <Container maxWidth="xl">
        <Card>
          <Typography variant="h1" align="center">This is utility page.</Typography>
          <Typography paragraph>
            欢迎使用工具！
            欢迎使用工具！
            欢迎使用工具！
            欢迎使用工具！
            欢迎使用工具！
            欢迎使用工具！
          </Typography>
          <Divider/>
          <Tabs onChange={handleChange} value={activeTab} variant="scrollable" scrollButtons="auto" indicatorColor="primary">
            <Tab value="reference" label="参考查询" sx={activeTab === "reference" ? bg : {}}/>
            <Tab value="text" label="文本类" sx={activeTab === "text" ? bg : {}}/>
            <Tab value="image" label="图片类" sx={activeTab === "image" ? bg : {}}/>
            <Tab value="dev" label="开发类" sx={activeTab === "dev" ? bg : {}}/>
            <Tab value="map" label="地图" sx={activeTab === "map" ? bg : {}}/>
            <Tab value="others" label="其它" sx={activeTab === "others" ? bg : {}}/>
          </Tabs>
          <Routes>
            <Route index element={<AllUtilities/>}/>
            <Route path="map/*" element={<Outlet/>}>
              <Route path="basic" element={<MapUtils/>}/>
            </Route>
            <Route path="text/*" element={<TextUtil/>}/>
            <Route path="*" element={<Navigate to="/" replace={true}/>}/>
          </Routes>
        </Card>
      </Container>
    </Box>
  );
};
