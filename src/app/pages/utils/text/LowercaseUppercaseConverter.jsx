import {Box, Button, IconButton, Stack, TextField, Tooltip, Typography, useTheme} from "@mui/material";
import {useEffect, useState} from "react";
import {LoadingButton} from "@mui/lab";
import {CopyAll, PlayArrow} from "@mui/icons-material";

export default function LowercaseUppercaseConverter() {
  const theme = useTheme();
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

  const reset = () => {
    setValue("");
    setResult("");
  };

  useEffect(() => {
    setLoading(false);
  }, [result]);

  return (
    <Box id="LowercaseUppercaseConverter">
      <Typography variant="h6">LowercaseUppercaseConverter</Typography>
      <Stack direction="row" columnGap={2} justifyContent="center" alignItems="center">
        <TextField
          error={value === "" ? false : !new RegExp(/^[^\u4e00-\u9fa5]+$/).test(value)}
          multiline={true}
          minRows={5}
          label="Lowercase"
          placeholder="请输入"
          variant="outlined"
          InputProps={{style: {color: theme.palette.text.primary}}}
          InputLabelProps={{style: {color: theme.palette.text.disabled}}}
          value={value}
          onChange={changeValue}
          disabled={loading}
          helperText="不能输入汉字"
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
        <Button onClick={reset} type="reset" variant="contained">清空</Button>
        <TextField
          multiline={true}
          minRows={2}
          label="Uppercase"
          placeholder="请转换"
          InputProps={{style: {color: theme.palette.text.primary}}}
          InputLabelProps={{style: {color: theme.palette.text.disabled}}}
          value={result}
          disabled
        />
        <Tooltip title="复制" arrow={true}>
          <IconButton><CopyAll color="success"/></IconButton>
        </Tooltip>
      </Stack>
    </Box>
  );
}
