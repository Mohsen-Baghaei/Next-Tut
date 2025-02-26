"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ServerRoutePage() {
  const settings = {
    dots: true,
  };
  return (
    <div className="image-slider-container">
      <Slider {...settings}>
        <div>
          <img
            alt=""
            src="https://picsum.photos/400/200"
            className="w-4xl mx-auto"
          />
        </div>
        <div>
          <img
            alt=""
            src="https://picsum.photos/400/200"
            className="w-4xl mx-auto"
          />
        </div>
        <div>
          <img
            alt=""
            src="https://picsum.photos/400/200"
            className="w-4xl mx-auto"
          />
        </div>
        <div>
          <img
            alt=""
            src="https://picsum.photos/400/200"
            className="w-4xl mx-auto"
          />
        </div>
      </Slider>
    </div>
  );
}
