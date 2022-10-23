import {
  Box, Breadcrumbs,
  Card, CardActions, CardContent, CardHeader, Container,
  Divider,
  Grid,
  IconButton, Skeleton, Stack,
  Toolbar, Typography,
  useTheme,
} from "@mui/material";
import {BugReport, Grain, Home, Refresh, Share as ShareIcon, ThumbDown as ThumbDownIcon, ThumbUp as ThumbUpIcon, Whatshot} from "@mui/icons-material";
import {Link, Navigate, Outlet, Route, Routes} from "react-router-dom";
import {Sidebar} from "./Sidebar";
import {useEffect, useRef, useState, Suspense} from "react";
import TechIntroPage from "./TechIntroPage";
import ReactIntroPage from "./react/ReactIntroPage";
import {CallbackHook, EffectHook, MemoHook} from "./react/hooks";
import CSSIntroPage from "./css/CSSIntroPage";
import HTMLIntroPage from "./html/HTMLIntroPage";
import JSIntroPage from "./js/JSIntroPage";
import ArticleLoading from "./ArticleLoading";
import {FlexboxLayout, GridLayout, TableLayout} from "./css/layouts";
import {StateUpdating} from "./react/core";
import {HeightCompare} from "./js/apis";
import myAxios from "../../../common/utils/myAxios";
import IndexedCollections from "./js/core/IndexedCollections";
import "../../../assets/styles/TechnologyPage.css";
import WeatherAPI from "./other/WeatherAPI";
import PackageFile from "./nodejs/PackageFile";
import EmbeddedContent from "./html/elements/EmbeddedContent";
import {Clock} from "../../../common/components/clock/Clock";
import ColorfulPixelClock from "../../../common/components/clock/ColorfulPixelClock";

/** <h2>天气现象表</h2>
 * 晴
 * 少云
 * 晴间多云
 * 多云
 * 阴
 * 有风
 * 平静
 * 微风
 * 和风
 * 清风
 * 强风/劲风
 * 疾风
 * 大风
 * 烈风
 * 风暴
 * 狂爆风
 * 飓风
 * 热带风暴
 * 霾
 * 中度霾
 * 重度霾
 * 严重霾
 * 阵雨
 * 雷阵雨
 * 雷阵雨并伴有冰雹
 * 小雨
 * 中雨
 * 大雨
 * 暴雨
 * 大暴雨
 * 特大暴雨
 * 强阵雨
 * 强雷阵雨
 * 极端降雨
 * 毛毛雨/细雨
 * 雨
 * 小雨-中雨
 * 中雨-大雨
 * 大雨-暴雨
 * 暴雨-大暴雨
 * 大暴雨-特大暴雨
 * 雨雪天气
 * 雨夹雪
 * 阵雨夹雪
 * 冻雨
 * 雪
 * 阵雪
 * 小雪
 * 中雪
 * 大雪
 * 暴雪
 * 小雪-中雪
 * 中雪-大雪
 * 大雪-暴雪
 * 浮尘
 * 扬沙
 * 沙尘暴
 * 强沙尘暴
 * 龙卷风
 * 雾
 * 浓雾
 * 强浓雾
 * 轻雾
 * 大雾
 * 特强浓雾
 * 热
 * 冷
 * 未知 */
const weatherMap = new Map([
  ["晴", {name: "晴", icon: "☀"}],
  ["多云", {name: "多云", icon: "🌥"}],
  ["大雨", {name: "大雨", icon: "🌧"}],
  ["雷阵雨", {name: "雷阵雨", icon: "⛈"}],
  ["雾", {name: "雾", icon: "🌫"}],
]);

