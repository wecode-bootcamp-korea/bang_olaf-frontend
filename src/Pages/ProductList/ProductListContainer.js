import React, { Component } from "react";
import ProductCard from "./ProductCard";
import "./ProductListContainer.scss";

class ProductListContainer extends Component {
  constructor() {
    super();
  }

  render() {
    const { initData } = this.props;
    return (
      <div className="productListContainer">
        {initData &&
          initData.map((product) => {
            return (
              <ProductCard
                id={product.id}
                image_url={product.image_url}
                title={product.title}
                detail_title={product.detail_title}
                price={product.price}
              />
            );
          })}
      </div>
    );
  }
}
export default ProductListContainer;
