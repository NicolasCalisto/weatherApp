import React from 'react';
import SidebarComponent from '../Sidebar/sidebar';
import DetailsComponent from './Details/details';
import CurrentWeatherComponent from './CurrentWeather/current';
import './home.css'

function WeatherComponent() {
    return (
        <div className="backgroundContainer">
            <div className="home">
                <div className="currentData">
                    <CurrentWeatherComponent />
                    <DetailsComponent />
                </div>
            </div>
            <SidebarComponent />
        </div>
    );
}

export default WeatherComponent;
