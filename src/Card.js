import React from "react";
import "./Card.css";
import swimmer from "./swimmer.png";
import Star from "./Star.png";

export default function Card() {
  return (
    <div className="Card">
      <div>
        <img className="swimImage" src={swimmer} alt="female swimmer" />
      </div>
      <div className="cardInfo">
        <img className="star" src={Star} alt="star" />
        <span>
          {" "}
          <span className="rating">5.0</span>
          <span className="number"> (6)</span>{" "}
          <span className="country">• USA</span>
        </span>
        <h2 className="description">Life lessons with Katie Zaferes</h2>
        <p className="price">
          <strong>From $136</strong> / person
        </p>
      </div>
    </div>
  );
}
