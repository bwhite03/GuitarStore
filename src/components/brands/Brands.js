import React from "react";
import "./brands.styles.scss";

const Brands = () => {
  return (
    <section className="brands">
      <div className="brands-container">
        <div className="brand-img">
          <a
            href="http://www.epiphone.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="https://i.ibb.co/6DD2JSc/epiphone.png" alt="brand" />
          </a>
        </div>
        <div className="brand-img">
          <a
            href="https://www.fender.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="https://i.ibb.co/XxFcQZs/fender.jpg" alt="brand" />
          </a>
        </div>
        <div className="brand-img">
          <a
            href="https://www.gibson.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="https://i.ibb.co/DRM2fyY/gibson.jpg" alt="brand" />
          </a>
        </div>
        <div className="brand-img">
          <a
            href="https://www.ibanez.com/usa/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="https://i.ibb.co/nBSh08C/ibanez.png" alt="brand" />
          </a>
        </div>
        <div className="brand-img">
          <a
            href="https://shop.fender.com/en-US/squier-electric-guitars/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="https://i.ibb.co/TR9PXr5/squier.png" alt="brand" />
          </a>
        </div>
        <div className="brand-img">
          <a
            href="https://usa.yamaha.com/products/musical_instruments/guitars_basses/index.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="https://i.ibb.co/stGp5N3/yamaha.png" alt="brand" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Brands;
