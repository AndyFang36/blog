import {useSelector} from "react-redux";
import {FormLabel} from "@mui/material";

export default function MyFormLabel(props) {
  const {children, sx, ...others} = props;
  const theme = useSelector(state => state["themeToggle"]["theme"]);
  const style = {
    color: theme.palette.text.disabled,
    fontSize: "1.5rem",
    display: "flex",
    alignItems: "center"
  }

  return (
    <FormLabel component="div" sx={{...style, ...sx}} {...others}>
      {children}
    </FormLabel>
  );
}
