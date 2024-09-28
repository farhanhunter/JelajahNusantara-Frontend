import React from "react";
import cardItem from "./cardItem";
import "./cards.css";
function cards() {
  return (
    <div className="cards">
      <h1>Check Out these Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <cardItem src="images/img-9.jpg" text="Explore the hidden waterfall inside the indonesia rainforest" label="Adventure" path="/services" />
            <cardItem src="images/img-2.jpg" text="Explore a baeautiful paradise beach" label="Beach" path="/services" />
          </ul>
          <ul className="cards__items">
            <cardItem src="images/img-9.jpg" text="Explore the hidden waterfall inside the indonesia rainforest" label="Adventure" path="/services" />
            <cardItem src="images/img-2.jpg" text="Explore a baeautiful paradise beach" label="Beach" path="/services" />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default cards;
