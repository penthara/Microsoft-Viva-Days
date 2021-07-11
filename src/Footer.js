import React from "react";
import "./Footer.scss";
import footerData from "./content/Footerdata.json";
import footerLogo from "./images/website/transparentLogo.png";
import NavbarData from "./content/NavbarData.json";
import linkedInLogo from "./images/website/LinkedIn-white.png";
import FaceboolLogo from "./images/website/Facebook-white.png";
import TwitterLogo from "./images/website/twittericon.png";

export const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="row footer-wrapper">
        <div className=" col-12 col-md-8 col-lg-3 footer-logo-wrapper row">
          <img src={footerLogo} className="footerlogo" />
        </div>

        <div className="col-sm-8 col-md-6 col-lg-3 p-md-3 quick-links-wrapper px-3">
          <h4>Quick Links</h4>
          <div className="row">
            {NavbarData.map((data) => {
              return (
                <a
                  className="col-md-4 col-xs-12 p-0 quick-links text-nowrap"
                  href={data.url}
                >
                  {data.title}
                </a>
              );
            })}
          </div>
        </div>
        <div className="col-md-12 col-lg-3 p-md-3 contact-us-wrapper">
          <h4 className="text-center">Contact Us</h4>
          <div>
            {footerData.map((data) => {
              return (
                <div className="text-center">
                  <p> Email: {data.email}</p>
                  <p> Mobile: {data.mobile}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="col-md-12 col-xs-12 col-lg-3 p-md-3 social-media-wrapper">
          <h4 className="text-center">Social Media</h4>
          <div className="row ">
            {footerData.map((data) => {
              return (
                <div className="col-10 col-xs-12 col-lg-12 media-array text-center">
                  <a className="social-media-icon" target="_blank" href={data.linkedInLink}>
                    <img src={linkedInLogo} />
                  </a>
                  <a className="social-media-icon" target="_blank" href={data.TwitterLink}>
                    <img src={TwitterLogo} />
                  </a>
                  <a className="social-media-icon" target="_blank" href={data.facebookLink}>
                    <img src={FaceboolLogo} />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
