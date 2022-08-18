import {useState} from "react";
import {Box, Container, Typography} from "@mui/material";
import {FreeMode, Navigation, Thumbs} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import WelcomeVideo from "../../assets/videos/welcome.mp4";
import PosterImg from "../../assets/images/posters/poster.jpg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "../../assets/styles/GalleryPage.css";

export const GalleryPage = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <Box id="GalleryPage">
      <Box className="video-wrapper">
        <video autoPlay muted loop preload="none" src={WelcomeVideo} poster={PosterImg} width="100%">
          Your browser does not support the video tag.
        </video>
        <Typography variant="h1" align="center">Welcome To My Gallery!</Typography>
      </Box>
      <Container id="FirstSwiper" maxWidth={false} disableGutters sx={{height: {"md": "700px", "xl": "940px"}}}>
        <Swiper
          className="main-swiper"
          style={{"--swiper-navigation-color": "#fff", "--swiper-pagination-color": "#fff"}}
          loop={true}
          spaceBetween={10}
          navigation={true}
          thumbs={{swiper: thumbsSwiper}}
          modules={[FreeMode, Navigation, Thumbs]}
        >
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-1.jpg" alt="banner 1"/>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-2.jpg"/>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-3.jpg"/>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-4.jpg"/>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-5.jpg"/>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-6.jpg"/>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-7.jpg"/>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-8.jpg"/>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-9.jpg"/>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-10.jpg"/>
          </SwiperSlide>
        </Swiper>
        <Swiper
          className="nav-swiper"
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
        >
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-1.jpg"/>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-2.jpg"/>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-3.jpg"/>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-4.jpg"/>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-5.jpg"/>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-6.jpg"/>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-7.jpg"/>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-8.jpg"/>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-9.jpg"/>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-10.jpg"/>
          </SwiperSlide>
        </Swiper>
      </Container>
    </Box>
  );
};
