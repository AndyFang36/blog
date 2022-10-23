import {Box, Link as MuiLink, Typography} from "@mui/material";

export default function WeatherAPI() {
  return (
    <Box id="WeatherAPI">
      <Typography variant="h1" align="center">最好用的 6 个免费天气 API </Typography>
      <Typography>
        原文地址：
        <MuiLink href="https://kalacloud.com/blog/free-weather-api/">
          https://kalacloud.com/blog/free-weather-api/
        </MuiLink>
      </Typography>
      <Typography paragraph>
        天气 API 包含丰富的天气数据，不仅有实时温度、湿度、风速、降水等这些基础数据，还有过去的历史天气数据和未来的天气预测数据，顶级的天气 API 接口还会包括天气灾害预警，空气质量指数，日出日落、潮汐及月相相关的天文气象等数据。
        天气 API 也并不难获得，本教程将介绍 6 款国内外免费的天气 API，并手把手教你搭建一套属于自己的天气数据看板。
      </Typography>
      <Typography variant="h2">一、高德地图天气 API - 稳定、免费、极简</Typography>
      <Typography variant="h2">二、和风天气 API - 免费付费同权限，非商业无限免费</Typography>
      <Typography variant="h2">三、知心天气 API - 免费、轻便、专业</Typography>
      <Typography variant="h2">四、OpenWeather - 100 万次/月 分钟级实时预报 天气云图</Typography>
      <Typography variant="h2">五、AccuWeather - 全球最大的气象数据服务商 历史悠久 数据精准</Typography>
      <Typography variant="h2">六、Visual Crossing - 非开发者友好 50年历史气象数据免费调用</Typography>
    </Box>
  );
}
