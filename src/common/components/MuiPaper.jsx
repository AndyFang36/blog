import {Paper} from "@mui/material";
import {useSelector} from "react-redux";

export const MuiPaper = (props) => {
  const {children, sx, ...others} = props;
  const theme = useSelector(state => state["themeToggle"]["theme"]);

  return (
    <Paper sx={{color: theme.palette.text.primary, backgroundColor: theme.palette.background.paper, ...sx}} {...others}>
      {children}
    </Paper>
  );
};
