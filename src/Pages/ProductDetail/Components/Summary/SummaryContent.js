import React, { Component } from "react";
import BuyButton from "../../../../Components/Button/BuyButton";

class SummaryContent extends Component {
  render() {
    const {
      title,
      detailTitle,
      description,
      descriptionEnglish,
      price,
    } = this.props;

    return (
      <div className="summaryContent">
        <div className="summaryTitle">{title}</div>
        <div className="summaryDetailTitle">{detailTitle}</div>
        <p className="summaryDescription">{description}</p>
        <p className="summaryDescriptionReview">{descriptionEnglish}</p>

        <ul>
          {[...Array(2)].map((_, idx) => {
            return (
              <li key={idx}>
                <div
                  className="colorBorder"
                  onClick={() => this.props.handleChangeColor(idx)}
                >
                  <div className={`colorContent0${idx + 1}`}>
                    <p>{idx}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
        <span className="summaryPrice">{price}</span>
        <BuyButton />
      </div>
    );
  }
}

export default SummaryContent;
