import React, { useState } from 'react';
import './search.css';
import searchIcon from './../../utils/img/searchIcon2.png';

function SearchComponent({ onSearch }) {
  const [cityName, setCityName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cityName.trim()) {
      onSearch(cityName);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="search">
      <input
        type="text"
        name="cityName"
        placeholder="Procure a cidade"
        value={cityName}
        onChange={(e) => setCityName(e.target.value)}
      />
      <button type="submit" className="submitButton">
        <img src={searchIcon} alt="icone" className="icone" width="15" height="15" />
      </button>
    </form>
  );
}

export default SearchComponent;
