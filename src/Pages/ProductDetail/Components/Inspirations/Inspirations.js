import React, { Component } from "react";

class Inspirations extends Component {
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
            {slide_image.map((images, index) => {
              return (
                <img alt={`SlideImages__${index}`} src={images} key={index} />
              );
            })}
          </div>
        </article>
      </section>
    );
  }
}

export default Inspirations;
