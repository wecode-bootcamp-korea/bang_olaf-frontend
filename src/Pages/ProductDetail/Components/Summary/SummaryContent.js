import React, { Component } from "react";

class SummaryContent extends Component {
  render() {
    const {
      title,
      detailTitle,
      description,
      descriptionEnglish,
      price,
    } = this.props;

    const colors = ["#FF0000", "#ffffff", "#000000"];

    return (
      <div className="summaryContent">
        <div className="summaryTitle">{title}</div>
        <div className="summaryDetailTitle">{detailTitle}</div>
        <p className="summaryDescription">{description}</p>
        <p className="summaryDescriptionReview">{descriptionEnglish}</p>

        <ul>
          {colors.map((color, idx) => {
            return (
              <li key={idx}>
                <div className="colorBorder">
                  <div className="colorContent">{idx + 1}</div>
                </div>
              </li>
            );
          })}
        </ul>

        <span className="summaryPrice">{price}</span>
      </div>
    );
  }
}

export default SummaryContent;
