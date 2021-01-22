import React, { Component } from "react";
import "./NavListTitle.scss";

class NavListTitle extends Component {
  render() {
    return (
      <div className="navListTitle">
        <h1>{this.props.navTitle}</h1>
      </div>
    );
  }
}

export default NavListTitle;
