import {Box, Card, Container, Divider, Stack, Tab, Tabs, Typography} from "@mui/material";
import {Navigate, NavLink, Route, Routes, useNavigate} from "react-router-dom";
import {AllUtilities} from "./AllUtilities";
import {SimplifiedTraditionalConversion} from "./text/SimplifiedTraditionalConversion";
import {useState} from "react";
import {MuiPaper} from "../../../common/components/MuiPaper";
import {APILoader, Map} from "@uiw/react-amap";

const bg = {
  backgroundColor: "lightblue",
  fontWeight: "bold",
  fontSize: "large",
};

export const UtilityPage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("all");

  const handleChange = (e, newValue) => {
    setActiveTab(newValue);
    navigate("/user/orders/" + newValue);
  };

  return (
    <Box id="UtilityPage">
      <Container maxWidth="xl">
        <MuiPaper>
          <Typography variant="h1" align="center">This is utility page.</Typography>
          <Divider/>
          <Tabs onChange={handleChange} value={activeTab} variant="fullWidth"
                textColor="primary" indicatorColor="primary"
          >
            <Tab value="all" label="全部" sx={activeTab === "all" ? bg : {}}/>
            <Tab value="text" label="文本类" sx={activeTab === "text" ? bg : {}}/>
            <Tab value="image" label="图片类" sx={activeTab === "image" ? bg : {}}/>
            <Tab value="dev" label="开发类" sx={activeTab === "dev" ? bg : {}}/>
          </Tabs>
          <Routes>
            <Route element={<AllUtilities/>} index/>
            <Route path="simple-traditional" element={<SimplifiedTraditionalConversion/>}/>
            <Route path="*" element={<Navigate to="/" replace={true}/>}/>
          </Routes>
          <Container maxWidth={false} id="AMapContainer" style={{ height: 800 }}>
            <APILoader akay="6244692d6d61d27fbe596a4f06d0d55d">
              <Map/>
            </APILoader>
          </Container>
        </MuiPaper>
      </Container>
    </Box>
  );
};
