import {Card, useTheme} from "@mui/material";

export default function MuiCard(props) {
  const {children, sx, ...others} = props;
  const theme = useTheme();

  return (
    <Card sx={{color: theme.palette.text.primary, backgroundColor: theme.palette.background.paper, ...sx}} {...others}>
      {children}
    </Card>
  );
}
