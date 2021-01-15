import React, { Component } from "react";
import { Link } from "react-router-dom";
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
              <Link href="#">
                <span>개요</span>
              </Link>
            </li>
            <li>
              <Link href="#">
                <span>영감</span>
              </Link>
            </li>
            <li>
              <Link href="#">
                <span>특장점</span>
              </Link>
            </li>
            <li>
              <Link href="#">
                <span>기술 서양</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default ProductDetailNavbar;
