// import logo from

import "./navbar.css";
import { Component } from "react";
import logo from "../images/SAP-Logo.png";

class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <nav>
        <a href="index.html">
          <img
            className="sap"
            width="90"
            height="50"
            viewBox="0 0 49 48"
            fill="none"
            src={logo}
          ></img>
        </a>

        <div>
          <ul
            id="navbar"
            className={this.state.clicked ? "#navbar active" : "#navbar"}
          >
            <li>
              <a className="active" href="index.html">
                Home
              </a>
            </li>
            <li>
              <a href="index.html">Products</a>
            </li>
            <li>
              <a href="index.html">About</a>
            </li>
          </ul>
        </div>

        <div id="mobile" onClick={this.handleClick}>
          <i
            id="bar"
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
      </nav>
    );
  }
}

export default Navbar;
