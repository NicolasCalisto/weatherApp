import React from 'react';
import './current.css';
import solImage from '../../utils/img/sol.png';


function CurrentWeatherComponent() {
    const currentWeather = 'Ensolarado';

    return (
        <div className="currentWeather">
            <img src={solImage} alt="icone" className="icone" width="50" height="50" />
            <span className="weather">{currentWeather}</span>
        </div>
    );
}

export default CurrentWeatherComponent;
