import React, { Component } from "react";
import ProductCard from "./ProductCard";
import "./ProductList.scss";

class ProductList extends Component {
  constructor() {
    super();
    this.state = {
      initData: [],
    };
  }

  componentDidMount() {
    fetch("/data/data.json", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          initData: res,
        });
      });
  }

  render() {
    return (
      <div className="ProductList">
        <div className="navList">
          <ul>
            <li>speaker</li>
            <li>headphones</li>
            <li>televisions</li>
            <li>accesaries</li>
            <li>stories</li>
          </ul>
        </div>
        <div className="navListTitle">Speaker</div>
        <div className="video">
          <img src="../images/logo.jpeg" alt="logo" />
        </div>
        <div className="categoryList">
          <ul>
            <li>VIEW ALL</li>
            <li>PORTABLE</li>
            <li>MULTIROOM</li>
            <li>HOME THEATRE</li>
            <li>STREO</li>
            <li>ACHITECHTURAL</li>
          </ul>
        </div>
        <div className="productListContainer">
          {this.state.initData.map((product) => {
            return (
              <ProductCard
                id={product.id}
                imageSrc={product.imageSrc}
                modelName={product.modelName}
                description={product.description}
                price={product.price}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default ProductList;
