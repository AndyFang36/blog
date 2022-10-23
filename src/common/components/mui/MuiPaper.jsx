import {Paper, useTheme} from "@mui/material";

export const MuiPaper = (props) => {
  const {children, sx, ...others} = props;
  const theme = useTheme();

  return (
    <Paper sx={{color: theme.palette.text.primary, backgroundColor: theme.palette.background.paper, ...sx}} {...others}>
      {children}
    </Paper>
  );
};
