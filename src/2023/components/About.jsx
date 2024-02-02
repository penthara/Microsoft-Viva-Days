import { Typography, Box, Button } from "@mui/material";
import "../style/about.scss";
import "../style/global.scss";
import aboutData from "../store/aug2023/about.json";
import homeData from "../store/aug2023/home.json";

const About = ({ theme }) => {
  return (
    <>
      <div className="about">
        <Box
          className="sectionMaxWidth"
          sx={{
            width: {
              xs: "95%",
              mmb: "90%",
            },
          }}
        >
          <Box className="aboutHeadingBox">
            <Typography
              className="text-uppercase text-center aboutHeading"
              sx={{
                fontSize: { xs: "3rem", mmb: theme.fontSize.eventDate },
              }}
            >
              About
            </Typography>
          </Box>
          <Box
            sx={{
              paddingBlock: "3rem",
              margin: "auto",
            }}
          >
            <Typography
              className="text-capitalize text-center aboutHeadingText"
              sx={{
                fontSize: {
                  xs: "2.5rem",
                  mmb: theme.fontSize.aboutHeadingText,
                },
              }}
            >
              One-Day Virtual Event Completely Focuses on{" "}
              <Typography
                component={"span"}
                sx={{
                  fontSize: {
                    xs: "2.5rem",
                    mmb: theme.fontSize.aboutHeadingText,
                  },
                  display: "inline",
                  color: theme.colors.text.purple,
                }}
              >
                Microsoft Viva{" "}
              </Typography>
            </Typography>
          </Box>
          <Box
            sx={{
              width: {
                md: "80%",
              },
              margin: "auto",
              paddingBottom: "2.5rem",
            }}
          >
            <Typography
              className="text-center aboutSubheadingText"
              sx={{
                fontSize: {
                  xs: "2rem",
                  mmb: theme.fontSize.aboutSubheadingText,
                },
              }}
            >
              Join us on 12th Aug to learn and experience a technology showcase
              Microsoft Viva, an integrated employee experience platform,
              organized by the{" "}
              <a
                href={aboutData.communityLink}
                target="_blank"
                rel="noreferrer"
              >
                <Typography
                  component={"span"}
                  sx={{
                    fontSize: {
                      xs: "2rem",
                      mmb: theme.fontSize.aboutSubheadingText,
                    },
                    display: "inline",
                    color: theme.colors.text.purple,
                    textDecoration: "underline",
                  }}
                >
                  Microsoft 365, Power Platform & Cloud Security India User
                  group{" "}
                </Typography>
              </a>
              followed by the first one we had in{" "}
              <a
                href="https://www.microsoftvivadays.com/may2022"
                target="_blank"
                rel="noreferrer"
              >
                <Typography
                  component={"span"}
                  sx={{
                    fontSize: {
                      xs: "2rem",
                      mmb: theme.fontSize.aboutSubheadingText,
                    },
                    display: "inline",
                    color: theme.colors.text.purple,
                    textDecoration: "underline",
                  }}
                >
                  2022
                </Typography>
              </a>
              .
              <br />
              <br /> Deep dive into all the various features and capabilities of
              the Microsoft Viva modules - Connections, Topics, Insights,
              Learning, Goals, Sales, and Engage through hands-on sessions and
              labs, live technical demos, and Q&A sessions with Microsoft MVPs,
              Industry experts, and community leaders.
              <br /> <br />
              Register to see how Microsoft Viva can provide AI-powered insights
              and experiences to help empower and engage your workforce using
              your existing infrastructure.
            </Typography>
          </Box>
        </Box>
      </div>
      <Box
        sx={{
          paddingBlock: "2rem",
        }}
        className="d-flex justify-content-center align-items-center"
      >
        <Button
          className="aboutButton"
          href={homeData.eventRegLink}
          target={homeData.eventRegLink[0] == "#" ? "_self" : "_blank"}
          sx={{
            color: "#fff",
            fontSize: theme.fontSize.eventButton,
            backgroundColor: theme.colors.text.purple,
            scale: {
              xs: "0.7",
              mmb: "1.2",
            },
          }}
          alt="Register Now"
          aria-label="Register Now"
          variant="contained"
        >
          {homeData.eventButton}
        </Button>
      </Box>
    </>
  );
};
export default About;
