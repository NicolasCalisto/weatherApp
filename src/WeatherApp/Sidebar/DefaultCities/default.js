import React, { useState } from 'react';
import './default.css';
function DefaultCitiesComponent({ onCityClick }) {
    const cities = ['Recife','Olinda', 'Caruaru', 'Jaboatão', 'Paulista'];

    return (
        <ul className='cities'>
            {cities.map((city, index) => (
                <li key={index} className='city' onClick={() => onCityClick(city)}>
                    {city}
                </li>
            ))}
        </ul>
    );
}

export default DefaultCitiesComponent;
