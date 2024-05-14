import React from 'react';
import './details.css';

function WeatherDetails({ weatherData }) {
  if (!weatherData) {
    return null;
  }
  const  { main, wind, clouds} = weatherData;
  const cloudy = parseFloat(clouds.all);
  const humidity = parseFloat(main.humidity);
  const windVel = parseFloat(wind.speed);

  console.log("teste linguagem detalhes", weatherData)

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
        <span className="wind">{windVel} km/h</span>
      </li>
    </ul>
  );
}

export default WeatherDetails;
