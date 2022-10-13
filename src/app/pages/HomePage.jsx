/** components */
import {Box, Container, Divider, Grid, IconButton, Stack, Tooltip, Typography} from "@mui/material";
import {A11y, Autoplay, EffectCoverflow, EffectCube, EffectFlip, Navigation, Pagination} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
/** images */
import BannerImg1 from "../../assets/images/banners/home/banner-1.png";
import BannerImg2 from "../../assets/images/banners/home/banner-2.png";
import BannerImg3 from "../../assets/images/banners/home/banner-3.png";
import BannerImg4 from "../../assets/images/banners/home/banner-4.png";
import {FaReact} from "react-icons/fa";
import {SiJetbrains, SiReactrouter, SiRedux, SiSpring, SiSpringboot, SiSwiper} from "react-icons/si";
/** css */
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "../../assets/styles/HomePage.css";

/** Home Page, path: / */
export default function HomePage() {
  return (
    <Box id="HomePage">
      <Container maxWidth={false} disableGutters id="HomeSwiper">
        <Swiper
          className="banner-swiper"
          modules={[Navigation, Pagination, A11y, Autoplay, EffectCoverflow]}
          slidesPerView="auto"
          navigation
          pagination={{clickable: true}}
          autoplay={{delay: 5000, disableOnInteraction: false}}
          loop={true}
          centeredSlides={true}
          effect="coverflow"
          grabCursor={true}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
        >
          <SwiperSlide>
            <Box sx={{backgroundImage: `url(${BannerImg1})`}}>
              <Typography variant="h3">Do what you say, say what you do.</Typography>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box sx={{backgroundImage: `url(${BannerImg2})`}}>
              <Typography variant="h3">Enjoy the simple things.</Typography>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box sx={{backgroundImage: `url(${BannerImg3})`}}>
              <Typography variant="h3">Don't let the past steal your present. </Typography>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box sx={{backgroundImage: `url(${BannerImg4})`}}>
              <Typography variant="h3">Life is brief. Let’s make it wonderful!</Typography>
            </Box>
          </SwiperSlide>
        </Swiper>
      </Container>
      <Container><Divider sx={{mt: 1.5, mb: 1.5, borderWidth: 1.5}}/></Container>
      <Container className="article" maxWidth="xl" data-aos="zoom-in">
        <Typography variant="h3" fontWeight="bold" align="center">What is a personal blog?</Typography>
        <Typography variant="body1">
          A personal blog is a blog that’s run by an individual author, and they add a “personal touch” to
          their content by sharing their experiences, writing in a conversational tone, and so on.
        </Typography>
        <Typography variant="body1">
          Personal blogs are NOT those blogs with a ton of guest contributors. You will NEVER find a
          “corporate tone of voice” on personal blogs as the author loves to share their ideas and thoughts
          with their audience in a “friendly writing tone”.
        </Typography>
        <Typography variant="body1">
          Many personal bloggers are blogging full-time by combining their passion such as fitness or travel
          and using passive income sources like affiliate marketing to make a living from blogging.
          Top 5 Reasons to Start a Personal Blog
        </Typography>
        <Typography variant="body1">
          So what are the benefits of personal blogs? Why should you even consider creating personal blogs?
          Here are some of the MAJOR reasons to start a personal blog in 2022.
        </Typography>
        <section>
          <Typography variant="h6">1. Share your thoughts</Typography>
          <Typography variant="body1">
            One of the biggest reasons to start a personal blog is to share your thoughts and ideas. Just make
            sure to define your target audience (who your ideal audience is) so you can create content
            accordingly.
          </Typography>
        </section>
        <section>
          <Typography variant="h6">2. Networking with others</Typography>
          <Typography variant="body1">
            One more reason people start personal blogs is to build and grow their online connections. When you
            start a new blog on any topic, you’ll find and engage with hundreds of people within a year.
          </Typography>
        </section>
        <section>
          <Typography variant="h6">3. Create and grow your personal brand</Typography>
          <Typography variant="body1">
            Personal branding is something you can’t ignore. The best way to build and grow your personal brand is to
            create a blog, share your views, engage with influencers, and try to make a difference.
          </Typography>
        </section>
        <section>
          <Typography variant="h6">4. Do it for fun</Typography>
          <Typography variant="body1">
            Or you can start a personal blog just to have fun. You can keep your blog posts private if you want
            so you can use them as an online diary. Or you can write whatever comes to your mind and improve
            your writing skills.
          </Typography>
        </section>
        <section>
          <Typography variant="h6">5. Make money online</Typography>
          <Typography variant="body1">
            Blogging helps you make money online. You can sell your products or start offering services such as
            freelance writing, design, or whatever you’re good at to make money. You can also use your blog to
            monetize with affiliate marketing, display ads, and more.
          </Typography>
        </section>
      </Container>
      <Container><Divider sx={{mt: 1.5, mb: 1.5, borderWidth: 1.5}}/></Container>
      <Container id="Logos">
        <Typography variant="h3" align="center" mb={1}>Thanks👇</Typography>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item xs={6} sm={4} md={3} lg={2} xl={2}>
            <Tooltip title="React"><IconButton><FaReact id="React"/></IconButton></Tooltip>
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={2} xl={2}>
            <Tooltip title="Redux"><IconButton><SiRedux id="Redux"/></IconButton></Tooltip>
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={2} xl={2}>
            <Tooltip title="React Router"><IconButton><SiReactrouter id="ReactRouter"/></IconButton></Tooltip>
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={2} xl={2}>
            <Tooltip title="Spring Boot"><IconButton><SiSpringboot id="SpringBoot"/></IconButton></Tooltip>
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={2} xl={2}>
            <Tooltip title="Swiper"><IconButton><SiSwiper id="Swiper"/></IconButton></Tooltip>
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={2} xl={2}>
            <Tooltip title="Jetbrains"><IconButton><SiJetbrains id="Jetbrains"/></IconButton></Tooltip>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
