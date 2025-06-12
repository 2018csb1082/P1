import './WeatherDetails.css'

function TempObject({temp, condition}) {
  return (
    <div className='WeatherObject temp'>
          <div>{temp}&deg;</div>
          <div className='cond'>{condition}</div>
    </div>
  );
}

export default TempObject;