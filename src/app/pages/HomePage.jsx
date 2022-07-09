/** components */
import {Box, Container, Stack, Typography} from "@mui/material";
import {A11y, Navigation, Pagination} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
/** images */
import BannerImg1 from "../../assets/images/banners/home/home-1.jpg";
import BannerImg2 from "../../assets/images/banners/home/home-2.jpg";
import BannerImg3 from "../../assets/images/banners/home/home-3.jpg";
/** css */
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "../../assets/styles/HomePage.css";

/** Home Page, path: / */
export const HomePage = () => {
  return (
    <Box id="HomePage">
      <Box id="BannerSwiperBox">
        <Swiper
          className="banner-swiper"
          modules={[Navigation, Pagination, A11y]}
          slidesPerView={1}
          navigation
          pagination={{clickable: true}}
        >
          <SwiperSlide><img src={BannerImg1} alt="1"/></SwiperSlide>
          <SwiperSlide><img src={BannerImg2} alt="2"/></SwiperSlide>
          <SwiperSlide><img src={BannerImg3} alt="3"/></SwiperSlide>
        </Swiper>
      </Box>
      <Container maxWidth="xl">
        <Typography variant="h4" fontWeight="bold" align="center">What is a personal blog?</Typography>
        <Typography variant="body1">
          A personal blog is a blog that’s run by an individual author, and they add a “personal touch” to
          their content by sharing their experiences, writing in a conversational tone, and so on.
        </Typography>
        <Typography variant="body1">
          Personal blogs are NOT those blogs with a ton of guest contributors. You will NEVER find a
          “corporate tone of voice” on personal blogs as the author loves to share their ideas and thoughts
          with their audience in a “friendly writing tone”.
        </Typography>
        <Typography>
          Many personal bloggers are blogging full-time by combining their passion such as fitness or travel
          and using passive income sources like affiliate marketing to make a living from blogging.
          Top 5 Reasons to Start a Personal Blog
        </Typography>
        <Typography>
          So what are the benefits of personal blogs? Why should you even consider creating personal blogs?
          Here are some of the MAJOR reasons to start a personal blog in 2022.
        </Typography>


        1. Share your thoughts

        One of the biggest reasons to start a personal blog is to share your thoughts and ideas. Just make
        sure to define your target audience (who your ideal audience is) so you can create content
        accordingly.

        2. Networking with others

        One more reason people start personal blogs is to build and grow their online connections. When you
        start a new blog on any topic, you’ll find and engage with hundreds of people within a year.

        3. Create and grow your personal brand

        Personal branding is something you can’t ignore. The best way to build and grow your personal brand
        is to create a blog, share your views, engage with influencers, and try to make a difference.

        4. Do it for fun

        Or you can start a personal blog just to have fun. You can keep your blog posts private if you want
        so you can use them as an online diary. Or you can write whatever comes to your mind and improve
        your writing skills.

        5. Make money online

        Blogging helps you make money online. You can sell your products or start offering services such as
        freelance writing, design, or whatever you’re good at to make money. You can also use your blog to
        monetize with affiliate marketing, display ads, and more.
      </Container>
      <Box>
        yyyyyyyyyyyyyyyyyyyyyyyyyyyy
      </Box>
    </Box>
  );
};
