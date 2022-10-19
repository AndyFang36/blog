function showDevicePixelRatio() {
  console.info("device pixel ratio: " + window.devicePixelRatio);
}

function showWidthAndHeight() {
  // width
  console.info("window innerWidth: " + window.innerWidth);
  console.info("window outerWidth: " + window.outerWidth);
  console.info("window screen width: " + window.screen.width);
  console.info("window screen availWidth: " + window.screen.availWidth);
  console.info("doc clientWidth: " + document.documentElement.clientWidth);
  console.info("doc offsetWidth: " + document.documentElement.offsetWidth);
  console.info("doc scrollWidth: " + document.documentElement.scrollWidth);
  // height
  console.info("window innerHeight: " + window.innerHeight);
  console.info("window outerHeight: " + window.outerHeight);
  console.info("window screen height: " + window.screen.height);
  console.info("window screen availHeight: " + window.screen.availHeight);
  console.info("doc clientHeight: " + document.documentElement.clientHeight);
  console.info("doc offsetHeight: " + document.documentElement.offsetHeight);
  console.info("doc scrollHeight: " + document.documentElement.scrollHeight);
}

export {showDevicePixelRatio, showWidthAndHeight};
