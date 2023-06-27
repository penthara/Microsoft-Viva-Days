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

const AboutSpeaker = ({ theme, open, sessionOpen, close, data }) => {
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
        className="may2023-scroll-dialog speaker-modal"
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <Box className="d-flex scroll-dialog-head align-items-center">
          <DialogTitle className="scroll-dialog-title text-uppercase text-start">
            {data.speakerName}
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
            <img
              src={data.speakerImage}
              alt={data.speakerName}
              loading="lazy"
            />
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
              {data.speakerInformation}
            </Typography>
            <Divider
              variant="middle"
              sx={{
                borderBottomWidth: 4,
                borderRadius: "50rem",
                marginBlock: "2rem",
              }}
            />
            {data.speakerSessions?.length > 0 &&
              data.speakerSessions.map((data, idx) => {
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
                            {data.sessionTime}
                            {"IST"}
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
                        {data.sessionTitle}
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

            <Box className="card-social session-modal-speaker">
              {data.MVPstatus && (
                <IconButton href={""} target="_blank" aria-label="MVP" disabled>
                  <img
                    src={mvpLogo}
                    className="card-social-img"
                    alt="microsoft-mvp"
                  />
                </IconButton>
              )}
              {data.MicrosoftEmployee && (
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
              {data.speakerLinkedIn && (
                <IconButton
                  href={data.speakerLinkedIn}
                  aria-label="LinkedIn"
                  target="_blank"
                >
                  <LinkedInIcon color="primary" className="card-social-icon" />
                </IconButton>
              )}
              {data.speakerTwitter && (
                <IconButton
                  href={data.speakerTwitter}
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
          </Box>
        </DialogContent>
      </Dialog>
    </div>
  );
};
export default AboutSpeaker;
