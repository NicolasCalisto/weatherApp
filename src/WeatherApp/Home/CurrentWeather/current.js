import React from 'react';
import './current.css';

function CurrentWeatherComponent({ weatherData }) {
    if (!weatherData) {
        return null;
    }

    const { weather } = weatherData;
    const description = weather[0].description.toUpperCase();
    const icon = weather[0].icon;

    const iconBaseUrl = 'https://openweathermap.org/img/wn/';

    return (
        <div className="currentWeather">
            <img src={`${iconBaseUrl}${icon}@2x.png`} 
                alt="icone" 
                className="icone" />
            <span className="weather">{description}</span>
        </div>
    );
}

export default CurrentWeatherComponent;
