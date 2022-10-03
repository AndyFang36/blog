import {Skeleton, Stack} from "@mui/material";

export default function ArticleLoading() {
  return (
    <Stack id="ArticleLoading" spacing={1}>
      {/* For variant="text", adjust the height via font-size */}
      <Skeleton variant="text" sx={{fontSize: "1rem"}}/>
      {/* For other variants, adjust the size with `width` and `height` */}
      <Skeleton variant="circular" height={40}/>
      <Skeleton variant="rectangular" height={60}/>
      <Skeleton variant="rounded" height={60}/>
    </Stack>
  );
}
