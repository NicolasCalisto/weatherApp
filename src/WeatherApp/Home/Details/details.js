import React from 'react';
import './details.css';

function DetailsComponent({ weatherData }) {
    if (!weatherData) {
        return null; 
    }

    const { main, weather, sys } = weatherData;
    const temperature = parseFloat(main.temp).toFixed(0);
    console.log("temp", temperature.toString)
    const city = weatherData.name;
    const time = new Date().toLocaleTimeString();
    const date = new Date().toLocaleDateString();

    return (
        <div className="details">
            <div>
                <h1 className="temperature">{temperature}°C</h1>
            </div>
            <div className="currentCity">
                <h1 className="city">{city}</h1>
                <small>
                    <span className="time">{time} - </span>
                    <span className="date">{date}</span>
                </small>
            </div>
    
        </div>
    );
}

export default DetailsComponent;
