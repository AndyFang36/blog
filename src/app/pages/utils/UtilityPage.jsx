import {Box, Card, CardContent, Container, Divider, Tab, Tabs, Typography} from "@mui/material";
import {Outlet, Route, Routes, useLocation, useNavigate} from "react-router-dom";
import {AllUtilities} from "./AllUtilities";
import {useEffect, useState} from "react";
import MapUtils from "./map/MapUtils";
import TextUtil from "./text/TextUtil";
import ErrorPage from "../../errors/ErrorPage";

const bg = {
  fontWeight: "bolder",
  fontSize: "larger",
};

export const UtilityPage = () => {
  const navigate = useNavigate();
  const {pathname} = useLocation();
  const [activeTab, setActiveTab] = useState("all");

  const changeTab = (e, newValue) => {
    navigate(`/blog/utilities/${newValue === "all" ? "" : newValue}`);
  };

  useEffect(() => {
    console.log("📑 Utils page");
    const splitPath = pathname.split("/")[3];
    setActiveTab([undefined, ""].includes(splitPath) ? "all" : splitPath);
  }, [pathname]);

  return (
    <Box id="UtilityPage" pt="5rem">
      <Container maxWidth="xl">
        <Card>
          <CardContent>
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
            <Tabs onChange={changeTab} value={activeTab} variant="scrollable" scrollButtons="auto">
              <Tab value="all" label="推荐" sx={activeTab === "all" ? bg : {}}/>
              <Tab value="reference" label="参考查询" sx={activeTab === "reference" ? bg : {}}/>
              <Tab value="text" label="文本类" sx={activeTab === "text" ? bg : {}}/>
              <Tab value="image" label="图片类" sx={activeTab === "image" ? bg : {}}/>
              <Tab value="dev" label="开发类" sx={activeTab === "dev" ? bg : {}}/>
              <Tab value="map" label="地图" sx={activeTab === "map" ? bg : {}}/>
              <Tab value="others" label="其它" sx={activeTab === "others" ? bg : {}}/>
            </Tabs>
            <Divider sx={{mb: 2}}/>
            <Box minHeight="60vh">
              <Routes>
                <Route index element={<AllUtilities/>}/>
                <Route path="reference/*" element={<Outlet/>}>

                </Route>
                <Route path="map/*" element={<Outlet/>}>
                  <Route path="basic" element={<MapUtils/>}/>
                </Route>
                <Route path="text/*" element={<TextUtil/>}/>
                <Route path="*" element={<ErrorPage type="NOT_FOUND"/>}/>
              </Routes>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};
