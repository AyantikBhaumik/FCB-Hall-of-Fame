import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Data from "./Data";
import "./HomePage.css";

export default function HomePage() {
  const [ca, setCa] = React.useState();
  const cards = Data.map((items) => {
    return (
      <Card
        key={items.id}
        {...items}
        isClicked={() => {
          isClicked(items.id);
        }}
      />
    );
  });

  function isClicked(id) {
    setCa(Data[id - 1]);
    // console.log(id)
  }

  return (
    <div>
      <Navbar />
      <Hero card={ca} />
      <section className="cards-list">{cards}</section>
    </div>
  );
}
