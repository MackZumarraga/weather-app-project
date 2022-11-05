import Main from "./components/main/Main";
import Navigation from "./components/navigation/Navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import "./app.scss";

function App() {
  const [city, setCity] = useState("New York City");
  const [weather, setWeather] = useState({});
  const [location, setLocation] = useState({});
  const defaultLat = 40.71
  const defaultLng = -74.01

  const fetchWeather = async () => {
    const lat = location.results ? location.results[0].geometry.location.lat : defaultLat;
    const lng = location.results ? location.results[0].geometry.location.lng : defaultLng;

    try {
      const response = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&hourly=temperature_2m,relativehumidity_2m,apparent_temperature,weathercode,windspeed_10m&temperature_unit=fahrenheit&windspeed_unit=mph`);
      return response.data;
    } catch (err) {
      throw err.response.data;
    }
  }

  const fetchLocation = async () => {
    try {
      const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${city}&key=AIzaSyB2Ib34DcxqVCSWDbGEfdil5Lu8m67i3FY`);
      return response.data;
    } catch (err) {
      throw err.response.data;
    }
  }


  useEffect(() => {
    const getWeather = async () => {
      const currentWeather = await fetchWeather();

      if (currentWeather) {
        setWeather(currentWeather);
      }
    }

    const getLocation = async () => {
      const currentLocation = await fetchLocation();

      if (currentLocation) {
        setLocation(currentLocation);
      }
    }

    getLocation();
    getWeather();
  }, [city]);


  return (
    <div className="App">
      <div className="app-container">
        <Navigation setCity={setCity} />
        <Main location={location} weather={weather}/>
      </div>
    </div>
  );
}

export default App;
