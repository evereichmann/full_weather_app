import React, { useState, useEffect }  from 'react';
import Navbar from './Navbar';

function CurrentWeather() {

const api = {
  key: `${process.env.REACT_APP_WEATHER_API_KEY}`,
  base: "https://api.openweathermap.org/data/2.5/"
}

const [value, setValue] = useState('');
const dataDiv = document.getElementById('weather-data');

const search = evt => { 
    fetch(`${api.base}/weather?q=${value}&units=imperial&APPID=${api.key}`)
      .then(resp => resp.json())
      .then(weather => {
        setValue('');
        
        dataDiv.innerHTML = (`
          <div>
            <h1>${Math.round(weather.main.temp)}°F</h1>
            <h3>${Math.round(weather.main.temp_max)}°F</h3>
            <h3>${Math.round(weather.main.temp_min)}°F</h3>
            <img src='http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png'></img>
            <h2>${weather.weather[0].description}</h2>
          </div>  
        `);
      })
      .catch(error => {
        dataDiv.innerHTML = (`
          <div>
            <h1>Opps sorry, there was an error can you re-enter location</h1>
          </div>  
        `);
      });
 }


    return (
      <div className="CurrentWeather">
      <Navbar/>
        <input placeholder='Location' type="text" className="search-bar" onChange={e => setValue(e.target.value)} value={value} />
        <button type="submit" onClick={search}>Search</button>
        <div id='weather-data'>
        </div> 
      </div>
    );
  }
  
  export default CurrentWeather;
  