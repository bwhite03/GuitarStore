import React from "react";

const Filter = () => {
  return (
    <section className="filter">
      <label className="filter-label">Type</label>
      <select className="filter-menu">
        <option value="all" defaultValue>
          All
        </option>
        <option value="acoustic-guitar">Acoustic Guitar</option>
        <option value="electric-guitar">Electric Guitar</option>
        <option value="electric-bass">Electric Bass</option>
      </select>
      <label className="filter-label">Price</label>
      <select className="filter-menu">
        <option value="all" defaultValue>
          All
        </option>
        <option value="100">100+</option>
        <option value="250">250+</option>
        <option value="400">400+</option>
        <option value="650">650+</option>
      </select>
      <label className="filter-label">Brand</label>
      <select className="filter-menu">
        <option value="all" defaultValue>
          All
        </option>
        <option value="epiphone">Epiphone</option>
        <option value="fender">Fender</option>
        <option value="gibson">Gibson</option>
        <option value="ibanez">Ibanez</option>
        <option value="squier">Squier</option>
        <option value="yamaha">Yamaha</option>
      </select>
    </section>
  );
};

export default Filter;
