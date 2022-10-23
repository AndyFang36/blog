import {ReactElement} from "react";
import {Box, Button, Stack, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import {Home} from "@mui/icons-material";

interface ErrorProp {
  code?: 404 | 400 | 500,
  type?:
    "NOT_FOUND" |
    "BAD_REQUEST" |
    "Unauthorized";
}

export default function ErrorPage(props: ErrorProp): ReactElement {
  const {type, code} = props;

  const result = () => {
    if (type !== undefined) {
      switch (type) {
        case "BAD_REQUEST":
          return (
            <></>
          );
        case "NOT_FOUND":
          return (
            <Typography variant="h1">404 Not Found!!!</Typography>
          );
        case "Unauthorized":
          return (
            <></>
          );
        default:
          console.error(`Not supported error type: ${type}`);
          return null;
      }
    } else if (code !== undefined) {
      switch (code) {

      }
    } else {
      throw new Error("coed or type is required!");
    }
  };

  return (
    <Stack height="100vh" rowGap={2} justifyContent="center" alignItems="center" color="red">
      {result()}
      <Link to="/blog">
        <Button startIcon={<Home/>} variant="contained" size="large">Go Home</Button>
      </Link>
    </Stack>
  );
}
