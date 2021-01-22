import React, { Component } from "react";

class FeaturesInfo extends Component {
  render() {
    const { title, sub_title, description } = this.props;
    return (
      <>
        <h3>{title}</h3>
        <h2>{sub_title}</h2>
        <p>{description}</p>
      </>
    );
  }
}

export default FeaturesInfo;
