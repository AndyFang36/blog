import {Grain, Home, ThumbUp as ThumbUpIcon, Whatshot} from "@mui/icons-material";
import {Box, Breadcrumbs, Card, CardActions, CardContent, CardHeader, Container, Divider, Grid, IconButton, Typography} from "@mui/material";
import {Link, Navigate, Outlet, Route, Routes} from "react-router-dom";
import {Sidebar} from "../../containers/Sidebar";
import {useEffect, useRef, useState, Suspense} from "react";
import {Clock} from "../../../common/components/clock/Clock";
import {useSelector} from "react-redux";
import TechIntroPage from "./TechIntroPage";
import ReactIntroPage from "./react/ReactIntroPage";
import {CallbackHook, EffectHook, MemoHook} from "./react/hooks";
import * as echarts from "echarts";
import axios, {Axios} from "axios";
import CSSIntroPage from "./css/CSSIntroPage";
import HTMLIntroPage from "./html/HTMLIntroPage";
import JSIntroPage from "./js/JSIntroPage";
import ArticleLoading from "./ArticleLoading";
import {FlexboxLayout, GridLayout, TableLayout} from "./css/layouts";
import {StateUpdating} from "./react/core";
import {HeightCompare} from "./js/apis";
import {APILoader, Weather} from "@uiw/react-amap";
import myAxios from "../../../common/utils/myAxios";
import "../../../assets/styles/TechnologyPage.css";

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
    const controller = new AbortController();
    document.title = "技术分享 - Andyの博客";
    echarts.dispose(temperatureGaugeEl.current);
    const temperatureGauge = echarts.init(temperatureGaugeEl.current, theme.mode, {renderer: "svg"});
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
              color: "#999999"
            }
          },
          splitLine: {
            distance: -52,
            length: 14,
            lineStyle: {
              width: 3,
              color: "#999999"
            }
          },
          axisLabel: {
            distance: -20,
            color: "#999999",
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
            color: "inherit"
          },
          data: [
            {
              value: 0
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
    const setWeather = () => {
      myAxios({
        method: "GET",
        url: "https://restapi.amap.com/v3/weather/weatherInfo",
        params: {key: "b2b5555c7a6df9c845f204275b9804ca", city: 330110, extensions: "base"}
      }).then(response => {
        console.log(response.data);
        temperatureGauge.setOption({
          series: [
            {
              data: [
                {
                  value: response.data["lives"][0]["temperature"]
                }
              ]
            },
            {
              data: [
                {
                  value: response.data["lives"][0]["temperature"]
                }
              ]
            }
          ]
        });
      });
    };
    setWeather();
    setInterval(setWeather, 15 * 60 * 1000);
    return () => controller.abort();
  }, [theme.mode]);

  return (
    <Box id="TechnologyPage" pt="6rem">
      <Container maxWidth={false}>
        <Grid container columns={16} spacing={3}>
          <Grid item xs={0} md={3} lg={3} xl={3} position="relative" display={{xs: "none", md: "block"}}>
            <Sidebar/>
          </Grid>
          <Grid item xs={16} md={8} lg={9} xl={9}>
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
                <Box className="article">
                  <Suspense fallback={<ArticleLoading/>}>
                    <Routes>
                      <Route index element={<TechIntroPage/>}/>
                      <Route path="html/*" element={<Outlet/>}>
                        <Route index element={<HTMLIntroPage/>}/>
                      </Route>
                      <Route path="css/*" element={<Outlet/>}>
                        <Route index element={<CSSIntroPage/>}/>
                        <Route path="layout/*" element={<Outlet/>}>
                          <Route path="flexbox" element={<FlexboxLayout/>}/>
                          <Route path="grid" element={<GridLayout/>}/>
                          <Route path="table" element={<TableLayout/>}/>
                        </Route>
                      </Route>
                      <Route path="javascript/*" element={<Outlet/>}>
                        <Route index element={<JSIntroPage/>}/>
                        <Route path="api/*" element={<Outlet/>}>
                          <Route path="heightCompare" element={<HeightCompare/>}/>
                        </Route>
                      </Route>
                      <Route path="react/*" element={<Outlet/>}>
                        <Route path="intro" index element={<ReactIntroPage/>}/>
                        <Route path="hooks/*" element={<Outlet/>}>
                          <Route path="useCallback" element={<CallbackHook/>}/>
                          <Route path="useEffect" element={<EffectHook/>}/>
                          <Route path="useMemo" element={<MemoHook/>}/>
                        </Route>
                        <Route path="core/*" element={<Outlet/>}>
                          <Route path="state-updating" element={<StateUpdating/>}/>
                          <Route path="useEffect" element={<CallbackHook/>}/>
                          <Route path="useMemo" element={<MemoHook/>}/>
                        </Route>
                      </Route>
                      <Route path="*" element={<Navigate to="/tech" replace={true}/>}/>
                    </Routes>
                  </Suspense>
                </Box>
              </CardContent>
              <CardActions>
                <IconButton><ThumbUpIcon/></IconButton>
                <IconButton><ThumbUpIcon/></IconButton>
                <IconButton><ThumbUpIcon/></IconButton>
                <IconButton><ThumbUpIcon/></IconButton>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={16} md={3} lg={4} xl={4}>
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
