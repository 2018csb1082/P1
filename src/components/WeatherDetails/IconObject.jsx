import './WeatherDetails.css'

function IconObject({url}) {
  return (
    <div className='WeatherObject'>
        <img src={url} height='100%' width='100%'/>
    </div>
  );
}

export default IconObject;