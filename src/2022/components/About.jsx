import { Typography, Box, Button } from "@mui/material";
import "../style/about.scss";
import "../style/global.scss";
import aboutData from "../store/may2022/about.json";

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
          ></Box>
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
              Microsoft Viva Days ,2022 is a one day virtual event organized by
              the{" "}
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
                    color: "#421282",
                    textDecoration: "underline",
                  }}
                >
                  Microsoft 365 , Power Platform & Cloud Security India User
                  group{" "}
                </Typography>
              </a>
              . Microsoft Viva is an employee experience platform with
              functionalities to bring learning, insights, communications, and
              resources together on one platform. It's powered by Microsoft 365,
              and companies can experience it via MS Teams . This event is the
              first of its kind from the Microsoft Community in India and we're
              planning to cover all aspects of Microsoft Viva in this one day
              virtual event.
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
          href={aboutData.eventRegLink}
          target="_blank"
          sx={{
            color: theme.colors.text.primary,
            fontSize: theme.fontSize.eventButton,
            scale: {
              xs: "1",
              mmb: "1.2",
            },
            backgroundColor: "#421282",
          }}
          alt="Register Now"
          aria-label="Register Now"
          variant="contained"
        >
          Register Now
        </Button>
      </Box>
    </>
  );
};
export default About;
