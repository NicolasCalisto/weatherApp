import React from 'react';
import './details.css';

function WeatherDetails() {
  const cloudy = '80'; // Dados temporários, substitua com dados reais
  const humidity = '65'; // Dados temporários, substitua com dados reais
  const wind = '2'; // Dados temporários, substitua com dados reais

  return (
    <ul className="weatherDetails">
      <h4>Detalhes do Clima</h4>
      <li>
        <span>Nublado</span>
        <span className="cloudy">{cloudy} %</span>
      </li>
      <li>
        <span>Humidade</span>
        <span className="humidity">{humidity} %</span>
      </li>
      <li>
        <span>Vento</span>
        <span className="wind">{wind} km/h</span>
      </li>
    </ul>
  );
}

export default WeatherDetails;
