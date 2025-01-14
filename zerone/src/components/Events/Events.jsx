import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets"; // Import assets object
import "./Events.css";

const eventList = [
  { id: "bgmi", name: "Ground zero wars ",name1 : "BGMI", image: assets.bgmi,cat:"bg" },
  { id: "techfluence", name: "Techfluence",name1 : "TECH TALK", image: assets.techfluence },
  { id: "geniux", name: "Geniux",name1 : "IT MANAGER", image: assets.geniux },
  { id: "bytematrix", name: "Bytematrix",name1 : "CODING", image: assets.bytematrix },
  { id: "designscape", name: "Design Scape",name1 : "WEB & POSTER DESIGNING", image: assets.design },
  { id: "runtoriches", name: "Run to Riches",name1 : "TREASURE HUNT", image: assets.runtoriches },
  { id: "wisdomwar", name: "Wisdom war",name1 : "TECH QUIZ", image: assets.wisdom },
  { id: "echosoflight", name: "Echoes Of Light",name1 : "PHOTOGRAPHY", image: assets.photography },
];

const Events = () => {
  return (
    <div className="events-container">
      <h1>EVENTS</h1>
      <h3>Discover more about our events <span>here</span></h3>
      <div className="events-list">
        {eventList.map((event, index) => (
          <div key={index} className="event">
            <Link to={`/${event.id}`}>
              <div className="img-container">
                <img src={event.image} alt={event.name} />
              </div>
              <div className="textBox">
                <p className="text head">{event.name}</p>
                <span>{event.name1}</span> {/* If you want to show category */}
                <p className="text price">{event.pric}</p> {/* If you want to show price */}
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;



/* import React from "react";
import { Link } from "react-router-dom"; // Import Link
import { assets } from "../../assets/assets";
import './Events.css';

const eventData = [
  {
    image: assets.bgmi,
    title: "bgmi",
    category: "Cryptocurrency",
    price: "1.654,34€",
    link: "/event1", // Route path for all events
  },
  {
    image: assets.techfluence,
    title: "techfluence",
    category: "Cryptocurrency",
    price: "2.345,56€",
    link: "/event1", // Route path for all events
  },
  {
    image: assets.geniux,
    title: "geniux",
    category: "Blockchain",
    price: "1.100,10€",
    link: "/event1", // Route path for all events
  },
  {
    image: assets.bytematrix,
    title: "bytematrix",
    category: "Cryptocurrency",
    price: "1.225,50€",
    link: "/event1", // Route path for all events
  },
  {
    image: assets.design,
    title: "design",
    category: "Cryptocurrency",
    price: "500,30€",
    link: "/event1", // Route path for all events
  },
  {
    image: assets.runtoriches,
    title: "runtoriches",
    category: "Cryptocurrency",
    price: "200,15€",
    link: "/event1", // Route path for all events
  },
  {
    image: assets.wisdom,
    title: "wisdom",
    category: "Cryptocurrency",
    price: "0,75€",
    link: "/event1", // Route path for all events
  },
  {
    image: assets.valorant,
    title: "valorant",
    category: "Blockchain",
    price: "15,40€",
    link: "/event1", // Route path for all events
  }
];

const Events = () => {
  return (
    <div className="events-container">
      <h1>EVENTS</h1>
      <div className="events-list">
        {eventData.map((event, index) => (
          <div key={index} className="event">
            <Link to={event.link}>
              <div className="img-container">
                <img src={event.image} alt={event.title} />
              </div>
              <div className="textBox">
                <p className="text head">{event.title}</p>
                <span>{event.category}</span>
                <p className="text price">{event.price}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
 */