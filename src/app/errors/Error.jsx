import {ReactElement} from "react";
import {Box, Typography} from "@mui/material";

interface ErrorProp {
  type:
    "NOT_FOUND" |
    "BAD_REQUEST" |
    "Unauthorized";
}

export default function Error(props: ErrorProp): ReactElement {
  const {type} = props;

  const result = () => {
    switch (type) {
      case "BAD_REQUEST":
        return (
          <></>
        );
      case "NOT_FOUND":
        return (
          <></>
        );
      case "Unauthorized":return (
        <></>
      )
      default:
        console.error(`Not supported error type: ${type}`);
        return null;
    }
  };

  return (
    <Box>
      {result()}
    </Box>
  );
}
