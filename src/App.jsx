import { useState, useEffect } from 'react'
import SearchBar from './components/SearchBar/SearchBar';
import WeatherApp from './components/WeatherApp/WeatherApp'

import './App.css'

function App() {
  const [city, setCity] = useState("");
  const [debounceCity, setDebounceCity] = useState(city);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounceCity(city);
    }, 700);
    return() => clearTimeout(timeout);
  }, [city]);

  return (
    <div>
      <SearchBar city={city} setCity={setCity}/>
      <WeatherApp city={debounceCity}/>
    </div>
  );
};

export default App;
