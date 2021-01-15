import React, { Component } from "react";
import Slider from "react-slick";
import SliderList from "./SliderList";
import "../Summary/_Slick.scss";
import "../Summary/_Slick-theme.scss";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      lazyLoad: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 2,
    };

    return (
      <Slider {...settings} className="sliderImages">
        <SliderList />
        <SliderList />
        <SliderList />
        <SliderList />
      </Slider>
    );
  }
}