export default function TechnologyPage() {
  const theme = useTheme();

  const gridEl = useRef(null);
  const [loading, setLoading] = useState(true);
  const [width, setWidth] = useState(0);
  const [result, setResult] = useState(null);
  const [date, setDate] = useState("");

  const getResult = async () => {
    return myAxios({
      method: "GET",
      url: "https://restapi.amap.com/v3/weather/weatherInfo",
      params: {key: "b2b5555c7a6df9c845f204275b9804ca", city: 330110, extensions: "base"},
    });
  };

  const update = () => {
    getResult().then(response => setResult(response.data));
  };

  useEffect(() => {
    const controller = new AbortController();
    console.log("📑 Tech Page!");
    document.title = "技术分享 - Andyの博客";
    setLoading(true);
    /* update date */
    const updateDate = () => {
      setDate(new Date().toLocaleDateString());
    };
    updateDate();
    const dateInterval = setInterval(updateDate, 1000);
    /* update weather */
    const updateWeather = () => {
      getResult().then(response => setResult(response.data));
    };
    updateWeather();
    const weatherInterval = setInterval(updateWeather, 15 * 60 * 1000);
    /* dynamic width */
    setWidth(gridEl.current.clientWidth * 17 / 100);
    window.addEventListener(
      "resize",
      () => setWidth(gridEl.current.clientWidth * 17 / 100),
      {signal: controller.signal},
    );
    setLoading(false);
    return () => {
      clearInterval(dateInterval);
      clearInterval(weatherInterval);
      controller.abort();
    };
  }, []);

  return (
    <Box id="TechnologyPage" pt="6rem">
      <Container maxWidth={false}>
        <Grid container columns={100} ref={gridEl}>
          <Grid item xs={0} sm={0} md={17} lg={17} xl={17} display={{xs: "none", md: "block"}}>
            {loading ?
              new Array(10).fill(0).map((v, i) =>
                <Skeleton key={"skeleton" + i} animation="wave" width="100%" height="5rem"/>,
              )
              :
              <Sidebar id="Sidebar" width={width}/>
            }
          </Grid>
          <Grid item xs={0} sm={0} md={1} lg={1} xl={1}/>
          <Grid item xs={100} sm={100} md={82} lg={82} xl={82}>
            <Grid container columns={82} spacing={{xs: 1, sm: 2, md: 0}}>
              <Grid item xs={82} sm={82} md={63} lg={63} xl={63}>
                <Card>
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
                            <Route path="elements/*" element={<Outlet/>}>
                              <Route path="embedded" element={<EmbeddedContent/>}/>
                            </Route>
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
                            <Route path="core/*" element={<Outlet/>}>
                              <Route path="indexed-collections" element={<IndexedCollections/>}/>
                            </Route>
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
                          <Route path="nodejs/*" element={<Outlet/>}>
                            <Route path="package-file" element={<PackageFile/>}/>
                          </Route>
                          <Route path="other/*" element={<Outlet/>}>
                            <Route path="weather-api" element={<WeatherAPI/>}/>
                          </Route>
                          <Route path="*" element={<Navigate to="/tech" replace={true}/>}/>
                        </Routes>
                      </Suspense>
                    </Box>
                  </CardContent>
                  <CardActions>
                    <Toolbar style={{width: "100%", justifyContent: "end", columnGap: "1%"}}>
                      <IconButton title="支持"><ThumbUpIcon/></IconButton>
                      <IconButton title="反对"><ThumbDownIcon/></IconButton>
                      <IconButton title="分享"><ShareIcon/></IconButton>
                      <IconButton title="Bug反馈"><BugReport/></IconButton>
                    </Toolbar>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={0} sm={0} md={1} lg={1} xl={1}/>
              <Grid item xs={82} sm={82} md={18} lg={18} xl={18} display="flex" rowGap={2} flexDirection="column">
                <Card id="DatetimeCard" style={{minHeight:"15rem"}}>
                  <CardContent>
                    <Typography variant="h6" align="right">{date}</Typography>
                    <Divider sx={{mb:2}}/>
                    <ColorfulPixelClock/>
                  </CardContent>
                </Card>
                <Card id="WeatherCard">
                  <CardContent>
                    <Typography variant="h6">
                      {result === null ? "***" : `${result["lives"][0]["province"]}省${result["lives"][0]["city"]}`}
                      实时天气 <IconButton color="success" onClick={update}><Refresh/></IconButton>
                    </Typography>
                    {result === null ? "loading" :
                      <Stack direction="row" columnGap={2} justifyContent="center" alignItems="center">
                        <Typography variant="h5">{result["lives"][0]["weather"]}</Typography>
                        <Typography variant="h1" color="orange">
                          {weatherMap.get(result["lives"][0]["weather"]).icon}
                        </Typography>
                        <Typography variant="h5">{result["lives"][0]["temperature"]}℃</Typography>
                      </Stack>
                    }
                    {/*<pre>
                      <code>
                        {JSON.stringify(result, null, 2)}
                      </code>
                    </pre>*/}
                  </CardContent>
                </Card>
                <Card>

                </Card>
                <Card></Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
