import React, { Component } from "react";
import { Link } from "react-scroll";
import "./ProductDetailNavbar.scss";

class ProductDetailNavbar extends Component {
  render() {
    const menu = ["개요", "영감", "특장점", "기술사양"];

    return (
      <nav className="productDetailNavbar">
        <div className="productDetailNavbarGroup">
          <ul>
            {menu.map((tab, index) => {
              return (
                <li key={index}>
                  <Link
                    to={`${tab}`}
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                  >
                    {tab}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    );
  }
}

export default ProductDetailNavbar;
