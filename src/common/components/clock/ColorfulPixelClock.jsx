import {Grid, Stack} from "@mui/material";
import {FC, useEffect, useMemo, useRef, useState} from "react";
import {colorUtil} from "../../utils/colorUtil";
import {GridProps} from "@mui/material";

const DisplayBlock: FC<{ char: string }> = ({char}) => {
  const displayMap = new Map([
  [":", [4, 10]],
  ["0", [0, 1, 2, 3, 5, 6, 8, 9, 11, 12, 13, 14]],
  ["1", [1, 4, 7, 10, 13]],
  ["2", [0, 1, 2, 5, 6, 7, 8, 9, 12, 13, 14]],
  ["3", [0, 1, 2, 5, 7, 8, 11, 12, 13, 14]],
  ["4", [0, 2, 3, 5, 6, 7, 8, 11, 14]],
  ["5", [0, 1, 2, 3, 6, 7, 8, 11, 12, 13, 14]],
  ["6", [0, 1, 2, 3, 6, 7, 8, 9, 11, 12, 13, 14]],
  ["7", [0, 1, 2, 5, 8, 11, 14]],
  ["8", [0, 1, 2, 3, 5, 6, 7, 8, 9, 11, 12, 13, 14]],
  ["9", [0, 1, 2, 3, 5, 6, 7, 8, 11, 12, 13, 14]],
]);

  const [height, setHeight] = useState(0);
  const gridContainerRef = useRef(null);

  const ColorGrid = (props: GridProps) => <Grid item xs={4} sm={4} md={4} lg={4} xl={4} height={height} {...props}/>;

  useEffect(() => {
    const controller = new AbortController();
    const handleHeightSetting = () => setHeight(gridContainerRef.current.scrollWidth / 3);
    handleHeightSetting();
    window.addEventListener("resize", handleHeightSetting, {signal: controller.signal});
    return () => controller.abort();
  }, []);

  return (
    <Grid className={`display-block ${char === ":" ? "colon" : "char"}`} ref={gridContainerRef} container>
      {new Array(15).fill(null).map((o, i) => (displayMap.get(char).includes(i) ?
          <ColorGrid bgcolor={colorUtil.getRandomColor(0.9)} key={`grid-${i}`}/> :
          <ColorGrid key={`grid-${i}`}/>
      ))}
    </Grid>
  );
};

export default function ColorfulPixelClock() {
  const initDate = new Date();
  const [colon1, setColon1] = useState(true);
  const [colon2, setColon2] = useState(true);
  const [hours1, setHours1] = useState(initDate.getHours().toString().padStart(2, "0").charAt(0));
  const [hours2, setHours2] = useState(initDate.getHours().toString().padStart(2, "0").charAt(1));
  const [minutes1, setMinutes1] = useState(initDate.getMinutes().toString().padStart(2, "0").charAt(0));
  const [minutes2, setMinutes2] = useState(initDate.getMinutes().toString().padStart(2, "0").charAt(1));
  const [seconds1, setSeconds1] = useState(initDate.getSeconds().toString().padStart(2, "0").charAt(0));
  const [seconds2, setSeconds2] = useState(initDate.getSeconds().toString().padStart(2, "0").charAt(1));

  // 只有当值改变时，才重新渲染颜色
  const Colon1 = useMemo(() => <DisplayBlock char=":"/>, [colon1]);  // eslint-disable-line
  const Colon2 = useMemo(() => <DisplayBlock char=":"/>, [colon2]);  // eslint-disable-line
  const Hours1 = useMemo(() => <DisplayBlock char={hours1}/>, [hours1]);
  const Hours2 = useMemo(() => <DisplayBlock char={hours2}/>, [hours2]);
  const Minutes1 = useMemo(() => <DisplayBlock char={minutes1}/>, [minutes1]);
  const Minutes2 = useMemo(() => <DisplayBlock char={minutes2}/>, [minutes2]);
  const Seconds1 = useMemo(() => <DisplayBlock char={seconds1}/>, [seconds1]);
  const Seconds2 = useMemo(() => <DisplayBlock char={seconds2}/>, [seconds2]);

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      if (date.getMinutes() === 0 && date.getMinutes() === 0) {
        setColon1(prev => !prev);
        setColon2(prev => !prev);
      }
      setHours1(date.getHours().toString().padStart(2, "0").charAt(0));
      setHours2(date.getHours().toString().padStart(2, "0").charAt(1));
      setMinutes1(date.getMinutes().toString().padStart(2, "0").charAt(0));
      setMinutes2(date.getMinutes().toString().padStart(2, "0").charAt(1));
      setSeconds1(date.getSeconds().toString().padStart(2, "0").charAt(0));
      setSeconds2(date.getSeconds().toString().padStart(2, "0").charAt(1));
    }, 1000);
    return () => clearInterval(interval);
  });

  return (
    <Stack id="ColorfulPixelClock" direction="row" columnGap={1} sx={{"& *": {"transition": "none"}}}>
      {Hours1}{Hours2}{Colon1}{Minutes1}{Minutes2}{Colon2}{Seconds1}{Seconds2}
    </Stack>
  );
}
