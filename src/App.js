import React from "react";
import "./App.css";
import NavBar from "./NavBar";

import Hero from "./Hero";
import Card from "./Card";
import Data from "./Data";

export default function App() {
  const cards = Data.map((item) => {
    return <Card key={item.id} item={item} />;
  });
  return (
    <div className="App">
      <NavBar />
      <Hero />

      <div className="card-list">{cards}</div>
    </div>
  );
}
