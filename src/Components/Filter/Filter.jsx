import React from "react";

const Filter = ({ onFilter }) => {
  const handleFilterChange = (e) => {
    const selectedRegion = e.target.value;
    onFilter(selectedRegion);
  };

  return (
    <div className="filter">
      <select
        className="product_filter"
        name="filter"
        onChange={handleFilterChange}
      >
        <option value="">Filter by Category</option>
        <option value="Men's Clothing">Men's Clothing</option>
        <option value="Women's Clothing">Women's Clothing</option>
        <option value="Electronics">Electronics</option>
        <option value="Jewelery">Jewelery</option>
      </select>
    </div>
  );
};

export default Filter;
