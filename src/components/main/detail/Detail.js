import Favorite from "./Favorite";
import Information from "./Information";
import "./detail.scss";

function Detail({city, location, weather}) {
    return (
      <div className="detail">
        <Information city={city} location={location} weather={weather} />
        {/* <Favorite /> */}
      </div>
    );
  }
  
  export default Detail;
  