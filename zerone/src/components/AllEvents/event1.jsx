import React from "react";
import { assets } from "../../assets/assets";
import "./allevent.css";

const Event1 = () => {
  return (
    <div className="events-container">
      <div className="event-image">
        <img src={assets.bgmi} alt="Event 1: BGMI Tournament" />
        <h1>Event 1: BGMI</h1>
      </div>
      <div className="event-list">
        <h1>Details for BGMI Tournament...</h1>
        <p>★ NUMBER OF PARTICIPANTS PER TERM: 1</p>
        <p>★ PARTICIPANTS REGISTRATION FEES: RS.150</p>
        <p>★ JUDGES' DECISION WILL BE FINAL.</p>
        <p>★ PARTICIPANTS SHOULD BE GOOD AT COMMUNICATION.</p>
        <p>★ EVERY ROUND OF THE EVENT WILL HAVE A DEFINITE</p>
        <p>★ TIME PERIOD WHICH WILL NOT BE ALTERED.</p>
      </div>
    </div>
  );
};

export default Event1;
