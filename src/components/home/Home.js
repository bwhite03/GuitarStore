import React, { Component } from "react";
import Banner from "./Banner";
import ShopNow from "./ShopNow";
import Featured from "./Featured";

class Home extends Component {
  render() {
    return (
      <main>
        <Banner />
        <div className="home-container">
          <ShopNow />
          <Featured />
        </div>
      </main>
    );
  }
}

export default Home;
