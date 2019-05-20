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
        <div className="footer-sign-up">
          <h4>Sign Up To Our News Letter</h4>
          <input type="text" placeholder="Enter email" />
          <button>Sign Up</button>
        </div>
        <div className="footer-social-media">
          <a href="#">
            <i className="fab fa-facebook-f" />
          </a>
          <a href="#">
            <i className="fab fa-twitter" />
          </a>
          <a href="#">
            <i className="fab fa-instagram" />
          </a>
          <a href="#">
            <i className="fab fa-google-plus-g" />
          </a>
          <a href="#">
            <i className="fab fa-youtube" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
