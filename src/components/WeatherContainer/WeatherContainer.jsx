import { useState } from 'react'
import './WeatherContainer.css'

import { FaWind } from "react-icons/fa";
import { WiDust } from "react-icons/wi";
import { WiHumidity } from "react-icons/wi";

export default function WeatherContainer(weatherData) {
  return (
    <div className='WeatherContainer'>
      <div className='WeatherRow heading'>
        <div className='WeatherObject location'>
          {weatherData.weatherData.location.name.toUpperCase()}
        </div>
      </div>
      <div className='WeatherRow'>
        <div className='WeatherObject temp'>
          <div>{weatherData.weatherData.current.temp_c}&deg;</div>
          <div className='cond'>{weatherData.weatherData.current.condition.text}</div>
        </div>
        <div className='WeatherObject'>
          <img src={weatherData.weatherData.current.condition.icon} height='100%' width='100%'/>
        </div>
      </div>
      <div className='WeatherRow'>
        <div className='WeatherObject details'>
          <div><FaWind /> Wind</div>
          <div>{weatherData.weatherData.current.wind_kph} <span className='unit'>kmph</span></div>
        </div>
        <div className='WeatherObject details'>
          <div><WiDust /> AQI</div>
          <div>{Math.round(weatherData.weatherData.current.air_quality.pm2_5)}</div>
        </div>
        <div className='WeatherObject details'>
          <div>Humidity</div>
          <div>{weatherData.weatherData.current.humidity} <span className='unit'>%</span></div>
        </div>
      </div>
    </div>
  );
};