import React, { Component } from "react";
import { Link } from "react-router-dom";

class SummaryAttribute extends Component {
  render() {
    const AttributeMenu = [
      {
        title: "무료배달",
        url:
          "https://images.ctfassets.net/8cd2csgvqd3m/6yPqeZT9UJ43mAFOAumSJY/38d04fadd59ceb0fe47f8722cf3f3206/delivery.svg",
      },
      {
        title: "30일 환불 보장",
        url:
          "https://images.ctfassets.net/8cd2csgvqd3m/xM1HBzrn1kPzzLtwoQO9J/9d1b7ecdb5a4360a5c1ac771b90ffba9/icon_30days.svg",
      },
      {
        title: "선물 포장 가능",
        url:
          "https://images.ctfassets.net/8cd2csgvqd3m/6pSq6e6CO4QSfbmsrgy2Ob/b13cb22712a579504abc580edc578507/icon_giftwrapping.svg",
      },
    ];

    return (
      <div className="summaryAttribute">
        <ul>
          {AttributeMenu.map((word, index) => {
            return (
              <li key={index}>
                <img src={word.url} />
                <Link to="#">{word.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default SummaryAttribute;
