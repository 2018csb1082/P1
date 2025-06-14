import { useState , useEffect} from 'react'
import axios from 'axios'
import { PulseLoader } from "react-spinners";
import './WeatherApp.css'
import WeatherContainer from '../WeatherContainer/WeatherContainer';

export default function WeatherApp({city}) {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    setError("");
    const fetchWeather = async () => {
      try {
        const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
        const result = await axios.get('http://api.weatherapi.com/v1/current.json', {
          params: {
            key: apiKey,
            q: city,
            aqi: 'yes'
          }
        });
        setWeatherData(result.data);
        setLoading(false);
      } catch(error) {
        setError('Error: ' + error);
        setLoading(false);
      }
    };
    if (city != "")
      fetchWeather();
  }, [city]);

  if (city === "") {
    return(
      <div className='WeatherBox'>
        Type in your city...
      </div>
    );
  }

  if (loading) {
    return(
      <div className='WeatherBox'>
        <PulseLoader 
          size={30}
          color='#483D8B'
          speedMultiplier={0.7}
        />
      </div>
    );
  }

  if (error != "") {
    return(<div className='ErrorBox'>
      <div className='ErrorObject top'>{"Something went wrong :("}</div>
      <div className='ErrorObject bottom'>{error}</div>
    </div>);
  } 

  return(
    <div className='WeatherBox'>
      <WeatherContainer weatherData={weatherData}/>
    </div>
  )
};