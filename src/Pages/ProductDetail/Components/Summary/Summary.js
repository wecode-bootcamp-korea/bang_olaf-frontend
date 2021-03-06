import React, { Component } from "react";
import SummaryAttribute from "./SummaryAttribute";
import SimpleSlider from "./SimpleSlider";
import SummaryContent from "./SummaryContent";
import "../Summary/Summary.scss";

class Summary extends Component {
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
            handleChangeColor={this.props.handleChangeColor}
            imageUrl={imageUrl}
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
