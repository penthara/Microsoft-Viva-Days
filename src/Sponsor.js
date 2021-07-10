import React from "react";
import "./Sponsor.scss";
import SponsorData from "./content/SponsorData.json";

export const Sponsor = () => {
  return (
    <div className="sponsor p-md-5 p-3" id="sponsors">
      <h1 className="sponsor-heading my-5 text-center">SPONSORS</h1>
      <div className="row sponsor-wrapper text-center">
        {SponsorData.map((data) => {
          return (
            <div className=" col-xs-12 col-md-6 col-lg-4 sponsor-card">
              <a
                href={data.sponsorUrl}
                target="_blank"
                rel="noreferrer"
                className="sponsor-border"
              >
                <img
                  className="sponsor-img"
                  alt={data.sponsorAltText}
                  src={`${data.sponsorImage}`}
                />
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};
