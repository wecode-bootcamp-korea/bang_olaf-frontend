import React, { Component } from "react";
import "./Login.scss";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      condition: false,
    };
  }

  handleIdPwInput = (e) => {
    const { name, value } = e.target;
    this.setState(
      {
        [name]: value,
      },
      () => this.checkBtnActive(),
    );
  };

  checkBtnActive = () => {
    const { email, password } = this.state;
    //const emailCondition=email.includes("@")       // condition 작동 시 지우기
    const condition = email.includes("@") && password;
    this.setState({
      condition,
    });
  };

  // 버튼 클릭시 메소드 수정
  handleLoginBtn = (e) => {};

  render() {
    return (
      <div className="login">
        <main>
          <section className="loginTitle">
            <p>로그인</p>
            <h1>Bang & Olaf 계정</h1>
          </section>
          <section className="inputBundle">
            <div className="emailBundle">
              <p>이메일</p>
              <input
                className="email loginInput"
                type="text"
                name="email"
                onChange={this.handleIdPwInput}
              />
            </div>
            <div className="pwBundle">
              <p>비밀번호</p>
              <input
                className="pw loginInput"
                type="password"
                name="password"
                onChange={this.handleInput}
              />
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
          <button className="facebookBtn"></button>
          <button className="googleBtn"></button>
          <button className="naverBtn"></button>
        </aside>
        <footer></footer>
      </div>
    );
  }
}

export default Login;
