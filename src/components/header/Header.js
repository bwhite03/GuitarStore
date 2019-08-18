import React, { Component } from "react";
import "./header.styles.scss";
import LoginCart from "../login/LoginCart";
import Sidebar from "../sidebar/Sidebar";
import { Link } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSidebar: false
    };
  }

  handleSidebar = () => {
    this.setState({
      showSidebar: !this.state.showSidebar
    });

    if (!this.state.showSidebar) {
      document.querySelector("html").style.overflow = "hidden";
    } else {
      document.querySelector("html").style.overflow = "auto";
    }
  };

  render() {
    return (
      <header>
        {this.state.showSidebar ? (
          <Sidebar handleSidebar={this.handleSidebar} />
        ) : null}
        <LoginCart currentUser={this.props.currentUser} />
        <nav>
          <div className="logo">
            <h1>Guitar World</h1>
          </div>
          <i className="fas fa-bars" onClick={this.handleSidebar} />
          <ul className="nav">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/guitar-products">Products</Link>
            </li>
            <li>
              <a href="/">Services</a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
