import React, { Component } from "react";
import FeaturesGallery from "./FeaturesGallery";
import FeaturesContainer from "./FeaturesContainer";
import FeaturesBox from "./FeaturesBox";
import FeaturesResponsive from "./FeaturesResponsive";

class Features extends Component {
  constructor() {
    super();
    this.state = {
      FeaturesList: [],
    };
  }

  render() {
    const {
      id,
      title,
      sub_title,
      description,
      images,
      gallery_images,
    } = this.props;

    return (
      <section className="features" id="특장점">
        <FeaturesBox
          images={images}
          title={title}
          sub_title={sub_title}
          description={description}
        />
        <FeaturesContainer
          images={images}
          title={title}
          sub_title={sub_title}
          description={description}
        />
        <FeaturesGallery src={gallery_images} />
        <FeaturesResponsive images={images} />
      </section>
    );
  }
}

export default Features;
