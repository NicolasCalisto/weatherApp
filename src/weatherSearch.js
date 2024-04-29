
import React, { useState } from 'react';
import axios from 'axios';

const apiKey = 'c7d11b0ba55bda8b3a6732cea2cd48d7';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

function WeatherSearch() {
  const [cityName, setCityName] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const searchWeather = async () => {
    try {
      const response = await axios.get(apiUrl, {
        params: {
          q: cityName,
          appid: apiKey,
          units: 'metric' 
        }
      });
      setWeatherData(response.data);
    } catch (error) {
      console.error('Erro ao buscar dados do clima:', error);
    }
  };

  return (
    <div>
      <h1>Previsão do Tempo</h1>
      <form onSubmit={e => { e.preventDefault(); searchWeather(); }}>
        <input
          type="text"
          value={cityName}
          onChange={e => setCityName(e.target.value)}
          placeholder="Digite o nome da cidade"
        />
        <button type="submit">Pesquisar</button>
      </form>

      {weatherData && (
        <div>
          <h2>{weatherData.name}</h2>
          <p>Temperatura: {weatherData.main.temp}°C</p>
          <p>Descrição: {weatherData.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}

export default WeatherSearch;
