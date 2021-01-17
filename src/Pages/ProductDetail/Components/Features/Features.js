import React, { Component } from "react";
import FeaturesGallery from "./FeaturesGallery";

class Features extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <section className="features" id="특장점">
        <article className="featuresGroup">
          <div className="boxTop">
            <div className="featuresbox01">
              <img src="https://images.ctfassets.net/8cd2csgvqd3m/7Lt2ApEasZPDnYJj3Gzn4g/797cebb4acbe656d80edab1681c6c8df/Feature1.jpg?q=90&fm=webp&w=720&h=405&fit=fill"></img>
              <div className="boxTopInfo">
                <h3>사운드</h3>
                <h2>최고의 디자인 속에서 흘러나오는 사운드</h2>
                <p>
                  세련되고 컴팩트한 디자인의 새로운 Beosound A1은 역대 최고의
                  음악 경험을 선사합니다. 뛰어난 True360 전방위 사운드가
                  자연스럽게 이 스피커를 주목하게 만들며, 멀티포인트 기능을
                  사용하여 두 개의 폰을 연결하고 선곡할 수 있습니다.
                </p>

                <div className="boxBottom">
                  <div className="featuresbox02">
                    <h3>배터리 지속 시간</h3>
                    <h2>더 멀리. 더 오래.</h2>
                    <p>
                      강력한 배터리 지속 시간과 세련되고 가벼운 디자인 덕분에
                      어디에서든지 신나는 비트를 즐길 수 있습니다. 휴대성이
                      탁월한 이 스피커는 일반 청취 음량에서 최대 18시간의 재생
                      시간을 제공합니다.
                    </p>
                  </div>

                  <div className="featuresbox03">
                    <h3>소재</h3>
                    <h2>완벽한 방진 및 방수 지원</h2>
                    <p>
                      내구성이 뛰어난 Beosound A1은 방수 기능이 있으며 완벽한
                      방진 기능까지 갖췄습니다. 해변부터 욕조까지 이 블루투스
                      스피커는 어디에서든지, 심지어 실수로 떨어뜨릴 경우에도
                      음악을 멈추지 않습니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
        <article className="featuresContainer01">
          <div>
            <img
              alt="featuresContainerImage"
              src="https://images.ctfassets.net/8cd2csgvqd3m/4cLbylOPLmM34PEupOgMDM/4a85533f7e8fa57b1641f84143cfa07d/GG_5.jpg?q=90&fm=webp&w=431&h=431&fit=fill"
            ></img>
          </div>
          <div className="featuresContainerInfo">
            <h3>스피커폰</h3>
            <h2>듣는 것이 전부가 아님</h2>
            <p>
              탁월한 스피커폰 성능 덕분에 선명한 음성 통화가 가능합니다.
              블루투스 5.1과 세 개의 내장 마이크가 온라인 회의 및 핸즈프리
              통화를 위한 최상의 연결을 제공합니다.
            </p>
          </div>
        </article>
        <article className="featuresContainer02">
          <div className="featuresContainerInfo">
            <h3>스마트 기능</h3>
            <h2>언제나 Alexa가 도와줄 준비를 하고 있음</h2>
            <p>
              손가락을 움직이지 않고도 곡을 선택하거나, 뉴스를 확인하거나,
              스케줄을 정리할 수 있습니다. Beosound A1은 이제 Alexa 음성
              어시스턴트를 완벽하게 지원합니다. 일반 청취 음량에서 음악을 재생할
              때 대화를 위해 목소리를 높일 필요가 없습니다.
            </p>
          </div>
          <div>
            <img
              alt="featuresContainerImage--02"
              src="https://images.ctfassets.net/8cd2csgvqd3m/16Xx9fuMIdhGwVHsG3j2m1/abb8d37d4f1ac3a4d8ce0867fc294e7c/Alexa_2.jpg?q=90&fm=webp&w=431&h=431&fit=fill"
            ></img>
          </div>
        </article>
        <FeaturesGallery />

        <article className="featuresResponsiveGroup">
          <div className="featuresResponsiveImage">
            <img
              alt="featuresResponsiveImg"
              src="https://images.ctfassets.net/8cd2csgvqd3m/6tD1ZXlvw5KYNJiMYcEC8v/b95ba406e5bed8b2b140be0438efd3b8/a1_2_stereo.png?q=90&fm=webp&w=1024&h=576&fit=pad"
            ></img>
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
