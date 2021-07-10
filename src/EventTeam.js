import React from "react";
import HeaderData from "./content/HeaderData.json";
import "./EventTeam.scss";
import EventTeams from "./content/EventTeam.json";

export const EventTeam = () => {
  return (
    <div className="eventTeam" id="eventTeam">
      <h1 className="eventTeam-heading">EVENT TEAM</h1>
      <h2 className="event-organizers">Organizers</h2>
      <div className="row">
        {EventTeams.map((data) => {
          return (
            <>
              {data.isVolunteer == "false" ? (
                <div className="col">
                  <img
                    src={`${data.OrganizerImage}`}
                    className="organizer-image"
                  />
                  <h4 className="organizer-name">
                    <span>{data.OrganizerName}</span>
                  </h4>
                </div>
              ) : null}
            </>
          );
        })}
      </div>
      {EventTeams.filter((et) => et.isVolunteer == "true").length > 0 ? (
        <>
          <h2 className="event-organizers">Volunteers</h2>
          <div className="row">
            {EventTeams.map((data) => {
              return (
                <>
                  {data.isVolunteer == "true" ? (
                    <div className="col">
                      <img
                        src={`${data.OrganizerImage}`}
                        className="organizer-image"
                      />
                      <h4 className="organizer-name">
                        <span>{data.OrganizerName}</span>
                      </h4>
                    </div>
                  ) : null}
                </>
              );
            })}
          </div>
        </>
      ) : null}
    </div>
  );
};
