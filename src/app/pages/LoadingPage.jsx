import {Stack, CircularProgress} from "@mui/material";

export const LoadingPage = () => {
  return (
    <Stack id="LoadingPage" height={document.documentElement.clientHeight - 64} alignItems="center" justifyContent="center">
      <CircularProgress size={200} color="warning"/>
    </Stack>
  );
};
