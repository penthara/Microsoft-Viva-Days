import React, { useState } from "react";
import "./Speaker.scss";
import SpeakersData from "./content/SpeakersData.json";
import ModalSpeaker from "./ModalSpeaker";
import LinkedInlogo from "./images/website/LinkedInlogo.png";
import MVPlogo from "./images/website/mvp.jpg";
import Microsoftlogo from "./images/website/microsoft.jpg"
import Twitterlogo from "./images/website/twitterblue.png";
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
                        src={`${data.speakerImage}`}
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
                          
                        </div>
                        <CardText onClick={() => toggle(data)}>{data.speakerSubTitle}</CardText>

                        <div className="social-media-array">
                        {data.CompanyURL !== null ? (
                          <a href={data.CompanyURL} target="_blank" className="col-2 nopadding">
                            <img
                            src={`${data.CompanyURL}`}
                            alt="MVP logo"
                            className="card-socialmedia nopadding align-self-start"
                          />
                          </a>
                        )
                        :
                        <></>
                        }
                          {data.speakerLinkedIn !== null ? (
                          <a href={data.speakerLinkedIn} target="_blank" className="col-2 nopadding">
                            <img
                            src={LinkedInlogo}
                            alt="LinkedIn logo"
                            className="card-socialmedia nopadding align-self-start"
                          />
                          </a>
                        )
                        :
                        <></>
                        }
                        {data.speakerTwitter !== null ? (
                          <a href={data.speakerLinkedIn} target="_blank" className="col-2 nopadding">
                            <img
                            src={Twitterlogo}
                            alt="Twitter logo"
                            className="card-socialmedia nopadding align-self-start"
                          />
                          </a>
                        )
                        :
                        <></>
                        }
                          
                        </div>
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
