import React from "react";
import { SERVER, SIGNUP_API, SIGNIN_API } from "../../config";
import { Link } from "react-router-dom";
import "./Account.scss";

class Account extends React.Component {
  constructor() {
    super();
    this.state = {
      firstname: "",
      firstnamehasValue: true,
      lastname: "",
      email: "",
      password: "",
      passwordhasValue: true,
      checkPw: "",
      checkPwhasValue: true,
      adagreement: false,
      serviceagreement: false,
      serviceagreementhasValue: true,
    };
  }

  // 인풋의 변화연동
  firstnameInput = (e) => {
    const firstnameValue = e.target.value;
    this.setState(
      {
        firstname: firstnameValue,
      },
      () =>
        this.setState({
          firstnamehasValue: this.state.firstname.length > 0 ? true : false,
        }),
    );
  };

  lastnameInput = (e) => {
    const lastnameValue = e.target.value;
    this.setState({ lastname: lastnameValue }, () =>
      this.setState({
        lastnamehasValue: this.state.lastname.length > 0 ? true : false,
      }),
    );
  };

  emailInput = (e) => {
    const emailValue = e.target.value;
    this.setState({ email: emailValue }, () =>
      this.setState({
        emailhasValue: this.state.email.length > 0 ? true : false,
      }),
    );
  };

  passwordInput = (e) => {
    const passwordValue = e.target.value;
    this.setState({ password: passwordValue }, () =>
      this.setState({
        passwordhasValue: this.state.password.length > 0 ? true : false,
      }),
    );
  };

  checkPwInput = (e) => {
    const checkPwValue = e.target.value;
    this.setState({ checkPw: checkPwValue }, () =>
      this.setState({
        checkPwhasValue: this.state.checkPw.length > 0 ? true : false,
      }),
    );
  };

  adagreementInput = (e) => {
    const adagreementValue = e.target.checked;
    this.setState({ adagreement: adagreementValue });
  };

  seviceagreementInput = (e) => {
    const serviceagreementValue = e.target.checked;
    this.setState({ seviceagreement: serviceagreementValue }, () =>
      this.setState({
        serviceagreementhasValue: this.state.seviceagreement ? true : false,
      }),
    );
  };

