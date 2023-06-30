import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Box,
  Typography,
  IconButton,
  Divider,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import "../../style/sponsorModal.scss";
import "../../style/modalSpeaker.scss";
import mslogo from "../../assets/logoIcons/ms.png";
import mvpLogo from "../../assets/logoIcons/mvp.jpg";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import moment from "moment";

const AboutSpeaker = ({ theme, open, close, data, sessions, isKeynote }) => {
  console.log("SpeakerModalData", data);
  console.log("isEmpty", sessions);
  const speakerSocial = {};
  if (JSON.stringify(data) != "{}") {
    Object.assign(speakerSocial, {
      microsoft:
        data?.categories[0]?.categoryItems[0]?.name == "Yes" &&
        data?.questionAnswers[0]?.answer.toLowerCase() == "microsoft"
          ? true
          : false,
      mvp: data?.categories[1]?.categoryItems[0]?.name == "Yes",
      linkedIn: data?.questionAnswers[1]?.answer,
      twitter: data?.questionAnswers[2]?.answer,
    });
  }
  const handleSpeakerModalClose = () => {
    close(false);
  };
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleSpeakerModalClose}
        scroll="paper"
        fullWidth
        maxWidth="mmb"
        className="aug2023-scroll-dialog speaker-modal"
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <Box className="d-flex scroll-dialog-head align-items-center">
          <DialogTitle className="scroll-dialog-title text-uppercase text-start">
            {data.fullName}
          </DialogTitle>
          <IconButton
            sx={{
              marginRight: "2.4rem",
            }}
            onClick={() => handleSpeakerModalClose()}
            aria-label="close"
          >
            <CloseIcon className="scroll-dialog-close" />
          </IconButton>
        </Box>
        <DialogContent dividers={false} className="scroll-dialog-content">
          <Box className="speaker-modal-img-container">
            <img src={data.profilePicture} alt={data.fullName} loading="lazy" />
          </Box>
          <Box className="speaker-modal-content">
            <Typography
              sx={{
                color: "#606060 !important",
              }}
              className="scroll-dialog-content-box-title text-uppercase"
            >
              Biography
            </Typography>

            <Typography className="scroll-dialog-content-box-text text-justify">
              {data.bio}
            </Typography>
            <Divider
              variant="middle"
              sx={{
                borderBottomWidth: 4,
                borderRadius: "50rem",
                marginBlock: "2rem",
              }}
            />
            {JSON.stringify(data) != "{}" &&
              data.sessions.map((data, idx) => {
                // console.log(
                //   "tst",
                //   sessions[0].sessions.find((session) => session.id == data.id)
                // );

                const session = {
                  startsAt: isKeynote
                    ? null
                    : sessions[0].sessions.find(
                        (session) => session.id == data.id
                      ).startsAt,
                  endsAt: isKeynote
                    ? null
                    : sessions[0].sessions.find(
                        (session) => session.id == data.id
                      ).endsAt,
                  name: isKeynote
                    ? null
                    : sessions[0].sessions.find(
                        (session) => session.id == data.id
                      ).title,
                };

                return (
                  <Box
                    key={idx}
                    sx={{
                      paddingInline: "2rem",
                    }}
                  >
                    <Box className="d-flex">
                      <Box
                        className="session-list d-flex justify-content-center align-items-center"
                        sx={{
                          backgroundColor: "#0d2958",
                          marginRight: "1rem",
                        }}
                      >
                        <Box>
                          <Typography
                            className="text-center"
                            sx={{
                              color: "#fff",
                              fontSize: "1.6rem",
                            }}
                          >
                            Topic
                          </Typography>
                        </Box>
                      </Box>
                      <Box
                        className="session-list session-list-time d-flex justify-content-center align-items-center"
                        sx={{
                          backgroundColor: "#e1e9e9",
                        }}
                      >
                        <Box>
                          <Typography
                            className="text-center"
                            sx={{
                              color: "#000000",
                              fontSize: "1.6rem",
                            }}
                          >
                            {isKeynote
                              ? "9:40 AM"
                              : moment(session.startsAt).format("LT")}{" "}
                            -{" "}
                            {isKeynote
                              ? "10:00 AM"
                              : moment(session.endsAt).format("LT")}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                    <Box>
                      <Typography
                        className="session-name"
                        sx={{
                          color: "#0d2958",
                        }}
                      >
                        {isKeynote ? "Keynote" : session.name}
                      </Typography>
                    </Box>
                  </Box>
                );
              })}
            <Divider
              variant="middle"
              sx={{
                borderBottomWidth: 4,
                borderRadius: "50rem",
                marginBlock: "2rem",
              }}
            />
            {!isKeynote ? (
              <Box className="card-social session-modal-speaker">
                {speakerSocial.mvp && (
                  <IconButton
                    href={""}
                    target="_blank"
                    aria-label="MVP"
                    disabled
                  >
                    <img
                      src={mvpLogo}
                      className="card-social-img"
                      alt="microsoft-mvp"
                    />
                  </IconButton>
                )}
                {speakerSocial.microsoft && (
                  <IconButton
                    href={""}
                    target="_blank"
                    aria-label="MicroSoft"
                    disabled
                  >
                    <img
                      src={mslogo}
                      className="card-social-img"
                      alt="microsoft-company"
                    />
                  </IconButton>
                )}
                {speakerSocial.linkedIn && (
                  <IconButton
                    href={speakerSocial.linkedIn}
                    aria-label="LinkedIn"
                    target="_blank"
                  >
                    <LinkedInIcon
                      color="primary"
                      className="card-social-icon"
                    />
                  </IconButton>
                )}
                {speakerSocial.twitter && (
                  <IconButton
                    href={speakerSocial.twitter}
                    aria-label="twitter"
                    target="_blank"
                  >
                    <TwitterIcon
                      sx={{
                        color: theme.icon.twitter,
                      }}
                      className="card-social-icon"
                    />
                  </IconButton>
                )}
              </Box>
            ) : (
              <Box className="card-social session-modal-speaker">
                <IconButton
                  href={""}
                  target="_blank"
                  aria-label="MicroSoft"
                  disabled
                >
                  <img
                    src={mslogo}
                    className="card-social-img"
                    alt="microsoft-company"
                  />
                </IconButton>

                <IconButton
                  href="https://www.linkedin.com/in/hammadrajjoub/"
                  aria-label="LinkedIn"
                  target="_blank"
                >
                  <LinkedInIcon color="primary" className="card-social-icon" />
                </IconButton>

                <IconButton
                  href="https://twitter.com/iRajjoub"
                  aria-label="twitter"
                  target="_blank"
                >
                  <TwitterIcon
                    sx={{
                      color: theme.icon.twitter,
                    }}
                    className="card-social-icon"
                  />
                </IconButton>
              </Box>
            )}
          </Box>
        </DialogContent>
      </Dialog>
    </div>
  );
};
export default AboutSpeaker;
