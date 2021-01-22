import React, { Component } from "react";
import FeaturesInfo from "./FeaturesInfo";

class FeaturesContainer extends Component {
  render() {
    const { images, title, sub_title, description } = this.props;

    return (
      <>
        {[...Array(1)].map((_, idx) => {
          return (
            <div key={idx}>
              <article className={`featuresContainer0${idx + 1}`}>
                <div>
                  <img alt="featuresContainerImage" src={images[1]} />
                </div>
                <div className="featuresContainerInfo">
                  <FeaturesInfo
                    title={title[3]}
                    sub_title={sub_title[3]}
                    description={description[3]}
                  />
                </div>
              </article>
              <article className={`featuresContainer0${idx + 2}`}>
                <div className="featuresContainerInfo">
                  <FeaturesInfo
                    title={title[4]}
                    sub_title={sub_title[4]}
                    description={description[4]}
                  />
                </div>
                <div>
                  <img alt="featuresContainerImage--02" src={images[2]} />
                </div>
              </article>
            </div>
          );
        })}
      </>
    );
  }
}

export default FeaturesContainer;
