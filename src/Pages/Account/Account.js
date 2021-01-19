import React from "react";
import { SERVER, SIGNUP_API, SIGNIN_API } from "../../config";
import { Link } from "react-router-dom";
import AccountFooter from "./components/AccountFooter";
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
      emailhasValue: true,
      emailcheck: true,
      password: "",
      passwordhasValue: true,
      passwordcheck: true,
      checkPw: "",
      checkPwhasValue: true,
      checkpwcheck: true,
      adagreement: false,
      serviceagreement: false,
      serviceagreementhasValue: true,
    };
  }

  // 인풋의 변화연동 (state 에 인풋 값 & 값 유무 업데이트 해주는 코드)

  // 인풋 onChange 메소드
  handleInput = (e) => {
    const { name, value } = e.target;
    this.setState(
      {
        [name]: value,
      },
      () => this.checkValidity(`${name}hasValue`, this.state[name]),
    );
  };

  checkValidity = (keyValue, inputValue) => {
    const { email, password, checkPw } = this.state;

    const emailcheck = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i.test(
      email,
    );
    const passwordcheck = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
      password,
    );
    const checkpwcheck = password === checkPw;

    this.setState({
      [keyValue]: inputValue.length > 0,
      emailcheck,
      passwordcheck,
      checkpwcheck,
    });
  };

  // 체크박스 onClick 메소드
  handleCheckbox = (e) => {
    const { name, checked } = e.target;
    this.setState({
      [name]: checked,
      [`${name}hasValue`]: checked,
    });
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
      emailhasValue,
      emailcheck,
      password,
      pwLengthCondition,
      passwordhasValue,
      passwordcheck,
      checkPw,
      checkPwhasValue,
      checkpwcheck,
      adagreement,
      serviceagreement,
      serviceagreementhasValue,
    } = this.state;

    // const emailcheck = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i.test(
    //   email,
    // );
    // const passwordcheck = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
    //   password,
    // );

    // const checkpwcheck = password === checkPw;

    const allAcceptedAccountCondition =
      firstname &&
      lastname &&
      emailcheck &&
      passwordcheck &&
      checkpwcheck &&
      serviceagreement;

    if (!allAcceptedAccountCondition) {
      alert("실패");

      this.setState(
        {
          firstnamehasValue: firstname,
          lastnamehasValue: lastname,
          emailhasValue: email,
          passwordhasValue: password,
          checkPwhasValue: checkPw,
          serviceagreementhasValue: serviceagreement,
        },
        console.log(
          "버튼 눌렀을때 ",
          emailhasValue,
          "LAST NAME",
          lastnamehasValue,
        ),
      );

      // {
      //   firstname
      //     ? this.setState({
      //         firstnamehasValue: true,
      //       })
      //     : this.setState({
      //         firstnamehasValue: false,
      //       });
      // }

      // {
      //   lastname
      //     ? this.setState({
      //         lastnamehasValue: true,
      //       })
      //     : this.setState({
      //         lastnamehasValue: false,
      //       });
      // }

      // {
      //   email
      //     ? this.setState({
      //         emailhasValue: true,
      //       })
      //     : this.setState({
      //         emailhasValue: false,
      //       });
      // }

      // {
      //   password
      //     ? this.setState({
      //         passwordhasValue: true,
      //       })
      //     : this.setState({
      //         passwordhasValue: false,
      //       });
      // }

      // {
      //   checkPw
      //     ? this.setState({
      //         checkPwhasValue: true,
      //       })
      //     : this.setState({
      //         checkPwhasValue: false,
      //       });
      // }

      // {
      //   serviceagreement
      //     ? this.setState({
      //         serviceagreementhasValue: true,
      //       })
      //     : this.setState({
      //         serviceagreementhasValue: false,
      //       });
      // }
    }

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
        alert({ result });

        // 회원가입 성공한 경우
        if (result.message === "SUCCESS") {
          //localStorage.setItem("token", result.Authorization);
          this.props.history.push("/"); //2주차에 마이페이지
          return;
        }

        // 실패의 모든 경우
        alert(실패);
      });
  };

  render() {
    const {
      firstname,
      firstnamehasValue,
      lastname,
      lastnamehasValue,
      email,
      emailhasValue,
      emailcheck,
      password,
      passwordhasValue,
      passwordcheck,
      checkPw,
      checkPwhasValue,
      checkpwcheck,
      adagreement,
      serviceagreement,
      serviceagreementhasValue,
    } = this.state;

    // const emailcheck = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i.test(
    //   email,
    // );
    // const passwordcheck = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
    //   password,
    // );

    // const checkpwcheck = password === checkPw;

    console.log({
      firstname,
      firstnamehasValue,
      lastname,
      lastnamehasValue,
      email,
      emailhasValue,
      emailcheck,
      password,
      passwordhasValue,
      passwordcheck,
      checkPw,
      checkPwhasValue,
      checkpwcheck,
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
                  hasvalue="lastnamehasValue"
                  onChange={this.handleInput}
                />
                {!lastnamehasValue && (
                  <p className="warningMsg">성은 필수 입력 항목입니다.</p>
                )}
              </div>
              <div className="email accountTextInput">
                <p>이메일</p>
                <div className={`checkemail ${email && "success"}`}>
                  <input type="text" name="email" onChange={this.handleInput} />
                  <p className="warningMsg">
                    {emailcheck ? "" : "유효한 이메일 형식이 아닙니다."}
                  </p>
                </div>
                {!emailhasValue && (
                  <p className="warningMsg">이메일은 필수 입력 항목입니다.</p>
                )}
              </div>
              <div className="password accountTextInput">
                <p>비밀번호</p>
                <div className={`checkpassword ${password && "success"}`}>
                  <input
                    type="password"
                    name="password"
                    onChange={this.handleInput}
                  />
                  <p className="warningMsg">
                    {passwordcheck
                      ? ""
                      : "비밀번호를 숫자/소문자/대문자/특수문자를 모두 포함하여 8자 이상 작성해주세요."}
                  </p>
                </div>
                {!passwordhasValue && (
                  <p className="warningMsg">비밀번호은 필수 입력 항목입니다.</p>
                )}
              </div>
              <div className="checkPw accountTextInput">
                <p>비밀번호 확인</p>
                <div className={`checkpwcheck ${checkPw && "success"}`}>
                  <input
                    type="password"
                    name="checkPw"
                    onChange={this.handleInput}
                  />
                  <p className="warningMsg">
                    {checkpwcheck ? "" : "비밀번호가 일치 하지 않습니다."}
                  </p>
                </div>
                {!checkPwhasValue && (
                  <p className="warningMsg">비밀번호는 필수 입력 항목입니다.</p>
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
                    onChange={this.handleCheckbox}
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
                  onChange={this.handleCheckbox}
                />
                <label for="secondCheckbox" />
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
        <AccountFooter />
      </div>
    );
  }
}

export default Account;
