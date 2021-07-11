import React from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import "./Modal.scss";
import LinkedInlogo from "./images/website/LinkedInlogo.png";
import twitterlogo from "./images/website/twitterblue.png";

const ModalSpeaker = ({ modal, toggle, data }) => {
  const closeBtn = <button className="close" onClick={toggle}></button>;
  console.log("modal speaker data", data);
  return (
    
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle} close={closeBtn}>
          {data.speakerName}
          {/* <button type="button" className="close-icon"></button> */}
        </ModalHeader>
        <ModalBody className="nopadding">
          <div className="p-5 text-center">
            <img
              src={`${data.speakerImage}`}
              alt={data.speakerAltText}
              className="modal-image"
            />
          </div>
          <div className="bg-grey p-5">
            <h4 className="mb-4">BIO</h4>
            <p className="speaker-information">{data.speakerInformation}</p>
            {/* <div className="divider"></div>
            <h4 className="mb-4">SESSIONS</h4>
            <p className="speaker-session">
              How to get started with Office 365 Development
            </p>
            <p className="speaker-session">Getting started with MS Graph API</p> */}
            <div className="divider"></div>
            <div className="image-array">
              <a href={data.speakerLinkedIn} target="_blank">
                <img src={LinkedInlogo} alt="LinkedIn logo" className="mr-4" />
              </a>
              <a href={data.speakerTwitter} target="_blank">
                <img src={twitterlogo} alt="Twitter logo" />
              </a>
            </div>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default ModalSpeaker;
