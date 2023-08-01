import React from "react";
import Searchbar from "../Searchbar/Searchbar";
import Filter from "../Filter/Filter";

const Header = ({ search, onSearch, onFilter }) => {
  return (
    <div className="head_wrap">
      <Searchbar search={search} onSearch={onSearch} />
      <Filter onFilter={onFilter} />
    </div>
  );
};

export default Header;
