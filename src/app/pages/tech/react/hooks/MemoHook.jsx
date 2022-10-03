import {useMemo, useState} from "react";
import {Box, Stack, Typography} from "@mui/material";

function factorialOf(n) {
  console.log("factorialOf(n) called!");
  return (n <= 0) ? 1 : n * factorialOf(n - 1);
}

const Demo1 = () => {
  const [number, setNumber] = useState(1);
  const [i, setI] = useState(0);

  const factorial = factorialOf(number);
  const onChange = event => {
    setNumber(Number(event.target.value));
  };
  const onClick = () => setI(i => i + 1);

  return (
    <Box className="demo">
      <Typography variant="h2">📌 Demo 1: Without <code>useMemo</code></Typography>
      <Typography>Factorial of<input type="number" value={number} onChange={onChange}/>is {factorial}</Typography>
      <button onClick={onClick}>Re-render</button>: {i}
    </Box>
  );
};

const Demo2 = () => {
  const [number, setNumber] = useState(1);
  const [i, setI] = useState(0);

  const factorial = useMemo(() => factorialOf(number), [number]);
  const onChange = (e) => {
    setNumber(Number(e.target.value));
  };
  const onClick = () => setI(i => i + 1);

  return (
    <Box className="demo">
      <Typography variant="h2">📌 Demo 2: With <code>useMemo</code></Typography>
      <Typography>Factorial of<input type="number" value={number} onChange={onChange}/>is {factorial}</Typography>
      <button onClick={onClick}>Re-render</button>: {i}
    </Box>
  );
};

export default function MemoHook() {
  return (
    <Box id="MemoHook">
      <Typography variant="h1">useMemo() hook</Typography>
      <Typography variant="body2">
        useMemo() is a built-in React hook that accepts 2 arguments — a function compute that computes a result and the depedencies array:

        const memoizedResult = useMemo(compute, dependencies);
        During initial rendering, useMemo(compute, dependencies) invokes compute, memoizes the calculation result, and returns it to the component.

        If during next renderings the dependencies don't change, then useMemo() doesn't invoke compute but returns the memoized value.

        But if dependencies change during re-rendering, then useMemo() invokes compute, memoizes the new value, and returns it.

        That's the essence of useMemo() hook.
      </Typography>
      <Typography paragraph>
        each time you click Re-render button, inc state value is updated. Updating inc state value triggers <code>CalculateFactorial</code> re-rendering. But, as a secondary effect, during re-rendering the factorial is recalculated again — 'factorialOf(n) called!' is logged to console.
      </Typography>
      <Typography className="tip">请通过控制台比较差异！</Typography>
      <Stack className="demo-stack" spacing={5}>
        <Demo1/>
        <Demo2/>
      </Stack>
    </Box>
  );
};
