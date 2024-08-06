import React from "react";
import "./App.css";
import NavBar from "./NavBar";

import Hero from "./Hero";
import Card from "./Card";
import Data from "./Data";

export default function App() {
  const cards = Data.map((item) => {
    return (
      <Card
        key={item.id}
        img={item.coverImg}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        country={item.location}
        title={item.title}
        price={item.price}
      />
    );
  });
  return (
    <div className="App">
      <NavBar />
      <Hero />

      <div className="card-list">{cards}</div>
    </div>
  );
}
