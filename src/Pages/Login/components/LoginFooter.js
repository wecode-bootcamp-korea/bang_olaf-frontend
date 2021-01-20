import React from "react";
import { Link } from "react-router-dom";
import "./LoginFooter.scss";

class LoginFooter extends React.Component {
  render() {
    return (
      <div className="loginFooter">
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
      </div>
    );
  }
}

export default LoginFooter;
