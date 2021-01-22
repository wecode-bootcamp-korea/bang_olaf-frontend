import React, { Component } from "react";
import BuyButton from "../../../../Components/Button/BuyButton";

class FeaturesResponsive extends Component {
  render() {
    const { images } = this.props;
    return (
      <article className="featuresResponsiveGroup">
        <div className="featuresResponsiveImage">
          <img alt="featuresResponsiveImg" src={images[3]} />
        </div>
        <div className="featuresResponsiveInfo">
          <h3>BEOSOUND A1 2ND GEN</h3>
          <p>
            Beosound A1 2nd Gen 한 대를 추가하여 스테레오 사운드로 감상하세요.
          </p>
          <span>US$250</span>
        </div>
      </article>
    );
  }
}

export default FeaturesResponsive;
