import React from "react";
import Slider from "react-slick";

const Featured = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  return (
    <section className="featured">
      <h2 className="featured-title">Our Featured Products</h2>
      <div>
        <Slider {...settings}>
          <div className="featured-item">
            <img src="img/featured/slider1.jpg" />
            <h4>Epiphone Les Paul Special II</h4>
          </div>
          <div className="featured-item">
            <img src="img/featured/slider2.jpg" />
            <h4>Schecter Research C-1</h4>
          </div>
          <div className="featured-item">
            <img src="img/featured/slider3.jpg" />
            <h4>Ibanez RGA Series</h4>
          </div>
          <div className="featured-item">
            <img src="img/featured/slider4.jpg" />
            <h4>Taylor 200 Series 2017</h4>
          </div>
          <div className="featured-item">
            <img src="img/featured/slider5.jpg" />
            <h4>Gibson 2018 SJ-200 Standard</h4>
          </div>
          <div className="featured-item">
            <img src="img/featured/slider6.jpg" />
            <h4>Fender FA-135CE</h4>
          </div>
          <div className="featured-item">
            <img src="img/featured/slider7.jpg" />
            <h4>Warwick RockBass Corvette</h4>
          </div>
          <div className="featured-item">
            <img src="img/featured/slider8.jpg" />
            <h4>Rogue LX205B</h4>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Featured;
