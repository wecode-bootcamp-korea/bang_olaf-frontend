import React, { Component } from "react";

class Inspirations extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { id, title, description, video, slide_image } = this.props;
    return (
      <section className="inspirations" id="영감">
        <div className="inspirationsGroup">
          <div className="inspirationsTitle">
            <span>{title}</span>
          </div>
          <div className="inspirationsDescription">
            <p>{description}</p>
          </div>
        </div>

        <video width="1350" height="777" controls>
          <source src={video} type="video/mp4" />
        </video>

        <article className="inspirationsSlide">
          <div className="inspirationsSlideImges">
            <img alt="SlideImages__1" src={slide_image[0]}></img>
            <img alt="SlideImages__2" src={slide_image[1]}></img>
            <img alt="SlideImages__3" src={slide_image[2]}></img>
          </div>
        </article>
      </section>
    );
  }
}

export default Inspirations;
