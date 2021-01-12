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
      <nav className="CommonNavbar">
        <div className="CommonNavbar__Group">
          <div className="nav__left">
            <BiMenu />
          </div>
          <div className="nav__center">
            <a href="#home">
              <span>BANG & OLAF</span>
            </a>
          </div>
          <ul className="nav__right">
            <li className="nav__right__group">
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
