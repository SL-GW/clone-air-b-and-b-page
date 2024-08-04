import React from "react";
import "./Hero.css";
import heroPhotos from "./heroPhotos.png";

export default function Hero() {
  return (
    <div className="Hero">
      <div className="photoCollage">
        <img className="heroPhoto" src={heroPhotos} alt="collage of photos" />
      </div>
      <div className="text">
        <h1 className="title">Online Experiences</h1>
        <p className="blurb">
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </div>
  );
}
