import React, { Component } from "react";
import "./home-page.styles.scss";
import Banner from "../../components/banner/Banner";
import ShopNow from "../../components/shop-now/ShopNow";
import Featured from "../../components/featured/Featured";
import Deals from "../../components/deals/Deals";
import Brands from "../../components/brands/Brands";

class Home extends Component {
  render() {
    return (
      <main>
        <Banner name="home-banner" />
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
