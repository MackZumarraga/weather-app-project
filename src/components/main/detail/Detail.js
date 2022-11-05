import Information from "./Information";
import "./detail.scss";

function Detail({ location, weather }) {
    return (
      <div className="detail">
        <Information location={location} weather={weather} />
      </div>
    );
  }
  
  export default Detail;
  