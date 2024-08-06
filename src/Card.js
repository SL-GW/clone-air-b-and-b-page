import React from "react";
import "./Card.css";

import Star from "./Star.png";

export default function Card(props) {
  let badgeText;

  if (props.item.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.item.location === "Online") {
    badgeText = "ONLINE";
  }
  return (
    <div className="Card">
      {badgeText && <div className="badge">{badgeText}</div>}
      <div>
        <img className="Image" src={props.item.coverImg} alt="Activity Image" />

        <div className="cardInfo">
          <img className="star" src={Star} alt="star" />
          <span>
            {" "}
            <span className="rating">{props.item.stats.rating}</span>
            <span className="number">
              {" "}
              ({props.item.stats.reviewCount})
            </span>{" "}
            <span className="country">• {props.item.location}</span>
          </span>
          <h2 className="description">{props.item.title}</h2>
          <p className="price">
            <strong>From ${props.item.price}</strong> / person
          </p>
        </div>
      </div>
    </div>
  );
}
