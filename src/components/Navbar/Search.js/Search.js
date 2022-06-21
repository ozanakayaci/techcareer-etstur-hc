import React from "react";

//css
import "./Search.scss";

function Search() {
  return (
    <div class="search-container">
      <input
        type="text"
        name="search"
        placeholder="Search..."
        class="search-input"
      />
      <a href="#" class="search-btn">
        <i class="fas fa-search"></i>
      </a>
    </div>
  );
}

export default Search;
