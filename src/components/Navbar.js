import React from 'react';
import { Link} from 'react-router-dom';


function Navbar() {
    return (
      <div className="Navbar">
        <ul>
            <li><Link to="/">Main</Link></li>
            <li><Link to="/current_weather">Current Weather</Link></li>
            <li><Link to="/hourly_four_day">Hourly Four Day</Link></li>
            <li><Link to="/month_weather">Month Weather</Link></li>
            <li><Link to="/air_quality">Air Quality</Link></li>
        </ul>
      </div>
    );
  }
  
  export default Navbar;