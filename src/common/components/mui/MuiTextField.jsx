import {styled, TextField} from "@mui/material";

const MuiTextField = styled(props => <TextField {...props}/>)(({theme}) => ({
  "& label.Mui-focused": {},
  "& .MuiInput-underline:after": {},
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: theme.palette.text.disabled,
    },
    "&:hover fieldset": {
      borderColor: theme.palette.text.disabled,
    },
    "&.Mui-focused fieldset": {},
  },
}));

export default MuiTextField;
