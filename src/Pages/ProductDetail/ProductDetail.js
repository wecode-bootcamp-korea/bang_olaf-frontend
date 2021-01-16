import React, { Component } from "react";
import CommonNavbar from "../../Components/Navbar/CommonNavbar";
import ProductDetailNavbar from "./Components/ProductDetailNavbar";
import "./ProductDetail.scss";

class ProductDetail extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return <ProductDetailNavbar />;
  }
}

export default ProductDetail;
