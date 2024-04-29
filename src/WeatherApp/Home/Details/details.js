import React from 'react';
import './details.css';

function DetailsComponent() {
    const temperature = 16;
    const city = 'Recife';
    const time = '18:36';
    const date = 'Terça, 23 de Agosto';

    return (
        <div className="details">
            <div>
                <h1 className="temperature">{temperature} °C</h1>
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
