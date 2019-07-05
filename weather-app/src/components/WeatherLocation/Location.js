import React from 'react';
import "./styles.css";

const Location  = ({ city }) => {
    return (
        <div className="locationCont">
            <h1>
                {city}
            </h1>
        </div>
    );
};

export default Location;