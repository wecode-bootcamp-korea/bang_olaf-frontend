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

    return (
      <div className="summaryContent">
        <div className="summaryTitle">{title}</div>
        <div className="summaryDetailTitle">{detailTitle}</div>
        <p className="summaryDescription">{description}</p>
        <p className="summaryDescriptionReview">{descriptionEnglish}</p>

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

        <span className="summaryPrice">{price}</span>
      </div>
    );
  }
}

export default SummaryContent;
