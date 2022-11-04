import Detail from "./detail/Detail";
import Map from "./map/Map";
import "./main.scss";

function Main({city, location, weather}) {
    return (
      <div className="main">
        <Map location={location}/>
        <Detail city={city} location={location} weather={weather}/>
      </div>
    );
  }
  
  export default Main;
  