import React from 'react'
import Btn from "../components/Btn"
import TrendingList from './TrendingList'

function Trending() {
  return (
    <div className="trending-container">
      <h2>Trending songs</h2>
      <div className="trending-list-container">
        <TrendingList text="Unavailable by Davido" />
        <TrendingList text="Unavailable by Davido" />
        <TrendingList text="Unavailable by Davido" />
        <TrendingList text="Unavailable by Davido" />
        <TrendingList text="Unavailable by Davido" />
      </div>
      <Btn text="View more" />
    </div>
  );
}

export default Trending