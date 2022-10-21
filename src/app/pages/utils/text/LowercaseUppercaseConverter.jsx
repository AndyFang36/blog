import {Box, Button, styled, TextField, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import {LoadingButton} from "@mui/lab";
import {PlayArrow} from "@mui/icons-material";
import {useSelector} from "react-redux";
import MuiTextField from "../../../../common/components/mui/MuiTextField";

export default function LowercaseUppercaseConverter() {
  const theme = useSelector(state => state["themeToggle"]["theme"]);
  /*const MuiTextField = styled(props => <TextField {...props}/>)({
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
  });*/
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  const changeValue = (e) => {
    setValue(e.target.value);
  };

  const convert = () => {
    setLoading(true);
    setResult(value.toUpperCase());
  };

  useEffect(() => {
    setLoading(false);
  }, [result]);

  return (
    <Box id="LowercaseUppercaseConverter">
      <Typography variant="h6">LowercaseUppercaseConverter</Typography>

      <MuiTextField
        label="Lowercase"
        placeholder="请输入"
        variant="outlined"
        InputProps={{style: {color: theme.palette.text.primary}}}
        InputLabelProps={{style: {color: theme.palette.text.disabled}}}
        value={value}
        onChange={changeValue}
        disabled={loading}
        theme={theme}
      />
      <LoadingButton
        onClick={convert}
        loading={loading}
        loadingPosition="start"
        startIcon={<PlayArrow/>}
        variant="contained"
        disabled={value === ""}
      >
        转换
      </LoadingButton>
      <Button onClick={() => setValue("")} variant="contained">清空</Button>
      <TextField
        label="Uppercase"
        placeholder="请转换"
        InputProps={{style: {color: theme.palette.text.primary}}}
        InputLabelProps={{style: {color: theme.palette.text.disabled}}}
        value={result}
        disabled
      />
    </Box>
  );
}
