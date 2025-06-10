import { useState } from 'react'
import WeatherApp from './components/WeatherApp/WeatherApp'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <WeatherApp />
  )
}

export default App
