import './WeatherDetails.css'

function LocationObject({location}) {
  return (
    <div className='WeatherObject location'>
            {location}
    </div>
  );
}

export default LocationObject;