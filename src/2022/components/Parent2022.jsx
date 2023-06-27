import React, { useState, useEffect } from "react";
import Home from "./Home";
import Navbar from "./Navbar";
import About from "./About";
import Sponsors from "./Sponsors";
import Footer from "./Footer";
import CountdownTimer from "./subComponents/CountDownTimer";
import Speakers from "./Speakers";
import Agenda from "./Agenda";
import ErrorBoundary from "./ErrorBoundary";
import { Box } from "@mui/material";
import "../style/global.scss";

const Parent2022 = ({ theme }) => {
  return (
    <Box className="may-2023">
      <Navbar theme={theme} />
      <Home theme={theme} />
      <CountdownTimer />
      <Box id="about" />
      <About theme={theme} />
      <Box id="agenda" />
      <ErrorBoundary>
        <Agenda theme={theme} />
      </ErrorBoundary>
      <ErrorBoundary>
        <Box id="speakers" />
        <Speakers
          theme={theme}
        />
      </ErrorBoundary>
      <Box id="sponsors" />
      <Sponsors theme={theme} />
      <Box id="contactUS" />
      <Footer theme={theme} />
    </Box>
  );
};
export default Parent2022;
