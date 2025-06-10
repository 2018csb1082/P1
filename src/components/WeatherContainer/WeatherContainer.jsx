import { useState } from 'react'
import './WeatherContainer.css'

export default function WeatherContainer(weatherData) {
  return (
    <div className='WeatherContainer'>
      {JSON.stringify(weatherData)}
    </div>
  );
};