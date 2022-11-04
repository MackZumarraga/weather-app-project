import Main from "./components/main/Main";
import Navigation from "./components/navigation/Navigation";
import "./app.scss";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [city, setCity] = useState("New York City");
  const [weather, setWeather] = useState({});
  const [location, setLocation] = useState({});

  const fetchWeather = async () => {
    const lat = location.results ? location.results[0].geometry.location.lat : 40.71;
    const lng = location.results ? location.results[0].geometry.location.lng : -74.01;
    // const response = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&hourly=temperature_2m,relativehumidity_2m,apparent_temperature,weathercode,windspeed_10m,winddirection_10m&temperature_unit=fahrenheit`);
    // return response.data
    try {
      const response = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&hourly=temperature_2m,relativehumidity_2m,apparent_temperature,weathercode,windspeed_10m,winddirection_10m&temperature_unit=fahrenheit`);
      return response.data;
    } catch (err) {
      throw err.response.data;
    }
  }

  const fetchLocation = async () => {
    // const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${city}&key=AIzaSyB2Ib34DcxqVCSWDbGEfdil5Lu8m67i3FY`);
    // return response.data

    try {
      const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${city}&key=AIzaSyB2Ib34DcxqVCSWDbGEfdil5Lu8m67i3FY`);
      return response.data;
    } catch (err) {
      throw err.response.data;
    }
  }
  // }



  useEffect(() => {
    const getWeather = async () => {
      const currentWeather = await fetchWeather();

      if (currentWeather) {
        console.log(currentWeather);
        setWeather(currentWeather);
      }
    }

    const getLocation = async () => {
      const currentLocation = await fetchLocation();

      if (currentLocation) {
        setLocation(currentLocation);
        // console.log(currentLocation)
      }
    }

    getLocation();
    getWeather();
  }, [city]);


  return (
    <div className="App">
      {/* {weather.hourly ? weather.hourly.apparent_temperature[0] : "hi"}
      {location.results ? location.results[0].geometry.location.lat : "hi"} */}
      {/* Temperature: {weather ? weather.hourly ? weather.hourly.apparent_temperature[0] : "hi" : "hi"} */}
      {/* {location ? location.results ? location.results[0].geometry.location.lat : "hey" : "hey"} */}
      {/* {location ? location.results ? location.results[0].formatted_address : "hey" : "hey"} */}
      {/* {location === undefined ? "nada" : location.results[0].geometry.location.lat} */}
      {/* The coordinates are Lat: {location ? location.results[0].geometry.location.lat : "nada"} and Long: {location ? location.results[0].geometry.location.lng: "nada"} */}
      <div className="app-container">
        <Navigation setCity={setCity} />
        <Main city={city} location={location} weather={weather}/>
      </div>
    </div>
  );
}

export default App;
