import React, { useState } from "react";
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
            {speakerData &&
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
                      designation={speakerData.questionAnswers[5].answer}
                      company={
                        speakerData.categories[0].categoryItems[0].name ==
                          "Yes" && speakerData.questionAnswers[0].answer
                      }
                      linkedIn={speakerData.questionAnswers[1].answer}
                      twitter={speakerData.questionAnswers[2].answer}
                      microsoft={
                        speakerData.categories[0].categoryItems[0].name ==
                          "Yes" &&
                        speakerData.questionAnswers[0].answer.toLowerCase() ==
                          "microsoft"
                          ? true
                          : false
                      }
                      mvp={
                        speakerData.categories[1].categoryItems[0].name == "Yes"
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
          sessions={sessionData}
        />
      </div>
    </>
  );
};
export default Speakers;
