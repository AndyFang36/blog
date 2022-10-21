import {useState} from "react";
import {ClickAwayListener, IconButton, Tooltip, Zoom} from "@mui/material";

export default function MyTooltip(props) {
  const {title, hover = true, focus = false, touch = false, click = false, arrow = true, sx, children, ...others} = props;
  const [open, setOpen] = useState(false);

  return click ?
    <ClickAwayListener onClickAway={() => setOpen(false)}>
      <Tooltip
        title={title}
        arrow={arrow}
        PopperProps={{disablePortal: true,}}
        open={open}
        onClose={() => setOpen(false)}
        disableFocusListener
        disableHoverListener
        disableTouchListener
        TransitionComponent={Zoom}
        sx={sx}
        {...others}
      >
        <IconButton onClick={() => setOpen(!open)}>{children}</IconButton>
      </Tooltip>
    </ClickAwayListener>
    :
    <Tooltip
      title={title}
      arrow={arrow}
      disableFocusListener={!focus}
      disableHoverListener={!hover}
      disableTouchListener={!touch}
      TransitionComponent={Zoom}
      sx={sx}
      {...others}
    >
      <IconButton>{children}</IconButton>
    </Tooltip>;
}
