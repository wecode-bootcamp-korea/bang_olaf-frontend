import React, { Component } from "react";
import { BiMenu } from "react-icons/bi";
import "./CommonNavbar.scss";

class CommonNavbar extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <nav className="commonNavbar">
        <div className="commonNavbarGroup">
          <div className="navLeft">
            <BiMenu />
          </div>
          <div className="navCenter">
            <a href="#home">
              <span>BANG & OLAF</span>
            </a>
          </div>
          <ul className="navRight">
            <li className="navRightGroup">
              <a href="#">
                <img alt="support--IMG" src="../images/support.PNG" />
              </a>
              <a href="#">
                <img alt="location--IMG" src="../images/location.PNG" />
              </a>
              <a href="#">
                <img alt="bag--IMG" src="../images/bag.PNG" />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default CommonNavbar;
