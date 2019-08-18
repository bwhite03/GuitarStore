import React from "react";
import "./featured.styles.scss";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const Featured = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
    ]
  };
  return (
    <section className="featured">
      <h2 className="featured-title">Featured Products</h2>
      <div>
        <Slider {...settings}>
          <Link to="/1">
            <div className="featured-item">
              <img
                src="https://i.ibb.co/BGh1Z6D/epiphone-EJ-200.jpg"
                alt="guitar"
              />
              <h4>Epiphone EJ-200</h4>
            </div>
          </Link>
          <Link to="/2">
            <div className="featured-item">
              <img
                src="https://i.ibb.co/K2BpPpg/fender-FA-125.jpg"
                alt="guitar"
              />
              <h4>Fender FA-125</h4>
            </div>
          </Link>
          <Link to="/9">
            <div className="featured-item">
              <img src="https://i.ibb.co/JvYhN9v/gibson-EB.jpg" alt="guitar" />
              <h4>Gibson EB</h4>
            </div>
          </Link>
          <Link to="/4">
            <div className="featured-item">
              <img
                src="https://i.ibb.co/cC3phVV/ibanez-GRGR120-EX.jpg"
                alt="guitar"
              />
              <h4>Ibanez GRGR120EX</h4>
            </div>
          </Link>
          <Link to="/12">
            <div className="featured-item">
              <img
                src="https://i.ibb.co/R9dP4T8/squier-classic-vibe.jpg"
                alt="guitar"
              />
              <h4>Squier FSR Classic Vibe '70s</h4>
            </div>
          </Link>
          <Link to="/7">
            <div className="featured-item">
              <img
                src="https://i.ibb.co/DGfwTBW/yamaha-A-series.jpg"
                alt="guitar"
              />
              <h4>Yamaha A-Series A3R</h4>
            </div>
          </Link>
          <Link to="/11">
            <div className="featured-item">
              <img
                src="https://i.ibb.co/KKYKnzy/epiphone-les-paul-Pro.jpg"
                alt="guitar"
              />
              <h4>Epiphone Les Paul Custom Pro</h4>
            </div>
          </Link>
          <Link to="/8">
            <div className="featured-item">
              <img
                src="https://i.ibb.co/YbZgTTF/fender-Special-Edition-Standard.jpg"
                alt="guitar"
              />
              <h4>Fender Special Edition Standard</h4>
            </div>
          </Link>
        </Slider>
      </div>
    </section>
  );
};

export default Featured;
