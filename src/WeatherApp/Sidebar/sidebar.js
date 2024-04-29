import React from 'react';
import SearchComponent from './Search/search';
import DefaultCitiesComponent from './DefaultCities/default';
import WeatherDetails from './Details/details';
import './sidebar.css';

function SidebarComponent() {
    return (
        <div className="sidebar">
            {/* search */}
            <div className="search">
                <SearchComponent />
            </div>
            {/* default cities */}
            <div className="sitting">
                <DefaultCitiesComponent />
            </div>
            {/* weather details */}
            <div className="sitting">
                <WeatherDetails />
            </div>
        </div>
    );
}

export default SidebarComponent;
