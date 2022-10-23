import {Box, CircularProgress, Container, FormControlLabel, Stack, Switch, Toolbar, Typography} from "@mui/material";
import {APILoader, ControlBarControl, Geolocation, HawkEyeControl, Map, MapTypeControl, Marker, ScaleControl, ToolBarControl, Weather} from "@uiw/react-amap";
import {useEffect, useState} from "react";

export default function BasicMap() {
  const [display, setDisplay] = useState(true);
  const [loading, setLoading] = useState(true);
  const [weather, setWeather] = useState(null);
  const change = (event) => {
    setDisplay(event.target.checked);
  };

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    setTimeout(() => setLoading(false), 1000);
    return () => controller.abort();
  }, []);
  return(
    <Box id="BasicMap">
      <Container maxWidth={false} id="AMapContainer">
        <Toolbar disableGutters={true}>
          <FormControlLabel label={display ? "已启用" : "已卸载"} control={<Switch color="warning" checked={display} onChange={change}/>}/>
        </Toolbar>
        <Typography variant="h6">杭州天气：{weather ? JSON.stringify(weather, null, 2) : ""}</Typography>
        <Stack alignItems="center" justifyContent="center" height="70vh" minHeight={600}>
          {loading ? <CircularProgress color="warning" size={100}/> :
            <APILoader akay="6244692d6d61d27fbe596a4f06d0d55d">
              <Weather city="杭州市" onComplete={data => setWeather(data)} onError={err => console.error(err)}/>
              {display &&
                <Map>
                  <ScaleControl visiable={true} offset={[20, 20]} position="RB"/>
                  <HawkEyeControl visiable={true} offset={[30, 60]}/>
                  <ToolBarControl visiable={true} offset={[20, 20]} position="LT"/>
                  <MapTypeControl visiable={true} offset={[30, 20]} position="RT"/>
                  <ControlBarControl visiable={true} offset={[30, 150]} position="RT"/>
                  <Marker visiable={true} title="浙江省" position={new window.AMap.LngLat(120.153576, 30.287459)}/>
                  <Geolocation
                    enableHighAccuracy={true}
                    zoomToAccuracy={true}
                    timeout={10000}
                    position="LB"
                    offset={[50,50]}
                    onComplete={data => {console.log('返回数据：', null, data);}}
                    onError={err => console.error(err)}
                  />
                </Map>
              }
            </APILoader>
          }
        </Stack>
      </Container>
    </Box>
  )
}
