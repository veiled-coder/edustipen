import React from "react";
import Hero from "./Hero";
import Trending from "./Trending";
import "../styles/content.css";

function Content() {
  return (
    <div className="content-container">
    
        <Hero />
        <Trending />
    
    </div>
  );
}

export default Content;
