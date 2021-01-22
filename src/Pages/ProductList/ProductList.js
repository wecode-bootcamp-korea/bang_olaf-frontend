import React, { Component } from "react";
import NavList from "./components/NavList";
import NavListTitle from "./components/NavListTitle";
import VideoContainer from "./components/VideoContainer";
import CategoryList from "./components/CategoryList";
import ProductListContainer from "./components/ProductListContainer";
import { PRODUCTLIST } from "../../config"; //데이터 통신할때 활성화
import "./ProductList.scss";

class ProductList extends Component {
  constructor() {
    super();
    this.state = {
      initData: [],
      navTitle: "SPEAKER",
    };
  }

  componentDidMount() {
    this.fetchProductList("VIEWALL");
  }

  handleNavTitle = (el) => {
    console.log("click:", el);
    this.setState({
      navTitle: el,
    });
  };

  fetchProductList = (menuText) => {
    console.log(menuText);
    const menuTable = {
      //"/data/data1.json",
      VIEWALL:
        //목데이터
        "http://10.58.2.216:8000/product/all/1",
      //데이터 통신
      //"data/data.json",
      PORTABLE:
        //목데이터
        "http://10.58.2.216:8000/product/products/1",
      //데이터 통신
    };

    fetch(menuTable[menuText])
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        this.setState({
          initData: res.results,
        });
      });
  };

  render() {
    console.log(this.state.navTitle);
    return (
      <div className="ProductList">
        <NavList handleNavTitle={this.handleNavTitle} />
        <NavListTitle navTitle={this.state.navTitle} />
        <VideoContainer />
        <CategoryList fetchProductList={this.fetchProductList} />
        <ProductListContainer initData={this.state.initData} />
      </div>
    );
  }
}

export default ProductList;
