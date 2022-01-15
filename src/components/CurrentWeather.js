import React, { useState, useEffect }  from 'react';
import Navbar from './Navbar';

function CurrentWeather() {

const api = {
  key: `${process.env.REACT_APP_WEATHER_API_KEY}`,
  base: "https://api.openweathermap.org/data/2.5/"
}

const [value, setValue] = useState('');
const dataDiv = document.getElementById('weather-data');

useEffect(() => {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      async function getData() {
        const response = await fetch(`${api.base}weather?lat=${latitude}&lon=${longitude}&appid=${api.key}`)
        let actualData = await response.json();
        
        const weather = actualData

        console.log(weather)
        
        const dataDiv = document.getElementById('weather-data');

        dataDiv.innerHTML = (`
              <h1>${Math.round((weather.main.temp-273.15)*9/5+32)}°F</h1>
              <h3>${Math.round((weather.main.temp_max-273.15)*9/5+32)}°F</h3>
              <h3>${Math.round((weather.main.temp_min-273.15)*9/5+32)}°F</h3>
              <img src='http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png'></img>
              <h2>${weather.weather[0].description}</h2>
          `);
      }
      getData()
      });
  }else{

  }
}, [])

const search = () => { 
  fetch(`${api.base}/weather?q=${value}&units=imperial&APPID=${api.key}`)
    .then(resp => resp.json())
    .then(weather => {
      setValue('');
      
      dataDiv.innerHTML = (`
          <h1>${Math.round(weather.main.temp)}°F</h1>
          <h3>${Math.round(weather.main.temp_max)}°F</h3>
          <h3>${Math.round(weather.main.temp_min)}°F</h3>
          <img src='http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png'></img>
          <h2>${weather.weather[0].description}</h2>
      `);
    }).catch( error => {
      dataDiv.innerHTML = (`
      <h1>Opps sorry, there was an error can you re-enter location</h1>
      `);
    });
}
    return (
      <div className="CurrentWeather">
      <Navbar/>
        {("geolocation" in navigator)?(
          <h3>geolocation is on data is loading 
          </h3>
        ):(
          <div>
            <input placeholder='Location' type="text" className="search-bar" onChange={e => setValue(e.target.value)} value={value}/>
            <button type="submit" onClick={search} >Search</button>
          </div>
          )}
        <div id='weather-data'>
        </div> 
      </div>
    );
  }
  
  export default CurrentWeather;
  