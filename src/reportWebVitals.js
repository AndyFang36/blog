/**
 * <li>Largest Contentful Paint (LCP):</li>
 *   measures loading performance.
 *   To provide a good user experience, LCP should occur within 2.5 seconds of when the page first starts loading.
 * <li>First Input Delay (FID):</li>
 *   measures interactivity. To provide a good user experience, pages should have a FID of 100 milliseconds or less.
 * <li>Cumulative Layout Shift (CLS):</li>
 *   measures visual stability.
 *   To provide a good user experience, pages should maintain a CLS of 0.1. or less.
 *   Time to First Byte (TTFB):
 *   The time to the first byte measures the delay between the moment a user requests our page and when the first byte of the response arrives.
 *
 * First Contentful Paint (FCP):
 *   The first contentful paint measures the delay between when the page starts loading and when any part of the content is visible. Again, we should strive to have an FCP of 1.8 seconds or lower.
* */

const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
