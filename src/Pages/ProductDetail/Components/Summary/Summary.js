import React, { Component } from "react";
import SummaryAttribute from "./SummaryAttribute";
import SimpleSlider from "./SimpleSlider";
import SummaryContent from "./SummaryContent";
import "../Summary/Summary.scss";

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
      <main className="summary" id="개요">
        <div className="summaryGroup">
          <SimpleSlider imageUrl={imageUrl} />
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
