import React from 'react';
import { Routes, Route} from 'react-router-dom';
import MonthWeather from './components/MonthWeather';
import HourlyFourDay from './components/HourlyFourDay';
import CurrentWeather from './components/CurrentWeather';
import AirQuality from './components/AirQuality';
import Main from './components/Main';


class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Main/>}/>
          <Route exact path="/current_weather" element={<CurrentWeather/>}/>
          <Route exact path="/hourly_four_day" element={<HourlyFourDay/>}/>
          <Route exact path="/month_weather" element={<MonthWeather/>}/>
          <Route exact path="/air_quality" element={<AirQuality/>}/>
        </Routes>
      </div>
    );
  }
}

export default App;



