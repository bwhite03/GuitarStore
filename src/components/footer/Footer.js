import React from "react";
import "./footer.styles.scss";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-logo">Guitar World</div>
        <div className="footer-social-media">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook-f" />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter" />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram" />
          </a>
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-youtube" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
