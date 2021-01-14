import React, { Component } from "react";
import "./Summary.scss";

class Summary extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const {
      imageurl,
      title,
      detailTitle,
      description,
      descriptionEnglish,
      price,
    } = this.props;

    return (
      <main className="summary">
        <div className="summaryGroup">
          <div className="summaryLeft">
            <img src={this.props.imageUrl} alt="summaryImg" />
            <ul>
              <li>슬라이더 부분</li>
            </ul>
            <p className="summaryDescriptionReview">
              "The weightiest and most refined little speaker we’ve heard in a
              while."
            </p>
          </div>
          <div className="summaryRight">
            <div className="summaryTitle">{this.props.title}</div>
            <div className="summaryDetailTitle">{this.props.detailTitle}</div>
            <p className="summaryDescription">{this.props.description}</p>
            <p className="summaryDescriptionReview">
              {this.props.descriptionEnglish}
            </p>

            <ul>
              <li>
                <button>1</button>
              </li>
              <li>
                <button>2</button>
              </li>
              <li>
                <button>3</button>
              </li>
              <li>
                <button>4</button>
              </li>
              <li>
                <button>5</button>
              </li>
            </ul>

            <span className="summaryPrice">{this.props.price}</span>
          </div>
        </div>
        <div className="summaryAttribute">
          <ul>
            <li>
              <img src="https://images.ctfassets.net/8cd2csgvqd3m/6yPqeZT9UJ43mAFOAumSJY/38d04fadd59ceb0fe47f8722cf3f3206/delivery.svg"></img>
              <a href="#">무료배달</a>
            </li>
            <li>
              <img src="https://images.ctfassets.net/8cd2csgvqd3m/xM1HBzrn1kPzzLtwoQO9J/9d1b7ecdb5a4360a5c1ac771b90ffba9/icon_30days.svg"></img>
              <a href="#">30일 환불 보장</a>
            </li>
            <li>
              <img src="https://images.ctfassets.net/8cd2csgvqd3m/6pSq6e6CO4QSfbmsrgy2Ob/b13cb22712a579504abc580edc578507/icon_giftwrapping.svg"></img>
              <a href="#">선물 포장 가능</a>
            </li>
          </ul>
        </div>
      </main>
    );
  }
}

export default Summary;
