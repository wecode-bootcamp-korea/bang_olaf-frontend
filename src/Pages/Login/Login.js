import React, { Component } from "react";
import { Link } from "react-router-dom";
import LoginFooter from "./components/LoginFooter";
import { SIGNIN_API } from "../../config";
import { Icon } from "react-icons-kit";
import { facebookOfficial } from "react-icons-kit/fa/facebookOfficial";
import { apple } from "react-icons-kit/fa/apple";
import { windows } from "react-icons-kit/fa/windows";
import { earth } from "react-icons-kit/icomoon/earth";
import "./Login.scss";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      emailhasValue: true,
      emailcheck: true,
      pw: "",
      pwhasValue: true,
      validUser: true,
    };
  }

  // 1. 인풋 onChange 메소드
  handleInput = (e) => {
    const { name, value } = e.target;
    this.setState(
      {
        [name]: value,
      },
      () => this.checkValidity(`${name}hasValue`, this.state[name]),
    );
  };

  // 1-2. 인풋 값 유무 확인 및 이메일 조건 확인
  checkValidity = (keyValue, inputValue) => {
    const { email } = this.state;
    const emailcheck = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i.test(
      email,
    );

    this.setState({
      [keyValue]: inputValue.length > 0,
      emailcheck,
    });
  };

  // 버튼 onClick 메소드
  handleLoginBtn = (e) => {
    const {
      email,
      emailhasValue,
      emailcheck,
      pw,
      pwhasValue,
      validUser,
    } = this.state;

    // [변수] 백으로 보내기 위한 모든 조건 확인
    const matchedValue = emailcheck && pw;

    // 모든 조건 True 아닐 때 실행
    if (!matchedValue) {
      console.log("!matchedValue 실행"); // 통신 후 지우기
      this.setState({
        emailhasValue: email,
        pwhasValue: pw,
      });
    } else {
      // 모든 조건 True 일때 실행
      this.fetchSignin();
    }
  };

  fetchSignin = () => {
    const {
      email,
      emailhasValue,
      emailcheck,
      pw,
      pwhasValue,
      validUser,
    } = this.state;

    console.log("matchedValue실행"); // 통신 후 지우기
    fetch(SIGNIN_API, {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: pw,
      }),
    })
      .then((responce) => responce.json())
      .then((result) => {
        console.log({ result }); // 백의 결과 값을 보고 키명과 메세지 수정 가능

        // 로그인에서만 쓰는 코드가 맞나 ?
        if (result.message === "SUCCESS") {
          // 메세지 키명: 콘솔 확인 후 백과 상의
          localStorage.setItem("token", result.Authorization); // 토큰 키명: 콘솔 확인 후 백과 상의
          this.props.history.push("/");
          return;
        }

        // result.message === "SUCCESS"가 아닐 경우
        this.setState({
          validUser: false,
        });
        return;
      });
  };

  render() {
    const {
      email,
      emailhasValue,
      emailcheck,
      pwhasValue,
      validUser,
    } = this.state;
    console.log(this.state);

    return (
      <div className="login">
        <main>
          <section className="loginTitle">
            <div className="loginSmallLogo">로그인</div>
            <div className="loginBigLogo">
              <span>Bang & Olaf</span> 계정
            </div>
          </section>
          <article>
            <section className="inputBundle">
              <div className="emailBundle">
                {!validUser && (
                  <p className="warningMsg">* 잘못된 로그인 시도</p>
                )}
                <p>이메일</p>
                <div className={`emailConditionDiv ${email && "success"}`}>
                  <input
                    className="email loginInput"
                    type="text"
                    name="email"
                    onChange={this.handleInput}
                  />
                  <p className="warningMsg">
                    {emailcheck ? "" : "유효한 이메일 형식이 아닙니다."}
                  </p>
                  {!emailhasValue && (
                    <span className="warningMsg">
                      이메일은 필수 입력 항목입니다.
                    </span>
                  )}
                </div>
              </div>
              <div className="pwBundle">
                <p>비밀번호</p>
                <input
                  className="pw loginInput"
                  type="password"
                  name="pw"
                  onChange={this.handleInput}
                />
                {!pwhasValue && (
                  <p className="warningMsg">비밀번호은 필수 입력 항목입니다.</p>
                )}
              </div>
              <div className="checkboxBundle">
                <input type="checkbox" name="checkbox" id="saveNameCheckbox" />
                <label for="saveNameCheckbox"></label>
                <span>사용자 이름 저장</span>
              </div>
            </section>
            <section className="loginNewaccountPasswordBundle">
              <button className="loginBtn" onClick={this.handleLoginBtn}>
                로그인
              </button>
              <Link to="/account">
                <p>회원가입</p>
              </Link>
              <p>비밀번호 찾기</p>
            </section>
          </article>
        </main>
        <aside className="otherwayLoginBundle">
          <p>다른 서비스로 로그인</p>

          <button className="facebookBtn">
            <Icon className="facebookIcons" icon={facebookOfficial} size={20} />
            <span>FACEBOOK</span>
          </button>
          <button className="appleBtn">
            <Icon className="appleIcons" icon={apple} size={20} />
            APPLE
          </button>
          <button className="windowsBtn">
            <Icon className="windowsIcons" icon={windows} size={20} />
            WINDOWS
          </button>
        </aside>
        <LoginFooter />
      </div>
    );
  }
}

export default Login;
