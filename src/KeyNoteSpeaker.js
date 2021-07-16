import React, { useState } from "react";
import "./Speaker.scss";
import SpeakersData from "./content/SpeakersData.json";
import ModalKeynote from "./ModalKeynote";
import LinkedInlogo from "./images/website/LinkedInlogo.png";
import LazyLoad from "react-lazy-load";
import ImageLoader from "./ImageLoader.js";
import { Card, CardImg, CardBody, CardTitle, CardSubtitle } from "reactstrap";

export const KeyNoteSpeaker = () => {
  const [modal, setModal] = useState(false);
  const [clickedData, setClickedData] = useState([]);
  const toggle = (data) => {
    setClickedData(data);
    setModal(!modal);
  };
  return (
    <>
      <div className="keynote">
        <h1 className="keynote-heading text-center">KeyNote Speakers</h1>
        <div className="row justify-content-between">
          {SpeakersData.map((data) => {
            return (
              <>
                {data.keynoteSpeaker === "true" && (
                  <div
                    className=" p-4 col-xs-12 col-md-6 col-xl-4 "
                    key={data.speakerId}
                  >
                    <Card className="keynote-card shadow nopadding ">
                      <div className="keynote-image">
                        <div id="cube">
                          <div class="square-holder">
                            <div class="square" id="square"></div>
                          </div>
                        </div>
                        <LazyLoad height={350} debounce={false}>
                          <ImageLoader
                            onClick={() => toggle(data)}
                            src={`${data.speakerImage}`}
                            alt={data.speakerAltText}
                          />
                        </LazyLoad>
                      </div>
                      <CardBody>
                        <div className="row w-100 flex-nowrap">
                          <CardTitle
                            tag="h3"
                            className="nopadding col"
                            onClick={() => toggle(data)}
                          >
                            {data.speakerName}
                          </CardTitle>
                          <a
                            href={data.speakerLinkedIn}
                            target="_blank"
                            className="card-linkedIn nopadding align-self-start"
                          >
                            <img
                              src={LinkedInlogo}
                              alt="LinkedIn logo"
                              className="card-linkedIn"
                            />
                          </a>
                        </div>
                        <CardSubtitle
                          tag="p"
                          className="mb-2 text-nowrap text-muted"
                          onClick={() => toggle(data)}
                        >
                          {data.speakerTitle}, {data.speakerSubTitle}
                        </CardSubtitle>
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
        <ModalKeynote data={clickedData} modal={modal} toggle={toggle} />
      ) : (
        <></>
      )}
    </>
  );
};
