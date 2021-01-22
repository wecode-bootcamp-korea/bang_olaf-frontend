import React, { Component } from "react";
import ProductCard from "./ProductCard";
import "./ProductListContainer.scss";

class ProductListContainer extends Component {
  render() {
    const { initData } = this.props;
    return (
      <section className="productListContainer">
        {initData &&
          initData.map((product) => {
            return (
              <ProductCard
                key={product.id}
                id={product.id}
                image_url={product.image_url}
                title={product.title}
                detail_title={product.detail_title}
                price={product.price}
                colors={product.colors}
              />
            );
          })}
      </section>
    );
  }
}

export default ProductListContainer;
