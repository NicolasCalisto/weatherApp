import React from 'react';
import SearchComponent from './Search/search';
import DefaultCitiesComponent from './DefaultCities/default';
import WeatherDetails from './Details/details';
import './sidebar.css';

function SidebarComponent({ onSearch}) {
    return (
        <div className="sidebar">
            {/* search */}
            <div className="search">
                <SearchComponent onSearch={onSearch}/>
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
