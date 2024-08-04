import React from "react";
import "./NavBar.css";
import logo from "./logo.png";

export default function NavBar() {
  return (
    <div className="NavBar">
      <img className="logo-nav" src={logo} alt="Airbnb logo" />
    </div>
  );
}
