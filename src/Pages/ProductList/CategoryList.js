import React, { Component } from "react";
import "./CategoryList.scss";

class CategoryList extends Component {
  render() {
    return (
      <div className="CategoryList">
        <ul>
          <li>VIEW ALL</li>
          <li>PORTABLE</li>
          <li>MULTIROOM</li>
          <li>HOME THEATRE</li>
          <li>STREO</li>
          <li>ACHITECHTURAL</li>
        </ul>
      </div>
    );
  }
}

export default CategoryList;
