import React, { useState, useEffect } from "react";
import Home from "./Home";
import Navbar from "./Navbar";
import About from "./About";
import Sponsors from "./Sponsors";
import Organizers from "./Organizers";
import Footer from "./Footer";
import CountdownTimer from "./subComponents/CountDownTimer";
import Social from "./Social";
import Eventinfostripe from "./Eventinfostripe";
import KeynoteSpeaker from "./KeynoteSpeaker";
import Speakers from "./Speakers";
import Agenda from "./Agenda";
import Prizes from "./Prizes";
import Donate from "./Donate";
import ErrorBoundary from "./ErrorBoundary";
import PreviousEvents from "./PreviousEvents";
import {
  Route,
  Link,
  Routes,
  useParams,
  BrowserRouter,
} from "react-router-dom";
import { Box } from "@mui/material";
import "../style/global.scss";
import { speakerApi, sessionApi, scheduleGridApi } from "../services/EventData";

const Parent2023 = ({ theme }) => {
  const [speakerData, setSpeakerData] = useState([]);
  const [sessionData, setSessionData] = useState([]);
  const [defaultTrackData, setDefaultTrackData] = useState([]);

  useEffect(() => {
    speakerApi().then((data) => {
      setSpeakerData(data);
    });
    sessionApi().then((data) => {
      setSessionData(data);
      console.log("dtata", data);
      let defaultTrack = data[0].sessions.filter(
        (s) => s.room == "1" && s.isPlenumSession == false
      );
      setDefaultTrackData(defaultTrack);
    });
    // scheduleGridApi().then((data) => {
    //   setScheduleGridData(data);
    // });
  }, []);

  return (
    <Box className="aug-2023">
      <Navbar theme={theme} />
      <Home theme={theme} />
      <Social theme={theme} />
      <CountdownTimer />
      <Box id="about" />
      <About theme={theme} />
      <Eventinfostripe theme={theme} />
      {/* <ErrorBoundary>
        <Box id="speakers" />
        <KeynoteSpeaker theme={theme} />
        <Speakers
          theme={theme}
          speakerData={speakerData}
          sessionData={sessionData}
        />
      </ErrorBoundary> */}
      {/* <Box id="agenda" />
      <ErrorBoundary>
        {defaultTrackData.length > 0 &&
          speakerData.length > 0 &&
          sessionData.length > 0 && (
            <Agenda
              theme={theme}
              speaker={speakerData}
              session={sessionData}
              defaultTrackData={defaultTrackData}
            />
          )}
      </ErrorBoundary> */}
      {/* <Box id="prizes" />
      <Prizes theme={theme} />
      <Box id="donate" />
      <Donate theme={theme} /> */}
      <Box id="sponsors" />
      <Sponsors theme={theme} />
      <Box id="eventTeam" />
      <Organizers theme={theme} />
      {/* <PreviousEvents theme={theme} /> */}
      <Box id="contactUS" />
      <Footer theme={theme} />
    </Box>
  );
};
export default Parent2023;
