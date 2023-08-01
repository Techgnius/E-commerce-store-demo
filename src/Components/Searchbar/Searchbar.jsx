import React from "react";

const Searchbar = ({ search, onSearch }) => {
  const handleSearchChange = (e) => {
    const searchTerm = e.target.value;
    onSearch(searchTerm);
  };

  return (
    <div>
      <div className="search_container">
        <i className="bi bi-search"></i>
        <input
          className="light_mode"
          type="text"
          placeholder="Search for a country..."
          value={search}
          onChange={handleSearchChange}
        />
      </div>
    </div>
  );
};

export default Searchbar;
