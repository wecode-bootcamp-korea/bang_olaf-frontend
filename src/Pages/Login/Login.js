import React, { Component } from "react";
import { SERVER, SIGNUP_API, SIGNIN_API } from "../../config";
import "./Login.scss";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      pw: "",
      emailCondition: true,
      passwordCondition: true,
      matchedValue: true,
    };
  }

  handleIdPwInput = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleLoginBtn = (e) => {
    const { email, pw } = this.state;
    const emailCondition = email.includes("@");
    const passwordCondition = pw.length >= 5;
    const matchedValue = emailCondition && passwordCondition;
    this.setState({
      emailCondition,
      passwordCondition,
      matchedValue,
    });

    if (!matchedValue) {
      console.log("!matchedValue 실행");
      return; // 리턴 하는 게 맞나?
    }

    fetch(SIGNUP_API, {
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
        /*if (result.message === "SUCCESS") {
          // 메세지 키명: 콘솔 확인 후 백과 상의
          localStorage.setItem("token", result.Authorization); // 토큰 키명: 콘솔 확인 후 백과 상의
          this.props.history.push("/");
          return;
        }

        // result.message === "SUCCESS"가 아닐 경우
        this.setState({
          matchedValue: false,
        });
        return;*/
      });
  };

  render() {
    const { emailCondition, passwordCondition, matchedValue } = this.state;
    console.log(this.state);
    return (
      <div className="login">
        <main>
          <section className="loginTitle">
            <p>로그인</p>
            <h1>Bang & Olaf 계정</h1>
          </section>
          <section className="inputBundle">
            <div className="emailBundle">
              {!matchedValue && <p>* 잘못된 로그인 시도</p>}
              <p>이메일</p>
              <input
                className="email loginInput"
                type="text"
                name="email"
                onChange={this.handleIdPwInput}
              />
              {!emailCondition && <div>이메일은 필수 입력 항목입니다.</div>}
            </div>
            <div className="pwBundle">
              <p>비밀번호</p>
              <input
                className="pw loginInput"
                type="password"
                name="pw"
                onChange={this.handleIdPwInput}
              />
              {!passwordCondition && (
                <div>비밀번호은 필수 입력 항목입니다.</div>
              )}
            </div>
            <input type="checkbox" name="checkbox" />
            <span>사용자 이름 저장</span>
          </section>
          <section className="loginNewaccountPasswordBundle">
            <button className="loginBtn" onClick={this.handleLoginBtn}>
              로그인
            </button>
            <p>회원가입</p>
            <p>비밀번호 찾기</p>
          </section>
        </main>
        <aside className="otherwayLoginBundle">
          <p>다른 서비스로 로그인</p>
          <button className="facebookBtn">FACEBOOK</button>
          <button className="googleBtn">GOOGLE</button>
          <button className="naverBtn">NAVER</button>
        </aside>
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

export default Login;
