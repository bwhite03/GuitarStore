import React from "react";
import "./services-page.styles.scss";
import Repairs from "../../components/repairs/Repairs";

const ServicesPage = () => {
  return (
    <div>
      <div className="services-container">
        <Repairs />
      </div>
    </div>
  );
};

export default ServicesPage;
