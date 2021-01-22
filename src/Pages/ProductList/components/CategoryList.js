import React, { Component } from "react";
import "./CategoryList.scss";

class CategoryList extends Component {
  render() {
    const list = [
      "VIEWALL",
      "PORTABLE",
      "MULTIROOM",
      "HOME THEATRE",
      "STREO",
      "ACHITECTURAL",
    ];
    return (
      <ul className="CategoryList">
        {list.map((el) => {
          return <li onClick={() => this.props.fetchProductList(el)}>{el}</li>;
        })}
      </ul>
    );
  }
}

export default CategoryList;
