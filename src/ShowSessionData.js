import React, { useState } from "react";
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "./Agenda.scss";
import Sessions from "./content/Sessions.json";
import { Row, Col } from "reactstrap";
import ModalAgenda from "./ModalAgenda";
import MicrosoftTeams from "./images/website/MicrosoftTeams.png";
import Speakers from "./content/SpeakersData.json";
import EventData from "./content/EventData.json";
import ModalSpeaker from "./ModalSpeaker";

export const ShowSessionData = (props) => {
  const [modal, setModal] = useState(false);
  const [clickedData, setClickedData] = useState([]);
  const toggle = (data) => {
    setClickedData(data);
    setModal(!modal);
  };

  const [SpeakerModal, setSpeakerModal] = useState(false);
  const [clickedSpeakerData, setClickedSpeakerData] = useState([]);
  const SpeakerModaltoggle = (data) => {
    setClickedSpeakerData(data);
    setSpeakerModal(!SpeakerModal);
  };

  const ShowSessionUrl = EventData[0].showSessionUrl;
  const CurrentSessions = Sessions.filter(
    (d) => d.trackId.toString() == props.CurrentTrackID
  );
  console.log("CurrentTrackID Prop=> ", props.CurrentTrackID);
  console.log("Current Sessions=> ", CurrentSessions);
  return (
    <>
      <div className="container-fluid trackdata">
        {CurrentSessions.map((data) => {
          return (
            <>
              <Row className=" trackdata-bg " key={data.event}>
                {ShowSessionUrl == "false" ? (
                  <>
                    <Col
                      md={12}
                      lg={3}
                      className="p-0"
                      onClick={() => toggle(data)}
                    >
                      <div className="event-time"> {data.sessionTime} </div>
                    </Col>
                    <Col
                      md={12}
                      lg={5}
                      className=" event-desc"
                      onClick={() => toggle(data)}
                    >
                      {data.sessionTitle}
                    </Col>
                    <Col md={12} lg={4} className="event-speakers">
                      <div className="speaker-head"> Speakers </div>
                      <Row>
                        {data.speaker1Id != null ? (
                          <Col>
                            <img
                              onClick={() =>
                                SpeakerModaltoggle(
                                  Speakers.filter(
                                    (s) => s.speakerId == data.speaker1Id
                                  )[0]
                                )
                              }
                              src={
                                require(`${
                                  Speakers.filter(
                                    (s) => s.speakerId == data.speaker1Id
                                  )[0].speakerImage
                                }`).default
                              }
                              alt="sxdcfvgbhnjk"
                              width="50px"
                              height="50px"
                              className="agenda-speaker-img"
                            />
                            <span className="agenda-speaker-name">
                              {
                                Speakers.filter(
                                  (s) => s.speakerId == data.speaker1Id
                                )[0].speakerName
                              }
                            </span>
                          </Col>
                        ) : null}
                        {data.speaker2Id != null ? (
                          <Col>
                            <img
                              onClick={() =>
                                SpeakerModaltoggle(
                                  Speakers.filter(
                                    (s) => s.speakerId == data.speaker2Id
                                  )[0]
                                )
                              }
                              src={
                                require(`${
                                  Speakers.filter(
                                    (s) => s.speakerId == data.speaker2Id
                                  )[0].speakerImage
                                }`).default
                              }
                              alt="sxdcfvgbhnjk"
                              width="50px"
                              height="50px"
                              className="agenda-speaker-img"
                            />
                            <span className="agenda-speaker-name">
                              {
                                Speakers.filter(
                                  (s) => s.speakerId == data.speaker2Id
                                )[0].speakerName
                              }
                            </span>
                          </Col>
                        ) : null}
                        {data.speaker3Id != null ? (
                          <Col>
                            <img
                              onClick={() =>
                                SpeakerModaltoggle(
                                  Speakers.filter(
                                    (s) => s.speakerId == data.speaker3Id
                                  )[0]
                                )
                              }
                              src={
                                require(`${
                                  Speakers.filter(
                                    (s) => s.speakerId == data.speaker3Id
                                  )[0].speakerImage
                                }`).default
                              }
                              alt="sxdcfvgbhnjk"
                              width="50px"
                              height="50px"
                              className="agenda-speaker-img"
                            />
                            <span className="agenda-speaker-name">
                              {
                                Speakers.filter(
                                  (s) => s.speakerId == data.speaker3Id
                                )[0].speakerName
                              }
                            </span>
                          </Col>
                        ) : null}
                      </Row>
                    </Col>
                  </>
                ) : (
                  <>
                    <Col md={2} onClick={() => toggle(data)}>
                      <div className="event-time"> {data.sessionTime} </div>
                    </Col>
                    <Col
                      md={5}
                      className=" event-desc"
                      onClick={() => toggle(data)}
                    >
                      {data.sessionTitle}
                    </Col>
                    <Col md={3} className="event-speakers">
                      <div className="speaker-head"> Speakers </div>
                      <Row>
                        {data.speaker1Id != null ? (
                          <Col>
                            <img
                              onClick={() =>
                                SpeakerModaltoggle(
                                  Speakers.filter(
                                    (s) => s.speakerId == data.speaker1Id
                                  )[0]
                                )
                              }
                              src={
                                require(`${
                                  Speakers.filter(
                                    (s) => s.speakerId == data.speaker1Id
                                  )[0].speakerImage
                                }`).default
                              }
                              alt="sxdcfvgbhnjk"
                              width="50px"
                              height="50px"
                              className="agenda-speaker-img"
                            />
                            <span className="agenda-speaker-name">
                              {
                                Speakers.filter(
                                  (s) => s.speakerId == data.speaker1Id
                                )[0].speakerName
                              }
                            </span>
                          </Col>
                        ) : null}
                        {data.speaker2Id != null ? (
                          <Col>
                            <img
                              onClick={() =>
                                SpeakerModaltoggle(
                                  Speakers.filter(
                                    (s) => s.speakerId == data.speaker2Id
                                  )[0]
                                )
                              }
                              src={
                                require(`${
                                  Speakers.filter(
                                    (s) => s.speakerId == data.speaker2Id
                                  )[0].speakerImage
                                }`).default
                              }
                              alt="sxdcfvgbhnjk"
                              width="50px"
                              height="50px"
                              className="agenda-speaker-img"
                            />
                            <span className="agenda-speaker-name">
                              {
                                Speakers.filter(
                                  (s) => s.speakerId == data.speaker2Id
                                )[0].speakerName
                              }
                            </span>
                          </Col>
                        ) : null}
                        {data.speaker3Id != null ? (
                          <Col>
                            <img
                              onClick={() =>
                                SpeakerModaltoggle(
                                  Speakers.filter(
                                    (s) => s.speakerId == data.speaker3Id
                                  )[0]
                                )
                              }
                              src={
                                require(`${
                                  Speakers.filter(
                                    (s) => s.speakerId == data.speaker3Id
                                  )[0].speakerImage
                                }`).default
                              }
                              alt="sxdcfvgbhnjk"
                              width="50px"
                              height="50px"
                              className="agenda-speaker-img"
                            />
                            <span className="agenda-speaker-name">
                              {
                                Speakers.filter(
                                  (s) => s.speakerId == data.speaker3Id
                                )[0].speakerName
                              }
                            </span>
                          </Col>
                        ) : null}
                      </Row>
                    </Col>
                    <Col md={2} className="event-teams">
                      <a
                        href={data.sessionUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img src={MicrosoftTeams} alt="MicrosoftTeams" className="teams-image" />
                        <p class="teams-img__description">JOIN HERE</p>
                      </a>
                    </Col>
                  </>
                )}
              </Row>
            </>
          );
        })}
      </div>
      {modal == true ? (
        <ModalAgenda data={clickedData} modal={modal} toggle={toggle} />
      ) : null}
      {SpeakerModal == true ? (
        <ModalSpeaker
          data={clickedSpeakerData}
          modal={SpeakerModal}
          toggle={SpeakerModaltoggle}
        />
      ) : null}
    </>
  );
};
