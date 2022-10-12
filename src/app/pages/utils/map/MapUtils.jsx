import {Box, Button} from "@mui/material";
import {Routes, Route, NavLink} from "react-router-dom";
import BasicMap from "./BasicMap";

export default function MapUtils() {
  return(
    <Box id="MapUtils">
      <NavLink to="/utils/map/basic">
        <Button variant="contained" color="success">基础地图</Button>
      </NavLink>
      <Routes>
        <Route path="basic" element={<BasicMap/>} index/>
      </Routes>
    </Box>
  )
}
