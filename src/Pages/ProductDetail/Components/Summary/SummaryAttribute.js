import React, { Component } from "react";
import { Link } from "react-router-dom";

class SummaryAttribute extends Component {
  render() {
    const AttributeMenu = ["무료배달", "30일 환불 보장", "선물 포장 가능"];
    const images = [
      "https://images.ctfassets.net/8cd2csgvqd3m/6yPqeZT9UJ43mAFOAumSJY/38d04fadd59ceb0fe47f8722cf3f3206/delivery.svg",
      "https://images.ctfassets.net/8cd2csgvqd3m/xM1HBzrn1kPzzLtwoQO9J/9d1b7ecdb5a4360a5c1ac771b90ffba9/icon_30days.svg",
      "https://images.ctfassets.net/8cd2csgvqd3m/6pSq6e6CO4QSfbmsrgy2Ob/b13cb22712a579504abc580edc578507/icon_giftwrapping.svg",
    ];
    return (
      <div className="summaryAttribute">
        <ul>
          <li>
            <img src={images[0]}></img>
            <Link to="#">{AttributeMenu[0]}</Link>
          </li>
          <li>
            <img src={images[1]}></img>
            <Link to="#">{AttributeMenu[1]}</Link>
          </li>
          <li>
            <img src={images[2]}></img>
            <Link to="#">{AttributeMenu[2]}</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default SummaryAttribute;
