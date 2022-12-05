import React from "react";
import "./bannerCarousel.css";
import Carousel from "react-bootstrap/Carousel";
const BannerCarousel = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/S/al-na-9d5791cf-3faf/d9ce992a-fb24-4024-b29c-9e4d3896a924.jpg"
            alt="George Clooney and Julia Roberts new movie"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://m.media-amazon.com/images/I/61cTQJfzyaL._SX3000_.jpg"
            alt="Holiday Shopping ad"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://m.media-amazon.com/images/I/71gJZhQCMEL._SX3000_.jpg"
            alt="Whole foods grocery pickup ad"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default BannerCarousel;
