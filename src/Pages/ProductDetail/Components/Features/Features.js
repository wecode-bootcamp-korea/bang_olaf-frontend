import React, { Component } from "react";
import FeaturesGallery from "./FeaturesGallery";
import FeaturesInfo from "./FeaturesInfo";

class Features extends Component {
  render() {
    const {
      id,
      title,
      sub_title,
      description,
      images,
      gallery_images,
    } = this.props;

    return (
      <section className="features" id="특장점">
        <article className="featuresGroup">
          <div className="boxTop">
            <div className="featuresbox01">
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
            <div className="featuresbox02">
              <FeaturesInfo
                title={title[1]}
                sub_title={sub_title[1]}
                description={description[1]}
              />
            </div>

            <div className="featuresbox03">
              <FeaturesInfo
                title={title[2]}
                sub_title={sub_title[2]}
                description={description[2]}
              />
            </div>
          </div>
        </article>
        <article className="featuresContainer01">
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
        <article className="featuresContainer02">
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

        <FeaturesGallery src={gallery_images} />

        <article className="featuresResponsiveGroup">
          <div className="featuresResponsiveImage">
            <img alt="featuresResponsiveImg" src={images[3]} />
          </div>
          <div className="featuresResponsiveInfo">
            <h3>BEOSOUND A1 2ND GEN</h3>
            <p>
              Beosound A1 2nd Gen 한 대를 추가하여 스테레오 사운드로 감상하세요.
            </p>
            <span>US$250</span>
          </div>
        </article>
      </section>
    );
  }
}

export default Features;
