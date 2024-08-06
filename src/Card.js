import React from "react";
import "./Card.css";

import Star from "./Star.png";

export default function Card(props) {
  return (
    <div className="Card">
      <div>
        <img className="Image" src={props.img} alt="Activity Imgage" />
      </div>
      <div className="cardInfo">
        <img className="star" src={Star} alt="star" />
        <span>
          {" "}
          <span className="rating">{props.rating}</span>
          <span className="number"> ({props.reviwCount})</span>{" "}
          <span className="country">• {props.country}</span>
        </span>
        <h2 className="description">{props.title}</h2>
        <p className="price">
          <strong>From ${props.price}</strong> / person
        </p>
      </div>
    </div>
  );
}
