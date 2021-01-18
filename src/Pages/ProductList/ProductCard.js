import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./ProductCard.scss";

class ProductCard extends Component {
  gotoDetail = () => {
    this.props.history.push(`product_detail/${this.props.id}`);
  };

  render() {
    const { id, image_url, title, detail_title, price } = this.props;
    return (
      <article onClick={this.gotoDetail} className="productCard" key={id}>
        <img src={image_url} />
        <div>{title}</div>
        <div>{detail_title}</div>
        <div>{price}</div>
      </article>
    );
  }
}
export default withRouter(ProductCard);
