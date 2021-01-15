import React from "react";
import "./Account.scss";

class Account extends React.Component {
  constructor() {
    super();
    this.state = {
      firstname: "",
      firstnamehasValue: true,
      lastname: "",
      lastnamehasValue: true,
      email: "",
      emailCondition: true,
      password: "",
      pwLengthCondition: true,
      checkPw: "",
      checkpwAndPwhasValue: true,
      isSamePws: true,
      checkpwCondition: true,
      adagreement: false,
      serviceagreement: false,
      //possibleRegisterConditon: false,
    };
  }

  handleInput = (e) => {
    const { name, value, checked } = e.target;
    this.setState({
      [name]: value,
      //[name]: checked,
    });
  };

  // 2차 유효성 검사 리스트
  secondCondition = () => {
    const { firstname, lastname, email, password, checkPw } = this.state;
    const firstnamehasValue = Boolean(firstname); // 이름에 값 들어옴

    const lastnamehasValue = Boolean(lastname); // 성에 값 들어옴
    const emailCondition = email.includes("@"); // 이메일 @ 확인
    const pwLengthCondition = password.length >= 10 && password.length <= 30; // 비번 길이
    const checkpwAndPwhasValue = Boolean(password) && Boolean(checkPw); // 비번 비번확인 값 있음?
    const isSamePws = password === checkPw; // 비번 === 비번 확인
    const checkpwCondition = checkpwAndPwhasValue && isSamePws; // 비번확인 모든 조건

    if (firstnamehasValue.length) {
      this.setState({ firstnamehasValue });
    }

    // this.setState = {
    //   lastnamehasValue,
    //   emailCondition,
    //   pwLengthCondition,
    //   checkpwAndPwhasValue,
    //   isSamePws,
    //   checkpwCondition,
    // };
  };

  /*registerCondition = () => {
    // 유효성 검사
    const {
      firstname,
      lastname,
      email,
      password,
      // pwLengthCondition,
      checkPw,
      serviceagreement,
    } = this.state; // 다 넣었는지 추후 확인

    const possibleRegisterConditon =
      firstname &&
      lastname &&
      //emailCondition &&
      password &&
      checkPw &&
      serviceagreement;

    this.setState({
      possibleRegisterConditon: possibleRegisterConditon,
    });
  };*/

  /*handleBtn = () => {
    
  };*/

  render() {
    const {
      firstname,
      firstnamehasValue,
      lastname,
      lastnamehasValue,
      emailCondition,
      password,
      pwLengthCondition,
      checkPw,
    } = this.state;

    console.log(firstnamehasValue);
    return (
      <div className="account">
        <nav>네브바 자리</nav>
        <main>
          <section className="accountTitle">새 계정 만들기</section>
          <section className="inputCheckboxBundle">
            <article className="inputBundle">
              <div className="firstname accountTextInput">
                <p>이름</p>
                <input
                  type="text"
                  name="firstname"
                  onChange={this.handleInput}
                />
                {!firstnamehasValue && (
                  <p className="warningMsg">이름은 필수 입력 항목입니다.</p>
                )}
              </div>
              <div className="lastname accountTextInput">
                <p>성</p>
                <input
                  type="text"
                  name="lastname"
                  onChange={this.handleInput}
                />
                {lastnamehasValue && (
                  <p className="warningMsg">성은 필수 입력 항목입니다.</p>
                )}
              </div>
              <div className="email accountTextInput">
                <p>이메일</p>
                <input type="text" name="email" onChange={this.handleInput} />
                {!emailCondition && (
                  <p className="warningMsg">이메일은 필수 입력 항목입니다.</p>
                )}
              </div>
              <div className="password accountTextInput">
                <p>비밀번호</p>
                <input
                  type="password"
                  name="password"
                  onChange={this.handleInput}
                />
                {/* {!password && (
                  <p className="warningMsg">비밀번호은 필수 입력 항목입니다.</p>
                )} */}
                {!pwLengthCondition && (
                  <p className="warningMsg">
                    비밀번호는 최소 10자, 최대 30자여야 합니다.
                  </p>
                )}
              </div>
              <div className="checkPw accountTextInput">
                <p>비밀번호 확인</p>
                <input
                  type="password"
                  name="checkPw"
                  onChange={this.handleInput}
                />
                {/* {pwAndPwValueSame && (
                  <p className="warningMsg">비밀번호가 일치 하지 않습니다.</p>
                )} */}
              </div>
            </article>
            <article className="checkboxBundle">
              <div className="firstCheckboxBundle">
                <div className="agreement adInputTitleDiv">
                  <input
                    id="firstCheckbox"
                    type="checkbox"
                    name="adagreement"
                    onClick={this.handleInput}
                  />
                  <label for="firstCheckbox"></label>
                  <span className="agreement adtitle">
                    네, <span className="specificFont">Bang & Olaf</span> 통신을
                    받고 싶습니다
                  </span>
                </div>
                <div className="agreement adDescription">
                  <span className="specificFont">Bang & Olaf</span> 및 당사
                  제품과 관련된 뉴스, 특별 혜택, 이벤트 및 특별 경연 초대장 등의
                  소식을 가장 먼저 받아보세요. 저희가 여러분께 소식을 가장 먼저
                  전해드리기 위해 여러분의 연락처 정보를 수집해야 합니다. 당사
                  통신에 대한 자세한 내용 읽기
                </div>
              </div>
              <div className="secondCheckboxBundle">
                <input
                  id="secondCheckbox"
                  type="checkbox"
                  name="serviceagreement"
                  onClick={this.handleInput}
                />
                <label for="secondCheckbox"></label>
                <span className="agreement service">
                  동의 서비스 약관 & 개인정보 보호정책
                </span>
              </div>
            </article>
          </section>
          <section className="registerMovetologinBundle">
            <button className="registrationBtn" onClick={this.secondCondition}>
              등록
            </button>
            <div>페이지의 로그로 이동</div>
          </section>
        </main>
        <footer>
          <span>KOREAN</span>
          <div>
            <a>@ 2021 Bang & Olaf</a>
            <a>개인정보 보호정책</a>
            <a>서비스 약관</a>
          </div>
        </footer>
      </div>
    );
  }
}

export default Account;
