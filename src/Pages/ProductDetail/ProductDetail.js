import React, { Component } from "react";
// import CommonNavbar from "../../Components/Navbar/CommonNavbar";
// import ProductDetailNavbar from "./Components/ProductDetailNavbar";
import Summary from "./Components/Summary/Summary";
import Inspirations from "./Components/Inspirations";
import Features from "./Components/Features";
import "./ProductDetail.scss";

class ProductDetail extends Component {
  constructor() {
    super();
    this.state = {
      baseList: [],
    };
  }

  componentDidMount() {
    fetch("/data/productsData.json", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({
          baseList: data,
        });
      });
  }

  render() {
    return (
      <>
        {/* <CommonNavbar />
        <ProductDetailNavbar /> */}
        {this.state.baseList.map((item) => {
          return (
            <Summary
              key={item.productsData.id}
              imageUrl={item.productsData.imageUrl}
              title={item.productsData.title}
              detailTitle={item.productsData.detailTitle}
              description={item.productsData.description}
              descriptionEnglish={item.productsData.descriptionEnglish}
              price={item.productsData.price}
            />
          );
        })}
        <Inspirations />
        <Features />
      </>
    );
  }
}

export default ProductDetail;
