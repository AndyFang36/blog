/** components */
import {Box, Container, Divider, Grid, IconButton, Tooltip, Typography, useMediaQuery} from "@mui/material";
import {A11y, Autoplay, EffectCoverflow, Navigation, Pagination} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
/** images */
import {FaReact} from "react-icons/fa";
import {SiJetbrains, SiReactrouter, SiRedux, SiSpringboot, SiSwiper} from "react-icons/si";
/** css */
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "../../assets/styles/HomePage.css";
import {useSelector} from "react-redux";

function SwiperSlideItem({title, num, ...others}) {
  return (
    <Box className={`swiper-slide-item item-${num}`} {...others}>
      <Typography maxWidth="80%" variant="h3" sx={{color: "rgba(255, 255, 255, 85%)"}}>{title}</Typography>
    </Box>
  );
}

/** <h1>Home Page, path: /</h1> */
export default function HomePage() {
  document.title = "首页 - Andyの博客";

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
            <SwiperSlideItem num={1} title="Do what you say, say what you do."/>
          </SwiperSlide>
          <SwiperSlide>
            <SwiperSlideItem num={2} title="Enjoy the simple things."/>
          </SwiperSlide>
          <SwiperSlide>
            <SwiperSlideItem num={3} title="Don't let the past steal your present."/>
          </SwiperSlide>
          <SwiperSlide>
            <SwiperSlideItem num={4} title="Life is brief. Let’s make it wonderful!"/>
          </SwiperSlide>
        </Swiper>
      </Container>
      <Container><Divider sx={{mt: 1.5, mb: 1.5, borderWidth: 1.5}}/></Container>
      <Container className="article" maxWidth="xl" data-aos="zoom-in">
        <Typography variant="h3" fontWeight="bold" align="center">What is a personal blog?</Typography>
        <Typography paragraph>
          A personal blog is a blog that’s run by an individual author, and they add a “personal touch” to
          their content by sharing their experiences, writing in a conversational tone, and so on.
        </Typography>
        <Typography paragraph>
          Personal blogs are NOT those blogs with a ton of guest contributors. You will NEVER find a
          “corporate tone of voice” on personal blogs as the author loves to share their ideas and thoughts
          with their audience in a “friendly writing tone”.
        </Typography>
        <Typography paragraph>
          Many personal bloggers are blogging full-time by combining their passion such as fitness or travel
          and using passive income sources like affiliate marketing to make a living from blogging.
          Top 5 Reasons to Start a Personal Blog
        </Typography>
        <Typography paragraph>
          So what are the benefits of personal blogs? Why should you even consider creating personal blogs?
          Here are some of the MAJOR reasons to start a personal blog in 2022.
        </Typography>
        <section>
          <Typography variant="h6">1. Share your thoughts</Typography>
          <Typography paragraph>
            One of the biggest reasons to start a personal blog is to share your thoughts and ideas. Just make
            sure to define your target audience (who your ideal audience is) so you can create content
            accordingly.
          </Typography>
        </section>
        <section>
          <Typography variant="h6">2. Networking with others</Typography>
          <Typography paragraph>
            One more reason people start personal blogs is to build and grow their online connections. When you
            start a new blog on any topic, you’ll find and engage with hundreds of people within a year.
          </Typography>
        </section>
        <section>
          <Typography variant="h6">3. Create and grow your personal brand</Typography>
          <Typography paragraph>
            Personal branding is something you can’t ignore. The best way to build and grow your personal brand is to
            create a blog, share your views, engage with influencers, and try to make a difference.
          </Typography>
        </section>
        <section>
          <Typography variant="h6">4. Do it for fun</Typography>
          <Typography paragraph>
            Or you can start a personal blog just to have fun. You can keep your blog posts private if you want
            so you can use them as an online diary. Or you can write whatever comes to your mind and improve
            your writing skills.
          </Typography>
        </section>
        <section>
          <Typography variant="h6">5. Make money online</Typography>
          <Typography paragraph>
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
