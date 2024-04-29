import React from 'react';
import './current.css';

function CurrentWeatherComponent() {
    const currentWeather = 'Ensolarado';

    return (
        <div className="currentWeather">
            <img src="./../../utils/img/sol.png" alt="icone" className="icone" width="50" height="50" />
            <span className="weather">{currentWeather}</span>
        </div>
    );
}

export default CurrentWeatherComponent;
