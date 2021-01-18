import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Icon } from "react-icons-kit";
import { facebookOfficial } from "react-icons-kit/fa/facebookOfficial";
import { apple } from "react-icons-kit/fa/apple";
import { windows } from "react-icons-kit/fa/windows";
import { earth } from "react-icons-kit/icomoon/earth";
import { SERVER, SIGNUP_API, SIGNIN_API } from "../../config";
import "./Login.scss";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      emailhasValue: true,
      pw: "",
      pwhasValue: true,
      matchedValue: true,
      validUser: true,
    };
  }

  emailInput = (e) => {
    const emailValue = e.target.value;
    this.setState(
      {
        email: emailValue,
      },
      () =>
        this.setState({
          emailhasValue: this.state.email.length > 0 ? true : false,
        }),
    );
  };

  passwordInput = (e) => {
    const passwordValue = e.target.value;
    this.setState(
      {
        pw: passwordValue,
      },
      () =>
        this.setState({
          pwhasValue: this.state.pw.length > 0 ? true : false,
        }),
    );
  };

  handleLoginBtn = (e) => {
    const { email, pw, emailhasValue, pwhasValue } = this.state;

    const emailcheck = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i.test(
      email,
    );

    if (email) {
      this.setState({
        emailhasValue: true,
      });
    } else if (!email) {
      this.setState({
        emailhasValue: false,
      });
    }

    if (pw) {
      this.setState({
        pwhasValue: true,
      });
    } else if (!pw) {
      this.setState({
        pwhasValue: false,
      });
    }

    const matchedValue = emailcheck && pw;

    if (!matchedValue) {
      alert("!matchedValue 실행");
      return; // 리턴 하는 게 맞나?
    }

    fetch(SIGNIN_API, {
      // 회원가입, 로그인 시 바꿔야 함.
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: pw, //변경 (하민: input_password)
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
      pw,
      pwhasValue,
      matchedValue,
      validUser,
    } = this.state;
    console.log(this.state);

    const emailcheck = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i.test(
      email,
    );

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
                    onChange={this.emailInput}
                  />
                  <p className="warningMsg">
                    {emailcheck ? "" : "유효한 이메일 형식이 아닙니다."}
                  </p>
                </div>
                {!emailhasValue && (
                  <p className="warningMsg">이메일은 필수 입력 항목입니다.</p>
                )}
              </div>
              <div className="pwBundle">
                <p>비밀번호</p>
                <input
                  className="pw loginInput"
                  type="password"
                  name="pw"
                  onChange={this.passwordInput}
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
            FACEBOOK
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

export default Login;
