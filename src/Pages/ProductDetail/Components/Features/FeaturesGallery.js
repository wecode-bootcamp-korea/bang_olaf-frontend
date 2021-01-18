import React, { Component } from "react";

class Features extends Component {
  constructor() {
    super();
    this.state = {
      galleryList: [],
    };
  }

  componentDidMount() {
    this.setState({
      galleryList: this.props.src,
    });
  }

  render() {
    const { galleryList } = this.state;
    return (
      <article className="featuresGallery">
        {galleryList.map((img, index) => {
          return <img key={index} alt={`featuresImages--${index}`} src={img} />;
        })}
      </article>
    );
  }
}

export default Features;
