import {Grain, Home, ThumbUp as ThumbUpIcon, Whatshot} from "@mui/icons-material";
import {Box, Breadcrumbs, Card, CardActions, CardContent, CardHeader, Container, Divider, Grid, IconButton, Typography} from "@mui/material";
import {Link, Outlet, Route, Routes} from "react-router-dom";
import {CategoryMenu} from "../../../common/components/CategoryMenu";
import "../../../assets/styles/TechnologyPage.css";
import {useEffect, useRef, useState} from "react";
import {Clock} from "../../../common/components/clock/Clock";
import {useSelector} from "react-redux";
import WelcomePage from "./WelcomePage";
import IntroPage from "./react/IntroPage";
import {CallbackHook} from "./react/hooks";
import * as echarts from "echarts";
import axios, {Axios} from "axios";

export const TechnologyPage = () => {
  const theme = useSelector(state => state["themeToggle"]["theme"]);
  const styles = {
    card: {
      color: theme.palette.text.secondary,
      backgroundColor: theme.palette.background.paper
    }
  };

  const temperatureGaugeEl = useRef(null);

  useEffect(() => {
    document.title = "技术分享 - Andyの博客";
    echarts.dispose(temperatureGaugeEl.current);
    const temperatureGauge = echarts.init(temperatureGaugeEl.current, "light", {renderer: "svg"});
    temperatureGauge.setOption({
      series: [
        {
          type: "gauge",
          center: ["50%", "60%"],
          startAngle: 200,
          endAngle: -20,
          min: 0,
          max: 60,
          splitNumber: 12,
          itemStyle: {
            color: "#FFAB91"
          },
          progress: {
            show: true,
            width: 30
          },
          pointer: {
            show: false
          },
          axisLine: {
            lineStyle: {
              width: 30
            }
          },
          axisTick: {
            distance: -45,
            splitNumber: 5,
            lineStyle: {
              width: 2,
              color: "#999"
            }
          },
          splitLine: {
            distance: -52,
            length: 14,
            lineStyle: {
              width: 3,
              color: "#999"
            }
          },
          axisLabel: {
            distance: -20,
            color: "#999",
            fontSize: 20
          },
          anchor: {
            show: false
          },
          title: {
            show: false
          },
          detail: {
            valueAnimation: true,
            width: "60%",
            lineHeight: 40,
            borderRadius: 8,
            offsetCenter: [0, "-15%"],
            fontSize: 60,
            fontWeight: "bolder",
            formatter: "{value} °C",
            color: "auto"
          },
          data: [
            {
              value: 20
            }
          ]
        },
        {
          type: "gauge",
          center: ["50%", "60%"],
          startAngle: 200,
          endAngle: -20,
          min: 0,
          max: 60,
          itemStyle: {
            color: "#FD7347"
          },
          progress: {
            show: true,
            width: 8
          },
          pointer: {
            show: false
          },
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          splitLine: {
            show: false
          },
          axisLabel: {
            show: false
          },
          detail: {
            show: false
          },
          data: [
            {
              value: 20
            }
          ]
        }
      ]
    });
    axios.get("http://wthrcdn.etouch.cn/weather_mini?city=上海").then(response => {
      const weather = JSON.parse(response.data["forcaset"][0]);
      const low = (weather["low"].replace(/\D/g, "").trim() + "°").trim();
      const high = (weather["high"].replace(/\D/g, "").trim() + "°C").trim();
      const wText = weather["type"] + low + "~" + high;
      console.log(wText)
    });
  }, []);

  return (
    <Box id="TechnologyPage">
      <Container maxWidth={false}>
        <Grid container spacing={3} position="relative" columns={16}>
          <Grid item xs={0} md={3} lg={2} xl={3}>
            <CategoryMenu/>
          </Grid>
          <Grid item xs={4} md={8} lg={8} xl={9}>
            <Card style={styles.card}>
              <CardHeader/>
              <CardContent>
                <Breadcrumbs aria-label="breadcrumb">
                  <Link
                    underline="hover"
                    sx={{display: "flex", alignItems: "center"}}
                    color="inherit"
                    to="/"
                  >
                    <Home sx={{mr: 0.5}} fontSize="inherit"/>主页
                  </Link>
                  <Link
                    underline="hover"
                    sx={{display: "flex", alignItems: "center"}}
                    color="inherit"
                    to="/getting-started/installation/"
                  >
                    <Whatshot sx={{mr: 0.5}} fontSize="inherit"/>Core
                  </Link>
                  <Typography
                    sx={{display: "flex", alignItems: "center"}}
                    color="text.primary"
                  >
                    <Grain sx={{mr: 0.5}} fontSize="inherit"/>Breadcrumb
                  </Typography>
                </Breadcrumbs>
                <Divider/>
                <Box className="article" p={1.5}>
                  <Routes>
                    <Route path="welcome" index element={<WelcomePage/>}/>
                    <Route path="html/*" element={<WelcomePage/>}/>
                    <Route path="css/*" element={<WelcomePage/>}/>
                    <Route path="javascript/*" element={<WelcomePage/>}/>
                    <Route path="react/*" element={<Outlet/>}>
                      <Route path="intro" index element={<IntroPage/>}/>
                      <Route path="hooks/*" element={<Outlet/>}>
                        <Route path="useCallback" element={<CallbackHook/>}/>
                        <Route path="useEffect" element={<CallbackHook/>}/>
                        <Route path="useMemo" element={<CallbackHook/>}/>
                      </Route>
                    </Route>
                  </Routes>
                </Box>
              </CardContent>
              <CardActions>
                <IconButton><ThumbUpIcon/></IconButton>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={0} md={3} lg={2} xl={4}>
            <Card style={styles.card}>
              <CardContent>{/*<Clock/>*/}</CardContent>
            </Card>
            <Card>
              <CardContent>
                <Box className="echarts" ref={temperatureGaugeEl} width="100%" minHeight="20rem"/>
              </CardContent>
            </Card>
            <Card></Card>
            <Card></Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
