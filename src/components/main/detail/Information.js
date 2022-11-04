import "./information.scss";

function Information({city, location, weather}) {
    return (
      <div className="information">
        Information
        The city is {location ? location.results ? location.results[0].formatted_address : "hey" : "hey"}
        Temperature: {weather ? weather.hourly ? weather.hourly.apparent_temperature[0] : "hi" : "hi"}
      </div>
    );
  }
  
  export default Information;
  