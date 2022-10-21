import {Box, Container, Divider, Grid, Link as Anchor, Typography} from "@mui/material";
import {MeImg, MeImgPlaceholder} from "../../assets/images/avatars"
import {Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator} from "@mui/lab";
import {Fastfood, Hotel, LaptopMac, Repeat} from "@mui/icons-material";

export default function AboutPage() {
  document.title = "关于我 - Andyの博客"

  return (
    <Box id="AboutPage" pt="5rem" className="animated tdDropInLeft">
      <Container maxWidth="xl">
        <Typography variant="h2" align="center">About Me</Typography>
        <Divider sx={{m: "0 auto 1rem auto"}}/>
        <Grid container spacing={3}>
          <Grid item md={6}>
            <Typography variant="h4">Hi, I'm Andy Fang!<br/>So good to have you here. </Typography>
            <Typography>
              I'm a paragraph.
              Click here to add your own text and edit me.
              It’s easy.
              Just click “Edit Text” or double click me to add your own content and make changes to the font.
              Feel free to drag and drop me anywhere you like on your page.
              I’m a great place for you to tell a story and let your users know a little more about you.
              This is a great space to write long text about your company and your services.
              You can use this space to go into a little more detail about your company.
              Talk about your team and what services you provide.
              Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors.
              Make your company stand out and show your visitors who you are.
              At Wix we're passionate about making templates that allow you to build fabulous websites and it’s all thanks to the support and feedback from users like you!
              Keep up to date with New Releases and what's Coming Soon in Wix ellaneous in Support.
              Feel free to tell us what you think and give us feedback in the Wix Forum.
              If you’d like to benefit from a professional designer's touch, head to the Wix Arena and connect with one of our Wix Pro designers.
              Or if you need more help you can simply type your questions into the Support Forum and get instant answers.
              To keep up to date with everything Wix, including tips and things we think are cool, just head to the Wix Blog!
              Contact Me: <Anchor href="mailto:andylovesapple666@icloud.com">andylovesapple666@icloud.com</Anchor>
            </Typography>
          </Grid>
          <Grid item md={6}>
            <img src={MeImg} alt="avatar" width="100%"/>{/* data-src={MeImgPlaceholder}*/}
          </Grid>
        </Grid>
        <Box>
          <Timeline position="alternate">
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                align="right"
                variant="body2"
                color="text.secondary"
              >
                9:30 am
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot>
                  <Fastfood />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="h6" component="span">
                  Eat
                </Typography>
                <Typography>Because you need strength</Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                variant="body2"
                color="text.secondary"
              >
                10:00 am
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color="primary">
                  <LaptopMac />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="h6" component="span">
                  Code
                </Typography>
                <Typography>Because it&apos;s awesome!</Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color="primary" variant="outlined">
                  <Hotel />
                </TimelineDot>
                <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="h6" component="span">
                  Sleep
                </Typography>
                <Typography>Because you need rest</Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                <TimelineDot color="secondary">
                  <Repeat />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="h6" component="span">
                  Repeat
                </Typography>
                <Typography>Because this is the life you love!</Typography>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </Box>
      </Container>
    </Box>
  );
};
