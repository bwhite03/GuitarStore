import React from "react";
import LoginCart from "./LoginCart";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <LoginCart />
      <nav>
        <div className="logo">
          <h1>Guitar World</h1>
        </div>
        <ul className="nav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/guitar-products">Products</Link>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
