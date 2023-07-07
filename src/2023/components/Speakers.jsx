import React, { useEffect, useState } from "react";
import { Typography, Box, Skeleton, Stack } from "@mui/material";
import "../style/global.scss";
import "../style/speaker.scss";
import Card from "./subComponents/Card";
import AboutSpeaker from "./subComponents/AboutSpeaker";

const Speakers = ({ theme, speakerData, sessionData }) => {
  // console.log("speakerData in Speakers.jsx", speakerData);
  const [showData, setShowData] = useState(false);
  const [speakerModal, setSpeakerModal] = useState(false);
  const [speakerModalData, setSpeakerModalData] = useState({});
  const [sessionDetails, setSessionDetails] = useState([]);
  useEffect(() => {
    if (sessionData.length > 0) {
      setSessionDetails(sessionData[0].sessions);
    }
  }, [sessionData]);
  console.log("sponsor data", sessionData);
  console.log("sponsor data details", sessionDetails);
  return (
    <>
      <div>
        <Box className="sectionMaxWidth">
          <Box className="speakersHeadingBox">
            <Typography
              className="text-uppercase text-center speakersHeading"
              sx={{
                fontSize: { xs: "3rem", mmb: theme.fontSize.eventDate },
              }}
            >
              Speakers
            </Typography>
          </Box>

          <Box className="d-flex justify-content-center flex-wrap keynote-box speaker-grid">
            {speakerData.length > 0 &&
              speakerData.map((speakerData, idx) => {
                setTimeout(() => {
                  setShowData(true);
                }, 1000);
                return !showData ? (
                  <Stack key={idx} spacing={1}>
                    {/* For variant="text", adjust the height via font-size */}
                    <Skeleton variant="rectangular" width={300} height={300} />
                    {/* For other variants, adjust the size with `width` and `height` */}
                    <Skeleton
                      variant="text"
                      width={300}
                      sx={{ fontSize: "2rem" }}
                    />
                    <Skeleton
                      variant="text"
                      width="60%"
                      sx={{ fontSize: "2rem" }}
                    />
                  </Stack>
                ) : (
                  <a
                    key={idx}
                    onClick={() => {
                      setSpeakerModal(true);
                      setSpeakerModalData(speakerData);
                    }}
                  >
                    <Card
                      theme={theme}
                      image={speakerData.profilePicture}
                      name={speakerData.fullName}
                      designation={speakerData.questionAnswers[0].answer}
                      company={speakerData.questionAnswers[4].answer}
                      linkedIn={speakerData.questionAnswers[5].answer}
                      twitter={speakerData.questionAnswers[2].answer}
                      mvp={
                        speakerData.questionAnswers[7].answer.toLowerCase() ==
                        "Yes".toLowerCase()
                      }
                    />
                  </a>
                );
              })}
          </Box>
        </Box>
        <AboutSpeaker
          theme={theme}
          open={speakerModal}
          close={setSpeakerModal}
          data={speakerModalData}
          sessions={sessionDetails}
        />
      </div>
    </>
  );
};
export default Speakers;
