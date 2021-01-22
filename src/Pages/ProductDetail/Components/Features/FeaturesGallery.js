import React, { Component } from "react";

class Features extends Component {
  render() {
    const { src } = this.props;
    return (
      <article className="featuresGallery">
        {src.map((img, index) => {
          return <img key={index} alt={`featuresImages--${index}`} src={img} />;
        })}
      </article>
    );
  }
}

export default Features;
