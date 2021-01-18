import React, { Component } from "react";
import NavList from "./NavList";
import NavListTitle from "./NavListTitle";
import VideoContainer from "./VideoContainer";
import CategoryList from "./CategoryList";
import ProductListContainer from "./ProductListContainer";
import "./ProductList.scss";

import { PRODUCTLIST } from "../../config"; //데이터 통신할때 활성화

class ProductList extends Component {
  constructor() {
    super();
    this.state = {
      initData: [],
    };
  }

  componentDidMount() {
    fetch("../../../data/data.json", {}) //(PRODUCTLIST 는 통신할때 사용한다.)
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          // initData: res.message, (데이터 통신용)
          initData: res,
        });
      });
  }

  render() {
    return (
      <div className="ProductList">
        <NavList />
        <NavListTitle />
        <VideoContainer />
        <CategoryList />
        <ProductListContainer initData={this.state.initData} />
      </div>
    );
  }
}

export default ProductList;
