import React, { useState } from "react";
import "./Speaker.scss";
import SpeakersData from "./content/SpeakersData.json";
import ModalSpeaker from "./ModalSpeaker";
import LinkedInlogo from "./images/website/LinkedInlogo.png";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";

export const Speaker = () => {
  const [modal, setModal] = useState(false);
  const [clickedData, setClickedData] = useState([]);
  const toggle = (data) => {
    setClickedData(data);
    setModal(!modal);
  };
  return (
    <>
      <div className="speakers" id="speakers">
        <h1 className="speaker-heading text-center">Speakers</h1>
        <div className="row justify-content-between">
          {SpeakersData.map((data) => {
            return (
              <>
                {data.keynoteSpeaker === "false" && (
                  <div
                    className="col-xs-12 col-md-6 speaker-card-wrapper col-xl-4"
                    key={data.speakerId}
                    
                  >
                    <Card className="speaker-card shadow nopadding">
                      <CardImg
                        onClick={() => toggle(data)}
                        top
                        className="img-fluid speaker-image"
                        src={require(`${data.speakerImage}`).default}
                        alt={data.speakerAltText}
                      />
                      <div className="card-title-wrapper">
                        <CardTitle tag="h3" className="text-center " onClick={() => toggle(data)}>
                          {data.speakerName}
                        </CardTitle>
                      </div>
                      <CardBody>
                        <div className="row">
                          <CardSubtitle
                            onClick={() => toggle(data)}
                            tag="p"
                            className="mb-2 text-start nopadding col"
                          >
                            {data.speakerTitle}
                          </CardSubtitle>
                          <a href={data.speakerLinkedIn} target="_blank" className="col-2 nopadding">
                            <img
                            src={LinkedInlogo}
                            alt="LinkedIn logo"
                            className="card-linkedIn nopadding align-self-start"
                          />
                          </a>
                        </div>
                        <CardText onClick={() => toggle(data)}>{data.speakerSubTitle}</CardText>
                      </CardBody>
                    </Card>
                  </div>
                )}
              </>
            );
          })}
        </div>
      </div>
      {modal == true ? (
        <ModalSpeaker data={clickedData} modal={modal} toggle={toggle} />
      ) : (
        <></>
      )}
    </>
  );
};
