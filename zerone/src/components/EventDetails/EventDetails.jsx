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
      "★ 2 teams from each college.",
      "★ participants must carry their valid id proof for the event.",
      "★ squad should be physically present for the match.",
      "★ game will be played in custom rooms created by the host.",
      "★ rules for each round will be disclosed on the spot.",
      "★ exploiting bugs for unfair advantages will be disqualified.",
      "★ every round of the event will have a definite time period.",
      "★ participants should carry their own mobile devices.",
      "★ Registraion Fee: Rs.400.",
    ],
    coordinators: [
      {
        name: "Dinesh",
        phone: "7090969677",
      },
      {
        name: "Ramyashree",
        phone: "8792103204",
      },
    ],
    registerLink: "https://forms.gle/a2AiffcDS2ULBexcA",
  },
  techfluence: {
    image: assets.techfluence,
    title: "Techfluence",
    details: [
      "★ this is a solo event.",
      "★ 3 participants from each college.",
      "★ the competition will consist of 4 rounds.",
      "★ every participant will have five minutes to prepare right before their turn.",
      "★ carrying paper materials or electronic devices is strictly prohibited.",
      "★ any use of offensive language or breaking the rules will lead to disqualification.",
      "★ the judges' decision will be considered final and binding.",
      "★ the event will test participants' knowledge, creativity, and presentation skills.",
      "★ in case of a tie, a tiebreaker round will be conducted.",
      "★ Registraion Fee: Rs.200.",
],
    coordinators: [
      {
        name: "Kiran kumar",
        
        phone: "9538002362",
      },
      {
        name: "Megha",
        phone: "8867474824",
      },
    ],
    registerLink: "https://forms.gle/VCQTRYBZpYC2enLs7",
  },
  geniux: {
    image: assets.geniux,
    title: "Geniux",
    details: [
      "★ individual participation only.",
      "★ 3 participants from each college.",
      "★ smartphones can be used only when instructed.",
      "★ rules for each round will be announced on the spot.",
      "★ malpractice will lead to immediate disqualification.",
      "★ judges' decisions are final.",
      "★ participants must show problem-solving and decision-making skills.",
      "★ professional behavior is expected.",
      "★ participants must adhere to the time limits for each round.",
      "★ Registraion Fee: Rs.200.",
],
    coordinators: [
      {
        name: "Nandan",
        phone: "8618539244",
      },
      {
        name: "Meghana",
        phone: "9019528254",
      },
    ],
    registerLink: "https://forms.gle/HMTY4JYyc1vuEapB9",
  },
  bytematrix: {
    image: assets.bytematrix,
    title: "ByteMatrix",
    details: [
      "★ it is an individual event.",
      "★ 3 participants from each college.",
      "★ languages allowed: c/c++/java/python.",
      "★ participants must report 30 minutes before the event to learn the rules.",
      "★ participants will be provided with pen and paper.",
      "★ personal gadgets are not allowed; organizers will provide a pc.",
      "★ if any kind of malpractice is found, the participant will be disqualified.",
      "★ verdict of the judges will be final.",
      "★ participants must adhere to the time limits for each round.",
      "★ cheating or collaboration will lead to disqualification.",
      "★ Registraion Fee: Rs.200.",
],
    coordinators: [
      {
        name: "Naveen",
        phone: "7204615411",
      },
      {
        name: "Sai Neha",
        phone: "9611989651",
      },
    ],
    registerLink: "https://forms.gle/LDkN76tVtFANZDnM8",
  },
  designscape: {
    image: assets.design,
    title: "Design",
    details: [
      "★ each team must consist of 2 members.",
      "★ 2 teams from each college.",
      "★ cumulative scoring will decide the result.",
      "★ allowed software: Adobe Illustrator, Adobe Photoshop, Canva, Figma.",
      "★ some rounds will be based on HTML, CSS, and JavaScript.",
      "★ participants are allowed to use their preferred editor like VSCode, Sublime, etc.",
      "★ referring to external code is not allowed.",
      "★ participants must bring their own laptop, mobile phones, and chargers.",
      "★ the event schedule must be followed strictly.",
      "★ install required software prior to the event.",
      "★ Registraion Fee: Rs.300.",

],
    coordinators: [
      {
        name: "Shivu",
        phone: "9108373134",
      },
      {
        name: "Kusuma",
        phone: "9591106749",
      },
      {
        name: "Prabhu",
        phone: "9591563335",
      },
    ],
    registerLink: "https://forms.gle/4CQAcJq5SNhJy3qQ8",
  },
  runtoriches: {
    image: assets.runtoriches,
    title: "Run To Riches",
    details: [
        "★ each team must have 4 members.",
        "★ 2 teams from each college.",
        "★ carry proof of registration or event IDs throughout the event.",
        "★ respect others; misconduct leads to disqualification.",
        "★ do not tamper with other teams, property or seek external help.",
        "★ do not destroy or misuse clues or event items.",
        "★ follow campus rules and stay within allowed areas.",
        "★ No Outsider's assistance is allowed.",
        "★ decisions of coordinators and judges' are final.",
        "★ Registraion Fee: Rs.400.",

    ],
    coordinators: [
      {
        name: "Mohammed Nauman",
        image: assets.nauman,
        phone: "7975220693",
      },
      {
        name: "Chandana",
        image: assets.chandana,
        phone: "9019819123",
      },
    ],
    registerLink: "https://forms.gle/8pUQaQDnYXY7PVaYA",
  },
  wisdomwar: {
    image: assets.wisdom,
    title: "Wisdom Wars",
    details: [
      "★ team size: 2 participants.",
      "★ 2 teams from each college.",
      "★ judges' decision is final.",
      "★ rules will be disclosed on the spot.",
      "★ each round has a fixed time limit.",
      "★ rounds will cover programming languages and computer networks.",
      "★ participants must bring their own mobile devices and internet.",
      "★ malpractice leads to immediate disqualification.",
      "★ Registraion Fee: Rs.300.",

    ],
    coordinators: [
      {
        name: "Kushal",
        image: assets.kushal,
        phone: "9880265679",
      },
      {
        name: "Manasa",
        image: assets.manasa,
        phone: "7338529116",
      },
    ],
    registerLink: "https://forms.gle/ghyVayPfKzD2VkKK7",
  },
  echosoflight: {
    image: assets.photography,
    title: "Echos-Of-Light",
    details: [
      "★ it is an individual event.",
      "★ 3 participants from each college.",
      "★ participants must assemble 30 minutes before the event to receive event information.",
      "★ editing must be done in front of volunteers in the designated area.",
      "★ malpractice (help from others) will lead to elimination.",
      "★ edited photos and videos must be submitted by the given time.",
      "★ no additional people other than participants are allowed in the event area.",
      "★ participants must use only provided equipment and software.",
      "★ content must be original and free from copyright violations.",
      "★ Registraion Fee: Rs.200.",

    ],
    coordinators: [
      {
        name: "Sathvik",
        image: assets.sathvik,
        phone: "7349173559",
      },
      {
        name: "Kavya",
        image: assets.kavya,
        phone: "8792747441",
      },
    ],
    registerLink: "https://forms.gle/Tvs3p8XezjayfyaBA",
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
              <button>Registration Closed</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
