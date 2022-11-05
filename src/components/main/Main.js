import Detail from "./detail/Detail";
import Map from "./map/Map";
import "./main.scss";

function Main({ location, weather }) {
    return (
      <div className="main">
        <Map location={location}/>
        <Detail location={location} weather={weather}/>
      </div>
    );
  }
  
  export default Main;
  