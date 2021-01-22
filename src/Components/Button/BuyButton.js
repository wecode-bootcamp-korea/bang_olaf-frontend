import React, { Component } from "react";
import "./BuyButton.scss";

class buyButton extends Component {
  render() {
    return (
      <button className="buyBtn">
        <p className="btnInfo">BUY</p>
      </button>
    );
  }
}

export default buyButton;
