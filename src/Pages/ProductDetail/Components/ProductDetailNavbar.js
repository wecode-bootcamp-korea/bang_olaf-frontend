import React, { Component } from "react";
import "./ProductDetailNavbar.scss";

class ProductDetailNavbar extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <nav className="productDetailNavbar">
        <div className="productDetailNavbarGroup">
          <ul>
            <li>
              <a href="#">
                <span>개요</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span>영감</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span>특장점</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span>기술 서양</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default ProductDetailNavbar;
