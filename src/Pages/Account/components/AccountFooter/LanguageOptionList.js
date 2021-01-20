import React from "react";
import FOOTERLANGUAGE from "./Languagedata";
import "./LanguageOptionList.scss";

class LanguageOptionList extends React.Component {
  render() {
    return (
      <div className="languageOptionList">
        <select name="languageTranslation" id="languageSelect">
          {FOOTERLANGUAGE.map((el) => {
            console.log("맵 함수 실행됨", el);
            return <option value="">{el}</option>;
          })}
        </select>
      </div>
    );
  }
}

export default LanguageOptionList;
