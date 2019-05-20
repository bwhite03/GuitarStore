import React, { Component } from "react";
import Banner from "./Banner";
import ShopNow from "./ShopNow";
import Featured from "./Featured";
import Deals from "./Deals";
import Brands from "./Brands";

class Home extends Component {
  render() {
    return (
      <main>
        <Banner />
        <div className="home-container">
          <ShopNow />
          <Featured />
          <Deals />
          <Brands />
        </div>
      </main>
    );
  }
}

export default Home;
