import { useState, useEffect } from 'react';
import Navbar from './Navbar';

function NationalWeatherAlerts() {
  const api = {
    key: `${process.env.REACT_APP_WEATHER_API_KEY}`,
    base: "https://api.openweathermap.org/data/2.5/"  
  }

  const [data, setData] = useState({ });

  const alertDiv = document.getElementById('alerts')

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        async function getData() {
        const response = await fetch(
          `${api.base}onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,daily&appid=${api.key}`
        )
        let actualData = await response.json();
        
        setData(actualData);
        console.log(actualData);
      }
      getData()
      });
    } else {
      alertDiv.innerHTML = ('Sorry this is unavaliable')
    }
   
  },[])

    return (
      <div className="NationalWeatherAlerts">
        <h1>National Weather Alerts</h1>
        <Navbar/>
        {(typeof data.current !="undefined") ? (
        (typeof data.alerts === "undefined")?(<h1>No Alerts Near You</h1>):(<h1>{data.alerts[0].description}</h1>))
         : (
        <div>
          <h1 id='alerts'>loading data...</h1>
        </div>) }
      </div>
    );
  }
  
  export default NationalWeatherAlerts;