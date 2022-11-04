import "./information.scss";
import { weatherCode } from "./weatherCode";

function Information({city, location, weather}) {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const date = new Date();
    const hour = date.getHours();
    const day = date.getDay();
    const dayOfWeek = days[day];
    const month = months[date.getMonth()];

    return (
      <div className="information">
        <div className="top">
          <div className="title">
            {location.results ? location.results[0].formatted_address : "hey"}
          </div>
          <div className="date">
            <div className="month-day">
              {month + " " + day}
            </div>
            <div className="day-of-week">
              {dayOfWeek}
            </div>
          </div>
        </div>

        <div className="mid">
          <div className="mid-content">
            <div className="weather-icon">
              <img src="https://cdn.pixabay.com/photo/2013/07/13/12/12/snow-159390_960_720.png" alt="cloudy" width="100" height="100" />
            </div>
            <div className="weather-code-def">
              {weather.hourly ? weatherCode[weather.hourly.weathercode[hour]] : "hi"}
            </div>
          </div>
        </div>

        <div className="low">
          <div className="temperature-content">
            <div className="temperature">
              {weather.hourly ? weather.hourly.temperature_2m[hour] + "°F" : "hi"}
            </div>
            <div className="feels-like">
              Feels Like {weather.hourly ? weather.hourly.apparent_temperature[hour] + "°F" : "hi"}
            </div>
          </div>
          <div className="other-weather-info">
            <div className="humidity">
              Humidity: {weather.hourly ? weather.hourly.relativehumidity_2m[hour] + "%" : "hi"}
            </div>
            <div className="wind-speed">
              Wind Speed: {weather.hourly ? weather.hourly.windspeed_10m[hour] + "Mph" : "hi"}
            </div>
          </div>
        </div>
        
        
        
        
        
        
        
      </div>
    );
  }
  
  export default Information;
  