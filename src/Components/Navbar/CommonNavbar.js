import React, { Component } from "react";
import { BiMenu } from "react-icons/bi";
import { Link } from "react-router-dom";
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
            <Link to="/">
              <span>BANG & OLAF</span>
            </Link>
          </div>
          <ul className="navRight">
            <li className="navRightGroup">
              <Link to="/login">
                <img alt="support--IMG" src="../images/support.PNG" />
              </Link>
              <Link to="#">
                <img alt="location--IMG" src="../images/location.PNG" />
              </Link>
              <Link to="#">
                <img alt="bag--IMG" src="../images/bag.PNG" />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default CommonNavbar;
