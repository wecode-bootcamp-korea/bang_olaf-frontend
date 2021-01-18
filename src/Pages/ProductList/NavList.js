import React, { Component } from "react";
import "./NavList.scss";
import { Link } from "react-router-dom";
class NavList extends Component {
  render() {
    return (
      <div className="NavList">
        <ul>
          <li>speaker</li>
          <li>headphones</li>
          <li>televisions</li>
          <li>accesaries</li>
          <li>stories</li>
        </ul>
      </div>
    );
  }
}

export default NavList;
