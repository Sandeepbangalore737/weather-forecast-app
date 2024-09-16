import React from "react";

const SearchBar = ({ city, setCity, onSearch }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(city);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-wrapper">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
        />
        <button type="submit" className="search">
          <i className="fas fa-search"></i>
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
