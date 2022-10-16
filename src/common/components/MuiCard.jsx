import {useSelector} from "react-redux";
import {Card} from "@mui/material";

export default function MuiCard(props) {
  const {children, sx, ...others} = props;
  const theme = useSelector(state => state["themeToggle"]["theme"]);

  return (
    <Card sx={{color: theme.palette.text.primary, backgroundColor: theme.palette.background.paper, ...sx}} {...others}>
      {children}
    </Card>
  );
}
