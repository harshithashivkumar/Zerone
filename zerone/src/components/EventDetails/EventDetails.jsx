import React from "react";
import { useParams } from "react-router-dom";
import { assets } from "../../assets/assets";
import "./EventDetails.css";

const eventDetails = {
  bgmi: {
    image: assets.bgmi,
    title: "BGMI",
    details: [
      "★ number of participants per team: 4",
      "★ participants must carry their valid id proof for the event.",
      "★ squad should be physically present for the match.",
      "★ game will be played in custom rooms created by the host.",
      "★ rules for each round will be disclosed on the spot.",
      "★ exploiting bugs for unfair advantages will be disqualified.",
      "★ every round of the event will have a definite time period.",
      "★ participants should carry their own mobile devices.",

    ],
    coordinators: [
      {
        name: "Dinesh L",
        image: assets.sit,
        phone: "7090969677",
      },
      {
        name: "Ramyashree",
        image: assets.sit,
        phone: "8792103204",
      },
    ],
    registerLink: "https://example.com/register-bgmi",
  },
  techfluence: {
    image: assets.techfluence,
    title: "Techfluence",
    details: [
      "★ this is a solo event.",
      "★ the competition will consist of 4 rounds.",
      "★ every participant will have five minutes to prepare right before their turn.",
      "★ carrying paper materials or electronic devices is strictly prohibited.",
      "★ any use of offensive language or breaking the rules will lead to disqualification.",
      "★ the judges' decision will be considered final and binding.",
      "★ the event will test participants' knowledge, creativity, and presentation skills.",
      "★ in case of a tie, a tiebreaker round will be conducted.",
],
    coordinators: [
      {
        name: "Kiran kumar HR",
        image: assets.sit,
        phone: "9538002362",
      },
      {
        name: "Megha K",
        image: assets.sit,
        phone: "8867474824",
      },
    ],
    registerLink: "https://example.com/register-techfluence",
  },
  geniux: {
    image: assets.geniux,
    title: "Geniux",
    details: [
      "★ individual participation only.",
      "★ smartphones can be used only when instructed.",
      "★ rules for each round will be announced on the spot.",
      "★ malpractice will lead to immediate disqualification.",
      "★ judges' decisions are final.",
      "★ participants must show problem-solving and decision-making skills.",
      "★ professional behavior is expected.",
      "★ Participants registration fees: Rs.150",
],
    coordinators: [
      {
        name: "Nanadan",
        image: assets.sit,
        phone: "8618539244",
      },
      {
        name: "Meghana A C",
        image: assets.sit,
        phone: "9019528254",
      },
    ],
    registerLink: "https://example.com/register-geniux",
  },
  bytematrix: {
    image: assets.bytematrix,
    title: "ByteMatrix",
    details: [
      "★ it is an individual event.",
      "★ languages allowed: c/c++/java/python.",
      "★ participants must report 30 minutes before the event to learn the rules.",
      "★ participants will be provided with pen and paper.",
      "★ personal gadgets are not allowed; organizers will provide a pc.",
      "★ if any kind of malpractice is found, the participant will be disqualified.",
      "★ verdict of the judges will be final.",
      "★ participants must adhere to the time limits for each round.",
      "★ cheating or collaboration will lead to disqualification.",
],
    coordinators: [
      {
        name: "Naveen V",
        image: assets.sit,
        phone: "7204615411",
      },
      {
        name: "Sai Neha P R",
        image: assets.sit,
        phone: "9611989651",
      },
    ],
    registerLink: "https://example.com/register-bytematrix",
  },
  designscape: {
    image: assets.design,
    title: "Design",
    details: [
      "★ each team must consist of 2 members.",
      "★ cumulative scoring will decide the result.",
      "★ allowed software: Adobe Illustrator, Adobe Photoshop, Canva, Figma.",
      "★ some rounds will be based on HTML, CSS, and JavaScript.",
      "★ participants are allowed to use their preferred editor like VSCode, Sublime, etc.",
      "★ referring to external code is not allowed.",
      "★ participants must bring their own laptop, mobile phones, and chargers.",
      "★ the event schedule must be followed strictly.",
      "★ install required software prior to the event.",

],
    coordinators: [
      {
        name: "Shivu T J",
        image: assets.sit,
        phone: "9108373134",
      },
      {
        name: "Kusuma",
        image: assets.sit,
        phone: "9591106749",
      },
      {
        name: "Prabhu",
        image: assets.sit,
        phone: "9591563335",
      },
    ],
    registerLink: "https://example.com/register-designscape",
  },
  runtoriches: {
    image: assets.runtoriches,
    title: "Run To Riches",
    details: [
        "★ each team must have 4 members.",
        "★ carry proof of registration or event IDs throughout the event.",
        "★ respect others; misconduct leads to disqualification.",
        "★ do not tamper with other teams, property or seek external help.",
        "★ do not destroy or misuse clues or event items.",
        "★ follow campus rules and stay within allowed areas.",
        "★ No Outsider's assistance is allowed.",
        "★ decisions of coordinators and judges are final.",

    ],
    coordinators: [
      {
        name: "Mohammed Nauman",
        image: assets.sit,
        phone: "7975220693",
      },
      {
        name: "Chandana TP",
        image: assets.sit,
        phone: "9019819123",
      },
    ],
    registerLink: "https://example.com/register-runtoriches",
  },
  wisdomwar: {
    image: assets.wisdom,
    title: "Wisdom Wars",
    details: [
      "★ team size: 2 participants.",
      "★ registration fee: RS.150.",
      "★ judges' decision is final.",
      "★ rules will be disclosed on the spot.",
      "★ each round has a fixed time limit.",
      "★ rounds will cover programming languages and computer networks.",
      "★ prizes: winner RS.3000, runner-up RS.1500.",
      "★ participants must bring their own mobile devices and internet.",
      "★ malpractice leads to immediate disqualification.",

    ],
    coordinators: [
      {
        name: "Kushal S N",
        image: assets.sit,
        phone: "9880265679",
      },
      {
        name: "N G Manasa Bhuvana Keerthi",
        image: assets.sit,
        phone: "7338529116",
      },
    ],
    registerLink: "https://example.com/register-wisdomwar",
  },
  valorant: {
    image: assets.photography,
    title: "Photography",
    details: [
      "★ it is an individual event.",
      "★ participants must assemble 30 minutes before the event to receive event information.",
      "★ editing must be done in front of volunteers in the designated area.",
      "★ malpractice (help from others) will lead to elimination.",
      "★ edited photos and videos must be submitted by the given time.",
      "★ no additional people other than participants are allowed in the event area.",
      "★ participants must use only provided equipment and software.",
      "★ content must be original and free from copyright violations.",

    ],
    coordinators: [
      {
        name: "Sathvik",
        image: assets.sit,
        phone: "7349173559",
      },
      {
        name: "Kavya HS",
        image: assets.sit,
        phone: "8792747441",
      },
    ],
    registerLink: "https://example.com/register-valorant",
  },
};

const EventDetails = () => {
  const { id } = useParams();
  const event = eventDetails[id];

  if (!event) {
    return <h1>Event Not Found</h1>;
  }

  return (
    <div className="event-details-container">
      <div className="event-image">
        <img src={event.image} alt={event.title} />
       
      </div>
      <div className="event-flex">
        <div className="event-details">
          <h2>Event Details</h2>
          <br />
          <ul>
            {event.details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        </div>
        <div className="event-actions">
          <h2>Event Coordinators</h2>
          <div className="event-coordinators">
            
            {event.coordinators.map((coordinator, index) => (
              <div key={index} className="coordinator">
                <img src={coordinator.image} alt={coordinator.name} />
                <p>{coordinator.name}</p>
                <p>{coordinator.phone}</p>
              </div>
            ))}
          </div>
          <div className="register-button">
            <a
              href={event.registerLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>Register</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;