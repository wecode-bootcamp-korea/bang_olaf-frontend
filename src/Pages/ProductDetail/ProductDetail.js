import React, { Component } from "react";
import ProductDetailNavbar from "./Components/ProductDetailNavbar";
import Summary from "./Components/Summary/Summary";
import Inspirations from "./Components/Inspirations/Inspirations";
import Features from "./Components/Features/Features";
import ProductSpec from "./Components/ProductSpec/ProductSpec";
import { PRODUCTDETAIL_API } from "../../config";
import "./ProductDetail.scss";

class ProductDetail extends Component {
  constructor() {
    super();
    this.state = {
      Datas: [],
      imgUrl: [],
      btnColor: true,
    };
  }

  componentDidMount() {
    this.updateDate();
  }

  updateDate() {
    fetch("/data/ProductsData.json", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          Datas: data,
          imgUrl: data[0].productsData.color,
        });
      });
  }

  handleChangeColor = () => {
    this.setState({ btnColor: !this.state.btnColor });
  };

  render() {
    const { Datas } = this.state;
    return (
      <>
        <ProductDetailNavbar />
        {Datas.map((item, index) => {
          return (
            <div key={index}>
              <Summary
                handleChangeColor={this.handleChangeColor}
                imageUrl={
                  this.state.imgUrl && this.state.btnColor
                    ? this.state.imgUrl.black
                    : this.state.imgUrl.red
                }
                title={item.productsData.title}
                detailTitle={item.productsData.detailTitle}
                description={item.productsData.description}
                descriptionEnglish={item.productsData.descriptionEnglish}
                price={item.productsData.price}
              />
              <Inspirations
                title={item.inspirations.title}
                description={item.inspirations.description}
                video={item.inspirations.video}
                slide_image={item.inspirations.slide_image}
              />
              <Features
                title={item.features.title}
                sub_title={item.features.sub_title}
                description={item.features.description}
                images={item.features.images}
                gallery_images={item.features.gallery_images}
              />
            </div>
          );
        })}

        <ProductSpec />
      </>
    );
  }
}

export default ProductDetail;
