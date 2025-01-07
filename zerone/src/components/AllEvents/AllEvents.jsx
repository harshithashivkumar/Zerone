import React from "react";
import { assets } from "../../assets/assets";


const AllEvents = () => {
  return (
    <div className="event-container">
      <div className="event-card">
        {/* Image Section */}
        <div className="image">
          <img src={assets.sit} alt="Event Logo" />
        </div>

        {/* Text Section */}
        <div className="event-text">
          <h1>BGMI</h1>

          {/* Event Theme */}
          <div className="event-theme">
            <h2>Theme</h2>
          </div>

          {/* Event Description */}
          <pre>
            {`BGMI Showdown

Gear up for the ultimate battle royale experience at ZERONE! Dive into the action-packed world of BGMI (Battlegrounds Mobile India) and prove your mettle in this thrilling gaming competition. Assemble your squad, strategize, and outplay your opponents to emerge victorious.

Event Format:
- Team Size: 4 players per squad
- Rounds: Multiple matches (Erangel, Miramar, Sanhok)
- Scoring: Points awarded for kills and placement

Rules:
- Fair gameplay is a must (no hacks or cheats allowed).
- Players must follow all event guidelines.
- All participants must use their own devices.

Prizes:
- Exciting rewards for the top teams!

Do you have what it takes to survive and claim the Winner Winner Chicken Dinner? Join us and showcase your gaming skills in this epic showdown!`}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default AllEvents;
