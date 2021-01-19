import React, { Component } from "react";
import FeaturesInfo from "./FeaturesInfo";

class FeaturesBox extends Component {
  render() {
    const { images, title, sub_title, description } = this.props;
    return (
      <div className="featuresbox01">
        <img src={images[0]} />
        <div className="boxTopInfo">
          <FeaturesInfo
            title={title[0]}
            sub_title={sub_title[0]}
            description={description[0]}
          />
        </div>
      </div>
    );
  }
}

export default FeaturesBox;
