import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./ProductCard.scss";

class ProductCard extends Component {
  gotoDetail = () => {
    this.props.history.push(`product_detail/${this.props.id}`);
  };

  render() {
    const { id, imageSrc, modelName, description, price } = this.props;
    return (
      <div onClick={this.gotoDetail} className="productCard" key={id}>
        <img src={imageSrc} />
        <div>{modelName}</div>
        <div>{description}</div>
        <div>{price}</div>
      </div>
    );
  }
}
export default withRouter(ProductCard);
