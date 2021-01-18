import React, { Component } from "react";

class Inspirations extends Component {
  constructor() {
    super();
    this.state = {
      slideList: [],
    };
  }

  componentDidMount() {
    this.setState({
      slideList: this.props.slide_image,
    });
  }

  render() {
    const { id, title, description, video, slide_image } = this.props;
    const { slideList } = this.state;
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
            {slideList.map((images, index) => {
              return <img alt={`SlideImages__${index}`} src={images} />;
            })}
          </div>
        </article>
      </section>
    );
  }
}

export default Inspirations;
