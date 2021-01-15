import React, { Component } from "react";
import SummaryAttribute from "./SummaryAttribute";
import SimpleSlider from "./SimpleSlider";
import SummaryContent from "./SummaryContent";
import "./Summary.scss";

class Summary extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const {
      imageUrl,
      title,
      detailTitle,
      description,
      descriptionEnglish,
      price,
    } = this.props;

    return (
      <main className="summary">
        <div className="summaryGroup">
          <SimpleSlider />
          <SummaryContent
            title={title}
            detailTitle={detailTitle}
            description={description}
            descriptionEnglish={descriptionEnglish}
            price={price}
          />
        </div>
        <SummaryAttribute />
      </main>
    );
  }
}

export default Summary;
