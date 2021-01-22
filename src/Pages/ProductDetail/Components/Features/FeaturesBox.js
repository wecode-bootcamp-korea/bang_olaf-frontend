import React, { Component } from "react";
import FeaturesInfo from "./FeaturesInfo";

class FeaturesBox extends Component {
  render() {
    const { images, title, sub_title, description } = this.props;

    return (
      <>
        {[...Array(1)].map((_, idx) => {
          return (
            <article className="featuresGroup" key={idx}>
              <div className="boxTop">
                <div className={`featuresBox0${idx + 1}`}>
                  <img src={images[0]} />
                  <div className="boxTopInfo">
                    <FeaturesInfo
                      title={title[0]}
                      sub_title={sub_title[0]}
                      description={description[0]}
                    />
                  </div>
                </div>
              </div>

              <div className="boxBottom">
                <div className={`featuresBox0${idx + 2}`}>
                  <FeaturesInfo
                    title={title[1]}
                    sub_title={sub_title[1]}
                    description={description[1]}
                  />
                </div>

                <div className={`featuresBox0${idx + 3}`}>
                  <FeaturesInfo
                    title={title[2]}
                    sub_title={sub_title[2]}
                    description={description[2]}
                  />
                </div>
              </div>
            </article>
          );
        })}
      </>
    );
  }
}

export default FeaturesBox;
