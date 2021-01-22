import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NavList.scss";
import { list } from "./navdata";
class NavList extends Component {
  render() {
    return (
      <ul className="NavList">
        {list.map((el) => {
          return <li onClick={() => this.props.handleNavTitle(el)}>{el}</li>;
        })}
      </ul>
    );
  }
}

export default NavList;
