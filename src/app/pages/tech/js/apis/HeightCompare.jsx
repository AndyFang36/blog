import {Box, Button, Checkbox, Divider, FormControlLabel, IconButton, Stack, Typography} from "@mui/material";
import {useEffect, useRef, useState} from "react";
import {Refresh} from "@mui/icons-material";

export default function HeightCompare() {
  const [height, setHeight] = useState({
    docScrollHeight: document.documentElement.scrollHeight,
    docClientHeight: document.documentElement.clientHeight,
    docOffsetHeight: document.documentElement.offsetHeight,
    winInnerHeight: window.innerHeight,
    winOuterHeight: window.outerHeight,
    screenHeight: window.screen.height,
    screenAvailHeight: window.screen.availHeight,
  });

  const [unread, setUnread] = useState(true);
  const agreementEl = useRef(null);

  const reset = () => {
    setUnread(true);
    agreementEl.current.scrollTop = 0;
    agreementEl.current.style.scrollBehavior = "smooth";
  };

  useEffect(() => {
    const controller = new AbortController();
    window.addEventListener("resize", () => {
      setHeight({
        docScrollHeight: document.documentElement.scrollHeight,
        docClientHeight: document.documentElement.clientHeight,
        docOffsetHeight: document.documentElement.offsetHeight,
        winInnerHeight: window.innerHeight,
        winOuterHeight: window.outerHeight,
        screenHeight: window.screen.height,
        screenAvailHeight: window.screen.availHeight,
      });
    });
    const agreement = agreementEl.current;
    agreement?.addEventListener("scroll", () => {
      if (Math.abs(agreement.scrollHeight - agreement.clientHeight - agreement.scrollTop) < 1) {
        setUnread(false);
      }
    });
    return () => controller.abort();
  }, []);

  return (
    <Box id="HeightCompare">
      <Typography variant="h1" align="center" mb={3}>js各种高度的比较</Typography>
      <Typography variant="h2">📌 Resize the window to see the difference!</Typography>
      <Stack spacing={3}>
        <Typography variant="h6">document scrollHeight: {height.docScrollHeight}px</Typography>
        <Typography variant="h6">document clientHeight: {height.docClientHeight}px</Typography>
        <Typography variant="h6">document offsetHeight: {height.docOffsetHeight}px</Typography>
        <Typography variant="h6">window innerHeight: {height.winInnerHeight}px</Typography>
        <Typography variant="h6">window outerHeight: {height.winOuterHeight}px</Typography>
        <Typography variant="h6">screen height: {height.screenHeight}px</Typography>
        <Typography variant="h6">screen availHeight: {height.screenAvailHeight}px</Typography>
      </Stack>
      <Box className="demo" mt={5}>
        <Typography variant="h2">📌 Determine if an element has been totally scrolled</Typography>
        <Typography variant="body1" fontWeight="bolder">
          scrollTop is a non-rounded number, while scrollHeight and clientHeight are rounded — so the only way to determine if the scroll area is scrolled to the bottom is by seeing if the scroll amount is close enough to some threshold (in this example 1):
        </Typography>
        <Divider sx={{mb: 2}}/>
        <Typography variant="body1" paragraph id="Agreement" ref={agreementEl} height={300} style={{overflowY: "auto"}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at laoreet magna.
          Aliquam erat volutpat. Praesent molestie, dolor ut eleifend aliquam, mi ligula ultrices sapien, quis cursus
          neque dui nec risus. Duis tincidunt lobortis purus eu aliquet. Quisque in dignissim magna. Aenean ac lorem at
          velit ultrices consequat. Nulla luctus nisi ut libero cursus ultrices. Pellentesque nec dignissim enim.
          Phasellus
          ut quam lacus, sed ultricies diam. Vestibulum convallis rutrum dolor, sit amet egestas velit scelerisque id.
          Proin non dignissim nisl. Sed mi odio, ullamcorper eget mattis id, malesuada vitae libero. Integer dolor
          lorem,
          mattis sed dapibus a, faucibus id metus. Duis iaculis dictum pulvinar. In nisi nibh, dapibus ac blandit at,
          porta
          at arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
          Praesent
          dictum ipsum aliquet erat eleifend sit amet sollicitudin felis tempus. Aliquam congue cursus venenatis.
          Maecenas
          luctus pellentesque placerat. Mauris nisl odio, condimentum sed fringilla a, consectetur id ligula. Praesent
          sem
          sem, aliquet non faucibus vitae, iaculis nec elit. Nullam volutpat, lectus et blandit bibendum, nulla lorem
          congue
          turpis, ac pretium tortor sem ut nibh. Donec vel mi in ligula hendrerit sagittis. Donec faucibus viverra
          fermentum.
          Fusce in arcu. Nullam at dignissim massa. Cras nibh est, pretium sit amet faucibus eget, sollicitudin in
          ligula. Vivamus vitae urna mauris, eget euismod nunc. Aenean semper gravida enim non feugiat. In hac habitasse
          platea dictumst. Cras eleifend nisl volutpat ante condimentum convallis. Donec varius dolor malesuada erat
          consequat congue. Donec eu lacus ut sapien venenatis tincidunt. Quisque sit amet tellus et enim bibendum
          varius
          et
          a orci. Donec aliquet volutpat scelerisque. Proin et tortor dolor. Ut aliquet, dolor a mattis sodales, odio
          diam
          pulvinar sem, egestas pretium magna eros vitae felis. Nam vitae magna lectus, et ornare elit. Morbi feugiat,
          ipsum
          ac mattis congue, quam neque mollis tortor, nec mollis nisl dolor a tortor. Maecenas varius est sit amet elit
          interdum quis placerat metus posuere. Duis malesuada justo a diam vestibulum vel aliquam nisi ornare. Integer
          laoreet nisi a odio ornare non congue turpis eleifend. Cum sociis natoque penatibus et magnis dis parturient
          montes,
          nascetur ridiculus mus. Cras vulputate libero sed arcu iaculis nec lobortis orci fermentum.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at laoreet magna.
          Aliquam erat volutpat. Praesent molestie, dolor ut eleifend aliquam, mi ligula ultrices sapien, quis cursus
          neque dui nec risus. Duis tincidunt lobortis purus eu aliquet. Quisque in dignissim magna. Aenean ac lorem at
          velit ultrices consequat. Nulla luctus nisi ut libero cursus ultrices. Pellentesque nec dignissim enim.
          Phasellus
          ut quam lacus, sed ultricies diam. Vestibulum convallis rutrum dolor, sit amet egestas velit scelerisque id.
          Proin non dignissim nisl. Sed mi odio, ullamcorper eget mattis id, malesuada vitae libero. Integer dolor
          lorem,
          mattis sed dapibus a, faucibus id metus. Duis iaculis dictum pulvinar. In nisi nibh, dapibus ac blandit at,
          porta
          at arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
          Praesent
          dictum ipsum aliquet erat eleifend sit amet sollicitudin felis tempus. Aliquam congue cursus venenatis.
          Maecenas
          luctus pellentesque placerat. Mauris nisl odio, condimentum sed fringilla a, consectetur id ligula. Praesent
          sem
          sem, aliquet non faucibus vitae, iaculis nec elit. Nullam volutpat, lectus et blandit bibendum, nulla lorem
          congue
          turpis, ac pretium tortor sem ut nibh. Donec vel mi in ligula hendrerit sagittis. Donec faucibus viverra
          fermentum.
          Fusce in arcu. Nullam at dignissim massa. Cras nibh est, pretium sit amet faucibus eget, sollicitudin in
          ligula. Vivamus vitae urna mauris, eget euismod nunc. Aenean semper gravida enim non feugiat. In hac habitasse
          platea dictumst. Cras eleifend nisl volutpat ante condimentum convallis. Donec varius dolor malesuada erat
          consequat congue. Donec eu lacus ut sapien venenatis tincidunt. Quisque sit amet tellus et enim bibendum
          varius
          et
          a orci. Donec aliquet volutpat scelerisque. Proin et tortor dolor. Ut aliquet, dolor a mattis sodales, odio
          diam
          pulvinar sem, egestas pretium magna eros vitae felis. Nam vitae magna lectus, et ornare elit. Morbi feugiat,
          ipsum
          ac mattis congue, quam neque mollis tortor, nec mollis nisl dolor a tortor. Maecenas varius est sit amet elit
          interdum quis placerat metus posuere. Duis malesuada justo a diam vestibulum vel aliquam nisi ornare. Integer
          laoreet nisi a odio ornare non congue turpis eleifend. Cum sociis natoque penatibus et magnis dis parturient
          montes,
          nascetur ridiculus mus. Cras vulputate libero sed arcu iaculis nec lobortis orci fermentum.
        </Typography>
      </Box>
      <FormControlLabel disabled={unread} control={<Checkbox color="success"/>} label="同意协议"/>
      <IconButton onClick={reset} color="warning" title="重置"><Refresh/></IconButton>
    </Box>
  );
}
