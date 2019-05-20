import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-logo">Guitar World</div>
        <div className="footer-products">
          <h4>Acoustic Guitars</h4>
          <h4>Electric Guitars</h4>
          <h4>Electric Basses</h4>
        </div>
        <div className="footer-contact">
          <h4>Locations</h4>
          <h4>Privacy Note</h4>
          <h4>Call Us 555-555-5555</h4>
        </div>
        <div className="sign-up">
          <input type="text" placeholder="Enter email" />
          <button>Subscribe</button>
        </div>
        <div className="social-media">social</div>
      </div>
    </footer>
  );
};

export default Footer;
