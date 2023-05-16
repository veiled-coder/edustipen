import React from "react";
import Btn from "./Btn";

function Hero() {
  return (
    <section className="hero-section">
      <h1>Make your party fun!</h1>
          <p>Create your own custom playlist today.</p>
          <Btn text="Create playlist"/>
    </section>
  );
}

export default Hero;
