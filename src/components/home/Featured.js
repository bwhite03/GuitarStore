import React from "react";
import Slider from "react-slick";

const Featured = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
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
          <div className="featured-item">
            <img src="img/featured/slider1.jpg" alt="guitar" />
            <h4>Epiphone Les Paul Special II</h4>
          </div>
          <div className="featured-item">
            <img src="img/featured/slider2.jpg" alt="guitar" />
            <h4>Schecter Research C-1</h4>
          </div>
          <div className="featured-item">
            <img src="img/featured/slider3.jpg" alt="guitar" />
            <h4>Ibanez RGA Series</h4>
          </div>
          <div className="featured-item">
            <img src="img/featured/slider4.jpg" alt="guitar" />
            <h4>Taylor 200 Series 2017</h4>
          </div>
          <div className="featured-item">
            <img src="img/featured/slider5.jpg" alt="guitar" />
            <h4>Gibson 2018 SJ-200 Standard</h4>
          </div>
          <div className="featured-item">
            <img src="img/featured/slider6.jpg" alt="guitar" />
            <h4>Fender FA-135CE</h4>
          </div>
          <div className="featured-item">
            <img src="img/featured/slider7.jpg" alt="guitar" />
            <h4>Warwick RockBass Corvette</h4>
          </div>
          <div className="featured-item">
            <img src="img/featured/slider8.jpg" alt="guitar" />
            <h4>Rogue LX205B</h4>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Featured;
