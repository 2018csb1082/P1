import { useState } from "react";
import './SearchBar.css'

function SearchBar ({city, setCity}) {
  const handleChange = (event) => {
    setCity(event.target.value);
  };

  return(
    <div className="SearchBarContainer">
      <div className="SearchBox">
        <input
          className="SearchInput"
          type="text"
          value={city}
          onChange={handleChange}
          placeholder="Type to search..."
        />
      </div>
    </div>
  );
};

export default SearchBar;