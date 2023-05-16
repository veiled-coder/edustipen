import React from "react";
import { FaPlus } from "react-icons/fa";

function TrendingList({ text }) {
  return (
    <div className="trending-list">
      {text}
      <FaPlus/>
    </div>
  );
}

export default TrendingList;
