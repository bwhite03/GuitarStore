import React from "react";
import { Link } from "react-router-dom";

const ShopNow = () => {
  return (
    <section className="shopnow">
      <h2 className="shopnow-title">Shop Now</h2>
      <div className="items">
        <div className="item acoustic">
          <img src="img/shopnow/acoustic.png" alt="guitar" />
          <div className="shopnow-container">
            <h2>Acoustic Guitars</h2>
            <Link to="/guitar-products" className="btn">
              Shop Now
            </Link>
          </div>
        </div>
        <div className="item electric">
          <img src="img/shopnow/electric.png" alt="guitar" />
          <div className="shopnow-container">
            <h2>Electric Guitars</h2>
            <Link to="/guitar-products" className="btn">
              Shop Now
            </Link>
          </div>
        </div>
        <div className="item bass">
          <img src="img/shopnow/bass.png" alt="guitar" />
          <div className="shopnow-container">
            <h2>Electric Basses</h2>
            <Link to="/guitar-products" className="btn">
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopNow;
