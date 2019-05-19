import React, { Component } from "react";
import Banner from "./Banner";
import ShopNow from "./ShopNow";
import Featured from "./Featured";
import Deals from "./Deals";

class Home extends Component {
  render() {
    return (
      <main>
        <Banner />
        <div className="home-container">
          <ShopNow />
          <Featured />
          <Deals />
        </div>
      </main>
    );
  }
}

export default Home;
