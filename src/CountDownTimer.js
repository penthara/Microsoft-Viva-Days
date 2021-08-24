import React from "react";
import CountDown from "reactjs-countdown";
import "./CountDownTimer.scss";
import { Container, Row, Col } from "reactstrap";
import {
  isDesktop,
  isMobile,
  isMobileOnly,
  isTablet,
} from "react-device-detect";

export const CountDownTimer = () => {
  return (
    <div className="CountDownTimer">
      {!isMobileOnly ? (
        <Container fluid={true} className="countDown">
          <Row className="countDown-row">
            <Col>
              <Row>
                <Col>
                  <span className="timer-date"> 28th August 2021 </span>
                </Col>
              </Row>
              <Row>
                <Col>
                  <span className="timer-title">
                    {" "}
                    India Cloud Security Summit{" "}
                  </span>
                </Col>
              </Row>
            </Col>
            <Col>
              <CountDown end="August 28, 2021  09:00" />
            </Col>
          </Row>
        </Container>
      ) : (
        <Container fluid={true} className="countDown-mobile">
          <Row className="timer-data-row">
            <Col>
              <span className="timer-date-mobile"> 28th August 2021 </span>
            </Col>
          </Row>
          <Row>
            <Col>
              <span className="timer-title-mobile">
                {" "}
                India Cloud Security Summit{" "}
              </span>
            </Col>
          </Row>
          <Row className="timer-mobile">
            <Col>
              <CountDown end="August 28, 2021  09:00" />
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
};
