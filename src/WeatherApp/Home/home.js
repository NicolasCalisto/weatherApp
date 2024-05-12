import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SidebarComponent from '../Sidebar/sidebar';
import DetailsComponent from './Details/details';
import CurrentWeatherComponent from './CurrentWeather/current';
import './home.css';

function WeatherComponent() {
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        searchWeather('Recife');
    }, []);

    const searchWeather = async (cityName) => {
        try {
            const response = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
                params: {
                    q: cityName,
                    appid: 'c7d11b0ba55bda8b3a6732cea2cd48d7',
                    units: 'metric'
                }
            });
            setWeatherData(response.data);
        } catch (error) {
            console.error('Erro ao obter dados do clima:', error);
        }
    };

    const handleSearch = (cityName) => {
        searchWeather(cityName);
    };

    return (
        <div className="backgroundContainer">
            <div className="home">
                <div className="currentData">
                    <CurrentWeatherComponent />
                    <DetailsComponent weatherData={weatherData} />
                </div>
            </div>
            <SidebarComponent onSearch={handleSearch} />
        </div>
    );
}

export default WeatherComponent;
