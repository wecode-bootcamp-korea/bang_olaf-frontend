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
          {[
            ...Array(3).map((_, idx) => {
              return (
                <li>
                  <div className="colorBorder">
                    <div className="colorContent">{idx + 1}</div>
                  </div>
                </li>
              );
            }),
          ]}

          {/* <li>
            <div className="colorBorder">
              <div className="colorContent">1</div>
            </div>
          </li> */}
        </ul>

        <span className="summaryPrice">{price}</span>
      </div>
    );
  }
}

export default SummaryContent;
