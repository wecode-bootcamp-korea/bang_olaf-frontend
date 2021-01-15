import React, { Component } from "react";
import ProductCard from "../ProductList/ProductCard";

class ProductDetail extends Component {
  state = {
    initData: {},
  };
  componentDidMount = () => {
    fetch(`/data/data.json/${this.props.match.params.id}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          initData: res,
        });
      });
  };
  render() {
    return (
      <div>
        <ProductCard />
      </div>
    );
  }
}
export default ProductDetail;
