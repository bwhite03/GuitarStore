import React from "react";
import "./deals.styles.scss";

const Deals = () => {
  return (
    <section className="deals">
      <div className="deal-container">
        <img src="img/deals/deals.jpg" alt="deal" />
        <div className="deal-info">
          <h2>DEALS UP TO 25% OFF</h2>
          <h4>Now thru May 20</h4>
          <p>Maximum discount $500.</p>
          <p>View qualifying items and limitations</p>
        </div>
      </div>
      <div className="deal-container">
        <img src="img/deals/speakers.jpg" alt="deal" />
        <div className="deal-info">
          <h2>Up to $100 Off</h2>
          <h2>Select Speakers</h2>
          <h4>Now thru May 20</h4>
        </div>
      </div>
      <div className="deal-container">
        <img src="img/deals/phone.jpg" alt="deal" />
        <div className="deal-info">
          <h2>DOWNLOAD THE APP</h2>
          <h4>Avalible on iPhone and Android</h4>
          <p>Get exclusive offers and early access</p>
          <p>to our Memorial Day coupon</p>
        </div>
      </div>
    </section>
  );
};

export default Deals;
