import React from "react";
import { Box, Typography } from "@mui/material";
import "../style/prizes.scss";
import "../style/global.scss";
import prizes from "../store/aug2023/prizes.json";
import books from "../store/aug2023/prizeBooks.json";

const Prizes = ({ theme }) => {
  return (
    <div className="QuizPrizes">
      <Box className="sectionMaxWidth">
        <Box className="prizesHeadingBox">
          <Typography
            className="text-uppercase text-center prizesHeading"
            sx={{
              fontSize: { xs: "3rem", mmb: theme.fontSize.eventDate },
            }}
          >
            Win exciting prizes
          </Typography>
        </Box>
        <div className="QuizPrizes-para-wrapper">
          <Typography
            className="text-center prizesSubheadingText"
            sx={{
              fontSize: {
                xs: "2rem",
                mmb: theme.fontSize.aboutSubheadingText,
              },
              paddingTop: "1rem",
            }}
          >
            We have an exciting quiz competition for all the attendees. Be part
            of our event, attend sessions, participate in the quiz competition,
            and win exciting prizes!
          </Typography>
        </div>
        <div className="QuizPrizes-wrapper">
          {prizes.map((data, idx) => {
            return (
              <div key={idx} className="QuizPrizes-card">
                <div className="QuizPrizes-card-head">
                  <img
                    src={data.image}
                    alt="prize"
                    className="QuizPrizes-card-img"
                  />
                  <Typography className="QuizPrizes-card-heading">
                    {data.title}
                  </Typography>
                </div>
                <Typography className="QuizPrizes-card-desc">
                  {data.description}
                </Typography>
              </div>
            );
          })}
        </div>
        <div className="bookPrize-container">
          <Box className="bookPrizes-wrapper bg-pc">
            <div className="bookPrizes-parent">
              {books.map((data) => {
                return (
                  <div
                    key={data.id}
                    className={`bookPrizes-card bookPrizes-card-${data.id}`}
                  >
                    <img
                      src={data.image}
                      alt="prize"
                      className="bookPrizes-card-img"
                    />
                  </div>
                );
              })}
            </div>
            <div>
              <Typography className="QuizPrizes-card-heading text-uppercase heading-mobile text-center">
                Win Special discount on Microsoft Press Pearson Store
              </Typography>
            </div>
          </Box>
          <div className="book-discount">
            <Box className="discount-box">
              <Typography className="text-center text-uppercase prizesBookSubheadingText">
                Upto 70% discount on microsoft Press books, Ebooks & video
                courses
              </Typography>
            </Box>
          </div>
        </div>
      </Box>
    </div>
  );
};
export default Prizes;
