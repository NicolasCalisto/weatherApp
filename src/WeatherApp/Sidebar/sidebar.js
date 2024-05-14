import React from 'react';
import SearchComponent from './Search/search';
import DefaultCitiesComponent from './DefaultCities/default';
import WeatherDetails from './Details/details';
import './sidebar.css';

function SidebarComponent({ onSearch, weatherData }) {
    const handleClickCity = (cityName) => {
        onSearch(cityName);
    };

    return (
        <div className="sidebar">
            {/* search */}
            <div className="search">
                <SearchComponent onSearch={onSearch}/>
            </div>
            {/* default cities */}
            <div className="sitting">
                <DefaultCitiesComponent onCityClick={handleClickCity}/>
            </div>
            {/* weather details */}
            <div className="sitting">
                <WeatherDetails weatherData={weatherData}/>
            </div>
        </div>
    );
}

export default SidebarComponent;
