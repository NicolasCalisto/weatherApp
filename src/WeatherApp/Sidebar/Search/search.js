import React, { useState } from 'react';
import axios from 'axios';
import './search.css';

function SearchComponent({ onSearch }) {
  const [cityName, setCityName] = useState('');

  const search = async (e) => {
    e.preventDefault();
    if (cityName.trim()) {
      try {
        const response = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
          params: {
            q: cityName,
            appid: 'c7d11b0ba55bda8b3a6732cea2cd48d7',
            units: 'metric'
          }
        });
        onSearch(response.data);
      } catch (error) {
        console.error('Erro ao obter dados do clima:', error);
      }
    }
  };

  return (
    <form onSubmit={search} className="search">
      <input
        type="text"
        name="cityName"
        placeholder="Digite o nome da cidade"
        value={cityName}
        onChange={(e) => setCityName(e.target.value)}
      />
      <button type="submit" className="submitButton">Pesquisar</button>
    </form>
  );
}

export default SearchComponent;
