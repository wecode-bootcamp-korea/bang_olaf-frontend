import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./ProductCard.scss";

class ProductCard extends Component {
  constructor() {
    super();
    this.state = {
      index: 0,
    };
  }
  gotoDetail = (id) => {
    this.props.history.push(`/product/${id}`);
    console.log("click:", id);
  };

  colorHandler = (idx) => {
    this.setState({
      index: idx,
    });
  };
  render() {
    const { id, image_url, title, detail_title, price, colors } = this.props;
    return (
      <article className="productCard" key={id}>
        <img
          onClick={() => this.gotoDetail(id)}
          src={image_url[this.state.index]}
        />
        <div>{title}</div>
        <div className="detailTitle">{detail_title}</div>
        <div>₩ {price}</div>
        <div className="colorBorder">
          {colors &&
            colors.map((color, idx) => {
              return (
                <div
                  className="button"
                  onClick={() => this.colorHandler(colors.indexOf(color))}
                >
                  <div className={`color0${idx + 1}`}>
                    <p>{color}</p>
                  </div>
                </div>
              );
            })}
        </div>
      </article>
    );
  }
}

export default withRouter(ProductCard);
