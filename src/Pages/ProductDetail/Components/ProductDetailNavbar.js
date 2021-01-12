import React, { Component } from "react";
import "./ProductDetailNavbar.scss";

class ProductDetailNavbar extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <nav className="ProductDetailNavbar">
        <div className="ProductDetailNavbar__Group">
          <ul>
            <li>
              <span>개요</span>
            </li>
            <li>
              <span>영감</span>
            </li>
            <li>
              <span>특장점</span>
            </li>
            <li>
              <span>기술 사양</span>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default ProductDetailNavbar;
