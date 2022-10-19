import {Typography} from "@mui/material";

export default function ArticleTitle(props) {
  const {children, ...others} = props;

  return(
    <Typography variant="h1" align="center" {...others}>
      {children}
    </Typography>
  )
}
