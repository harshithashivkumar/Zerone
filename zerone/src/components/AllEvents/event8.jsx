import React from "react";
import { assets } from "../../assets/assets";
import "./allevent.css";

const Event8 = () => {
  return (
    <div className="events-container">
      <div className="event-image">
        <img src={assets.wisdom} alt="VALORANT" />
        <h1>Event 8:VALORANT</h1>
      </div>
      <div className="event-list">
        <h1>Details for VALORANT...</h1>
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

export default Event8;