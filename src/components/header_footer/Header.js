import React from "react";
import LoginCart from "./LoginCart";

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
            <a href="#">Products</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Deals</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
