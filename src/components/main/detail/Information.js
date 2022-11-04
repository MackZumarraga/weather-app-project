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
        Information
        City: {location.results ? location.results[0].formatted_address : "hey"}
        Date: {month + " " + day}
        Day of Week: {dayOfWeek}
        Weather Code: {weather.hourly ? weatherCode[weather.hourly.weathercode[hour]] : "hi"}
        Feels Like: {weather.hourly ? weather.hourly.apparent_temperature[hour] + "°F" : "hi"}
        Temperature: {weather.hourly ? weather.hourly.temperature_2m[hour] + "°F" : "hi"}
        Humidity: {weather.hourly ? weather.hourly.relativehumidity_2m[hour] + "%" : "hi"}
        <img src="https://cdn.pixabay.com/photo/2013/07/13/12/12/snow-159390_960_720.png" alt="cloudy" width="100" height="100" />
      </div>
    );
  }
  
  export default Information;
  