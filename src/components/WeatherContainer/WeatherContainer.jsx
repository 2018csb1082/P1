import { useState } from 'react'
import './WeatherContainer.css'

export default function WeatherContainer(weatherData) {
  return (
    <div className='WeatherContainer'>
      <div className='WeatherRow'>
        <div className='WeatherObject'>
          <img src={weatherData.weatherData.current.condition.icon} height='100%' width='100%'/>
        </div>
        <div className='WeatherObject'>
          {weatherData.weatherData.location.name}
        </div>
        <div className='WeatherObject'>
          {new Date(weatherData.weatherData.location.localtime_epoch).toDateString()}
        </div>
      </div>
      <div className='WeatherRow'>
        <div className='WeatherObject'>
          {weatherData.weatherData.current.condition.text}
        </div>
        <div className='WeatherObject'>
          {weatherData.weatherData.current.temp_c} C
        </div>
        <div className='WeatherObject'>
          AQI: {weatherData.weatherData.current.air_quality.co}
        </div>
      </div>
    </div>
  );
};