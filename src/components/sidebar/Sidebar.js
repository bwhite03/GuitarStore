import React from "react";
import { Link } from "react-router-dom";
import { Animated } from "react-animated-css";
import "./sidebar.styles.scss";

function Sidebar(props) {
  return (
    <Animated
      className="sidebar"
      animationIn="slideInRight"
      animationOut="fadeOut"
      isVisible={true}
    >
      <i className="fas fa-bars" onClick={props.handleSidebar} />
      <ul>
        <Link to="/" onClick={props.handleSidebar}>
          Home
        </Link>
        <Link to="/guitar-products" onClick={props.handleSidebar}>
          Products
        </Link>
        <Link to="/services" onClick={props.handleSidebar}>
          Services
        </Link>
      </ul>
    </Animated>
  );
}

export default Sidebar;
