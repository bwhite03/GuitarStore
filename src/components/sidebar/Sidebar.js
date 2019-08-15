import React from "react";
import { Link } from "react-router-dom";
import "./sidebar.styles.scss";

function Sidebar(props) {
  return (
    <div className="sidebar">
      <i className="fas fa-bars" onClick={props.handleSidebar} />
      <ul>
        <Link to="/" onClick={props.handleSidebar}>
          Home
        </Link>

        <Link to="/guitar-products" onClick={props.handleSidebar}>
          Products
        </Link>

        <Link to="/" onClick={props.handleSidebar}>
          Services
        </Link>
      </ul>
    </div>
  );
}

export default Sidebar;
