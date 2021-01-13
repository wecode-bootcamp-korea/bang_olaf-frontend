import React, { Component } from "react";
import CommonNavbar from "../../Components/Navbar/CommonNavbar";
import ProductDetailNavbar from "./Components/ProductDetailNavbar";
import Summary from "./Components/Summary";
import "./ProductDetail.scss";

class ProductDetail extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <>
        <CommonNavbar />
        <ProductDetailNavbar />
      </>
    );
  }
}

export default ProductDetail;
