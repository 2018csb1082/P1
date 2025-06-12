import { useState } from 'react'
import './WeatherContainer.css'

import LocationObject from './../WeatherDetails/LocationObject';
import TempObject from './../WeatherDetails/TempObject';
import IconObject from './../WeatherDetails/IconObject';
import GeneralObject from './../WeatherDetails/GeneralObject';

import { FaWind } from "react-icons/fa";
import { WiDust } from "react-icons/wi";

export default function WeatherContainer(weatherData) {
  return (
    <div className='WeatherContainer'>
      <div className='WeatherRow heading'>
        <LocationObject location={weatherData.weatherData.location.name.toUpperCase()}/>
      </div>
      <div className='WeatherRow'>
        <TempObject 
          temp={weatherData.weatherData.current.temp_c}
          condition={weatherData.weatherData.current.condition.text}
        />
        <IconObject url={weatherData.weatherData.current.condition.icon}/>
      </div>
      <div className='WeatherRow'>
        <GeneralObject
          icon={<FaWind />} 
          detail_heading={"Wind"} 
          detail_num={weatherData.weatherData.current.wind_kph} 
          unit={"kmph"}
        />
        <GeneralObject
          icon={<WiDust />} 
          detail_heading={"AQI"} 
          detail_num={Math.round(weatherData.weatherData.current.air_quality.pm2_5)} 
          unit={""}
        />
        <GeneralObject
          icon={<></>} 
          detail_heading={"Humidity"} 
          detail_num={weatherData.weatherData.current.humidity} 
          unit={"%"}
        />
      </div>
    </div>
  );
};