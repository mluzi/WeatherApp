import React from 'react';
import WeatherIcons from 'react-weathericons';
import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY,
  } from "../../constants/weather";

  import PropTypes from 'prop-types';
  import "./styles.css";

const icons = {
        [CLOUD]: "cloud",
        [CLOUDY]: "cloudy",
        [SUN]: "day-sunny",
        [RAIN]: "rain",
        [SNOW]: "snow",
        [WINDY]: "windy",
};

const getWeatherIcon = weatherState => {
    var icon = icons[weatherState];
    var sizeIcon = "2x";

    if (icon)
        return <WeatherIcons className="wicon" name = {icon} size={sizeIcon} />;
        else
        return <WeatherIcons className="wicon" name = {"day-sunny"} />;
}

const WeatherTemperature = ({temperature, weatherState}) => (
    <div className="weatherTemperatureCont">
        {
            getWeatherIcon(weatherState)
        }
        <span className="temperature">{` ${temperature}`}</span>
        <span className="temperatureType">{`C°`}</span>
    </div>
);

WeatherTemperature.propTypes = {
    temperature : PropTypes.number.isRequired,
    weatherState : PropTypes.string.isRequired,
};

export default WeatherTemperature;