    // const checkemailCondition = email.includes("@"); // 이메일 @ 확인
    // const checkpwLengthCondition =
    //   password.length >= 10 && password.length <= 30; // 비번 길이
    // const checkpwConditionAll = password === checkPw; // 비번확인 모든 조건
  };

  // 버튼 클릭시 실행되는 메소드
  handleBtn = () => {
    // 원래 조건 넣고 setState하는 자리
    const {
      firstname,
      firstnamehasValue,
      lastname,
      lastnamehasValue,
      email,
      emailCondition,
      emailhasValue,
      password,
      pwLengthCondition,
      passwordhasValue,
      checkPw,
      checkpwCondition,
      checkPwhasValue,
      adagreement,
      serviceagreement,
      isTrueserviceagreement,
    } = this.state;

    // const allAcceptedAccountCondition =
    //   firstnamehasValue &&
    //   lastnamehasValue &&
    //   emailCondition &&
    //   pwLengthCondition &&
    //   checkpwCondition &&
    //   isTrueserviceagreement;

    // if (!firstname) {
    //   this.setState({
    //     firstnamehasValue: false,
    //   });
    // } else if (firstname) {
    //   this.setState({
    //     firstnamehasValue: true,
    //   });
    // }

    // if (!lastname) {
    //   this.setState({
    //     lastnamehasValue: false,
    //   });
    // } else if (lastname) {
    //   this.setState({
    //     lastnamehasValue: true,
    //   });
    // }

    // if (!email) {
    //   this.setState({
    //     emailhasValue: false,
    //   });
    // } else if (email) {
    //   this.setState({
    //     emailhasValue: true,
    //   });
    // }

    // if (!password) {
    //   this.setState({
    //     passwordhasValue: false,
    //   });
    // } else if (password) {
    //   this.setState({
    //     passwordhasValue: true,
    //   });
    // }

    // if (!checkPw) {
    //   this.setState({
    //     checkPwhasValue: false,
    //   });
    // } else if (checkPw) {
    //   this.setState({
    //     checkPwhasValue: true,
    //   });
    // }

    // if (!serviceagreement) {
    //   this.setState({
    //     isTrueserviceagreement: false,
    //   });
    // } else if (serviceagreement) {
    //   this.setState({
    //     isTrueserviceagreement: true,
    //   });
    // }

    // // 모든 유효성 검사 체크
    // if (!allAcceptedAccountCondition) {
    //   return;
    // }

    fetch(SIGNUP_API, {
      method: "POST",
      body: JSON.stringify({
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password, // 로그인은 pw로 함.
        checkpassword: checkPw,
        adagreement: adagreement,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        alert(result.message);

        //
        if (result.message === "SUCCESS") {
          //localStorage.setItem("token", result.Authorization);
          this.props.history.push("/"); //2주차에 마이페이지
          return;
        }

        if (result.message === "이름을 입력해주세요") {
          //localStorage.setItem("token", result.Authorization);
          this.props.history.push("/"); //2주차에 마이페이지
          return;
        }

        if (result.message === "성을 입력해주세요") {
          //localStorage.setItem("token", result.Authorization);
          this.props.history.push("/"); //2주차에 마이페이지
          return;
        }

        if (result.message === "이메일를 입력해주세요") {
          //localStorage.setItem("token", result.Authorization);
          this.props.history.push("/"); //2주차에 마이페이지
          return;
        }

        if (result.message === "INVALID_EMAIL") {
          //localStorage.setItem("token", result.Authorization);
          this.props.history.push("/"); //2주차에 마이페이지
          return;
        }

        if (result.message === "비밀번호를 입력해주세요") {
          //localStorage.setItem("token", result.Authorization);
          this.props.history.push("/"); //2주차에 마이페이지
          return;
        }

        if (
          result.message === "비밀번호는 최소 10자, 최대 1000자여야 합니다."
        ) {
          //localStorage.setItem("token", result.Authorization);
          this.props.history.push("/"); //2주차에 마이페이지
          return;
        }

        if (
          result.message === "비밀번호 및 확인 비밀번호가 일치하지 않습니다"
        ) {
          //localStorage.setItem("token", result.Authorization);
          this.props.history.push("/"); //2주차에 마이페이지
          return;
        }
      });
  };

  render() {
    const {
      firstname,
      firstnamehasValue,
      lastname,
      lastnamehasValue,
      email,
      emailCondition,
      emailhasValue,
      password,
      pwLengthCondition,
      passwordhasValue,
      checkPw,
      checkpwCondition,
      checkPwhasValue,
      adagreement,
      serviceagreement,
      serviceagreementhasValue,
    } = this.state;

    const emailcheck = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i.test(
      email,
    );
    const passwordcheck = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/i.test(
      password,
    );
    console.log({
      firstname,
      firstnamehasValue,
      lastname,
      lastnamehasValue,
      email,
      emailCondition,
      emailhasValue,
      password,
      pwLengthCondition,
      passwordhasValue,
      checkPw,
      checkpwCondition,
      checkPwhasValue,
      adagreement,
      serviceagreement,
      serviceagreementhasValue,
    });
    return (
      <div className="account">
        <main>
          <section className="accountTitle">새 계정 만들기</section>
          <section className="inputCheckboxBundle">
            <article className="inputBundle">
              <div className="firstname accountTextInput">
                <p>이름</p>

                <input
                  type="text"
                  name="firstname"
                  hasvalue="firstnamehasValue"
                  onChange={this.firstnameInput}
                />
                {firstnamehasValue === false && (
                  <p className="warningMsg">이름은 필수 입력 항목입니다.</p>
                )}
              </div>
              <div className="lastname accountTextInput">
                <p>성</p>
                <input
                  type="text"
                  name="lastname"
                  hasvalue="lastnamehasValue"
                  onChange={this.lastnameInput}
                />
                {lastnamehasValue === false && (
                  <p className="warningMsg">성은 필수 입력 항목입니다.</p>
                )}
              </div>
              <div className="email accountTextInput">
                <p>이메일</p>
                <div className={`checkemail ${email && "success"}`}>
                  <input type="text" name="email" onChange={this.emailInput} />
                  {/* {!emailhasValue && (
                  <p className="warningMsg">이메일은 필수 입력 항목입니다.</p>
                )}
                {!emailCondition && (
                  <p className="warningMsg">이메일 형식이 아닙니다.</p>
                )} */}
                  <p className={emailcheck ? "true" : "false"}>
                    {emailcheck ? "" : "이메일 형식이 아닙니다."}
                  </p>
                </div>
                {emailhasValue === false && (
                  <p className="warningMsg">이메일은 필수 입력 항목입니다.</p>
                )}
              </div>
              <div className="password accountTextInput">
                <p>비밀번호</p>
                {/* <div className={`checkpassword ${password && "success"}`}>
                  <input
                    type="password"
                    name="password"
                    onChange={this.passwordInput}
                  />
                  <p className={passwordcheck ? "true" : "false"}>
                    {passwordcheck ? "" : "숫자/소문자/대문자/특수문자를 포함한 8글자 이상을 작성해주세요."}
                  </p>
                </div> */}
                {!passwordhasValue && (
                  <p className="warningMsg">비밀번호은 필수 입력 항목입니다.</p>
                )}
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
                  hasvalue="checkPwhasValue"
                  onChange={this.checkPwInput}
                />
                {!checkPwhasValue && (
                  <p className="warningMsg">비밀번호는 필수 입력 항목입니다.</p>
                )}
                {!checkpwCondition && (
                  <p className="warningMsg">비밀번호가 일치 하지 않습니다.</p>
                )}
              </div>
            </article>
            <article className="checkboxBundle">
              <div className="firstCheckboxBundle">
                <div className="agreement adInputTitleDiv">
                  <input
                    id="firstCheckbox"
                    type="checkbox"
                    name="adagreement"
                    hasvalue="adagreementhasValue"
                    onClick={this.adagreementInput}
                  />
                  <label for="firstCheckbox"></label>
                  <span className="agreement adtitle">
                    네, <span className="specificFont">Bang & Olaf</span> 통신을
                    받고 싶습니다
                  </span>
                </div>
                <div className="agreement adDescription">
                  <span className="sameWithFooterfont">Bang & Olaf</span> 및
                  당사 제품과 관련된 뉴스, 특별 혜택, 이벤트 및 특별 경연 초대장
                  등의 소식을 가장 먼저 받아보세요. 저희가 여러분께 소식을 가장
                  먼저 전해드리기 위해 여러분의 연락처 정보를 수집해야 합니다.
                  당사 통신에 대한 자세한 내용 읽기
                </div>
              </div>
              <div className="secondCheckboxBundle">
                <input
                  id="secondCheckbox"
                  type="checkbox"
                  name="serviceagreement"
                  hasvalue="serviceagreementhasValue"
                  onClick={this.seviceagreementInput}
                />
                <label for="secondCheckbox"></label>
                <span className="agreement service">
                  동의 서비스 약관 & 개인정보 보호정책
                </span>
                {!serviceagreementhasValue && (
                  <p className="warningMsg">서비스 약관에 동의해야 합니다.</p>
                )}
              </div>
            </article>
          </section>
          <section className="registerMovetologinBundle">
            <button className="registrationBtn" onClick={this.handleBtn}>
              등록
            </button>
            <Link to="/">
              <p>페이지의 로그로 이동</p>
            </Link>
          </section>
        </main>
        <footer>
          <select name="languageTranslation" id="languageSelect">
            <option value="">ENGLISH</option>
            <option value="">DANISH</option>
            <option value="">GERMAN</option>
            <option value="">SPANISH</option>
            <option value="">FRENCH</option>
            <option value="">ITALIAN</option>
            <option value="">JAPANESE</option>
            <option value="">KOREAN</option>
            <option value="">DUTCH</option>
            <option value="">RUSSIAN</option>
            <option value="">CHINESE</option>
            <option value="">CHINESE TRADITIONAL</option>
          </select>
          <div>
            <Link to="/">
              <span>@ 2021 Bang & Olaf</span>
            </Link>
            <span>개인정보 보호정책</span>
            <span>서비스 약관</span>
          </div>
        </footer>
      </div>
    );
  }
}

export default Account;
