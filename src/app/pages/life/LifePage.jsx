import {Box, Container, Divider, Link as Anchor, Paper, Typography} from "@mui/material";
import "../../../assets/styles/LifePage.css";
import {MuiPaper} from "../../../common/components/MuiPaper";

export const LifePage = () => {
  return (
    <Box id="LifePage" pt={2}>
      <Container maxWidth={false} disableGutters>
        <section>
          <Box id="Welcome">
            <Typography fontWeight="bold" sx={{fontSize: {"xs": "1.5rem", "sm": "1.5rem", "md": "2rem", "lg": "3rem", "xl": "4rem"}}}>Leap of Faith</Typography>
            <Typography sx={{fontSize: {"xs": "1rem", "sm": "1.5rem", "md": "2rem", "lg": "3rem", "xl": "3.5rem"}}}>Trusting
              God is a lifelong journey. Don't travel alone.</Typography>
            <Anchor href="#All" color="inherit" underline="none"><Typography
              sx={{fontSize: {"xs": "1.5rem", "sm": "1.5rem", "md": "2rem", "lg": "3rem", "xl": "4rem"}}}
              fontWeight="bolder">↓</Typography></Anchor>
          </Box>
        </section>
        <Typography id="All" variant="h3" align="center">Today's Story</Typography>
        <Divider/>
        <Container maxWidth="xl">
          <MuiPaper sx={{p: 3}}>
            <Typography variant="h1" align="center">Happiness is a journey</Typography>
            <Typography variant="body2" paragraph>
              We always convince ourselves that life will be better after we get married, have a baby, then another.
              Then
              we are frustrated that the kids aren't old enough and we'll be more content when they are. After that we'
              re
              frustrated that we have teenagers to deal with. We will certainly be happy when they are out of that
              stage.
            </Typography>
            <Typography variant="body2" paragraph>
              <img src="https://i.xiao84.com/allimg/meiwen/26773.jpg"
                   alt="..."
                   style={{float: "right", marginLeft: "1rem"}}
              />
              We always tell ourselves that our life will be complete when our spouse gets his or her act together, when
              we get a nicer car, and are able to go on a nice vacation, when we retire. The truth is, there's no better
              time than right now. If not now, when? Our life will always be filled with challenges. It's best to admit
              this to ourselves and decide to be happy anyway.
            </Typography>
            <Typography variant="body2" paragraph>
              One of my favorite quotes comes from Alfred Souza. He said, "For a long
              time it had seemed to me that life was about to begin-real life. But there was always some obstacle in the
              way, something to be gotten through first, some unfinished business, time still to be served, a debt to be
              paid. Then life would begin. At last it dawned onto me that these obstacles were my life. "
            </Typography>
            <Typography variant="body2" paragraph>
              This perspective has helped me to see that there is no way to happiness.
              Happiness is the way. So treasure every moment that you have. And remember that time waits for no one. So
              stop waiting until you finish school, until you go back to school; until you get married, until you get
              divorced; until you have kids, until your kids leave home; until you start work, until you retire; until
              you
              get a new car or home; until spring; until you are born again to decide that there is no better time than
              right now to be happy....
            </Typography>
            <Typography variant="body2" paragraph>
              Happiness is a journey, not a destination. So, Work like you don't need
              money, Love like you've never been hurt, And dance like no one's watching.
            </Typography>
            <small>{new Date().toLocaleDateString()}</small>
          </MuiPaper>
        </Container>
      </Container>
    </Box>
  );
};
