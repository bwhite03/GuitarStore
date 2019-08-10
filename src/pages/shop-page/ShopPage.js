import React from "react";
import "./shop-page.styles.scss";
import Filter from "../../components/filter/Filter";
import Products from "../../components/products/Products";

const ShopPage = () => {
  return (
    <main className="guitar-products">
      <Filter />
      <Products />
    </main>
  );
};

export default ShopPage;
