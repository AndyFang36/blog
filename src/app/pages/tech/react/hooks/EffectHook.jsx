import {Box, Stack, Typography} from "@mui/material";
import {useEffect, useState} from "react";

const Demo = () => {
  const data = {
    Colors: ["red", "green", "yellow"],
    Fruits: ["Apple", "mango", "Banana"]
  };

  const [currentChoice, setCurrentChoice] = useState("Colors");
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(data[currentChoice]);
    console.log("Data is fetched!");
  }, [currentChoice]);

  return <Box className="demo">
    <button onClick={() => setCurrentChoice("Colors")}>Colors</button>
    <button onClick={() => setCurrentChoice("Fruits")}>Fruits</button>
    {items.map(item => {return <div key={item}>{item}</div>;})}
  </Box>;
};

export default function EffectHook() {
  return (
    <Box id="EffectHook">
      <Typography>
        useEffect
        useEffect有两个参数，第一个参数是回调函数，第二个参数是一个数组，这个数组接受当前函数中的state，若第二个参数状态变化时，则执行回调函数；
        useEffect只对当前函数中的状态更新有效；
      </Typography>
      <Stack spacing={5}>
        <Demo/>
      </Stack>
    </Box>
  );
}
