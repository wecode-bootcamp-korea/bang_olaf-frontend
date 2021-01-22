import React, { Component } from "react";

class ProductSpec extends Component {
  render() {
    const btnMenu = ["사운드", "디자인", "전원", "연결"];
    return (
      <article className="ProductSpec">
        <div className="ProductSpecGroup" id="기술사양">
          <div className="ProductSpecImg">
            <img
              alt="SpecImg"
              src="https://images.ctfassets.net/8cd2csgvqd3m/43kJ23Z66SjSQbPkTPxWA9/3edb3b7a100fa80eb42f53f5ed050b05/a1inthebox.png?q=90&fm=webp&w=720"
            />
          </div>
          <div className="ProductSpecInfo">
            <h3>제품 구성</h3>
            <p>Beosound A1 2nd Gen</p>
            <p>간편 사용 설명서</p>
            <p>USB-C to USB-A 케이블</p>
          </div>
        </div>

        <div className="ProductSpecBtn">
          {btnMenu.map((btn, idx) => {
            return (
              <button key={idx}>
                <h3>{btn}</h3>
              </button>
            );
          })}
        </div>
      </article>
    );
  }
}

export default ProductSpec;
