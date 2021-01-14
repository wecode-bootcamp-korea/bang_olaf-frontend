import React, { Component } from "react";
// import CommonNavbar from "../../Components/Navbar/CommonNavbar";
// import ProductDetailNavbar from "./Components/ProductDetailNavbar";
import Summary from "./Components/Summary";
import Inspirations from "./Components/Inspirations";
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
              imageUrl={item.imageUrl}
              title={item.title}
              detailTitle={item.detailTitle}
              description={item.description}
              descriptionEnglish={item.descriptionEnglish}
              price={item.price}
            />
          );
        })}
        <Inspirations />
      </>
    );
  }
}

export default ProductDetail;
