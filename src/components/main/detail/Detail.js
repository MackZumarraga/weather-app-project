import Favorite from "./Favorite";
import Information from "./Information";
import "./detail.scss";

function Detail() {
    return (
      <div className="detail">
        <Information />
        <Favorite />
      </div>
    );
  }
  
  export default Detail;
  