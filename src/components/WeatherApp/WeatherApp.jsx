import { useState , useEffect} from 'react'
import axios from 'axios'
import './WeatherApp.css'
import WeatherContainer from '../WeatherContainer/WeatherContainer';

export default function WeatherApp() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const result = await axios.get('http://api.weatherapi.com/v1/current.json', {
          params: {
            key: '32b3f84daada42eb86970134251006',
            q: 'Chandigarh',
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
    fetchWeather();
  }, []);

  if (loading) {
    return(<div className='WeatherLoading'>Loading...</div>);
  }

  if (error != "") {
    return(<div className='WeatherError'>{error}</div>);
  } 

  return(
    <div className='WeatherBox'>
      <WeatherContainer weatherData={weatherData}/>
    </div>
  )
};