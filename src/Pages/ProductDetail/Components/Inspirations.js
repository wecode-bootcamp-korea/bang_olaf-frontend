import React, { Component } from "react";
import "./Inspirations.scss";

class Inspirations extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <>
        <div className="inspirations">
          <div className="inspirationsGroup">
            <div className="inspirationsTitle">
              <span>순간의 아름다움 포착</span>
            </div>
            <div className="inspirationsDescription">
              <p>
                어디로 가든, 누구를 만나든, 무엇을 할 계획이든 순간의 아름다움을
                포착하세요. 업그레이드된
              </p>
              <p>
                Beosound A1은 한 손에 들고 다닐 수 있는 음악 행복 주머니입니다.
                주변 모든 사람과 몇 시간
              </p>
              <p>동안 음악을 공유할 수 있도록 설계되었습니다.</p>
            </div>
          </div>

          <video width="1377" height="777" controls>
            <source
              src="https://videos.ctfassets.net/8cd2csgvqd3m/1Avzis9oq5FwaXWIAvwfXv/6d9729a0cf57763c66b1cd995c3bd424/A1_2.gen_Full_desktop.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </>
    );
  }
}

export default Inspirations;
