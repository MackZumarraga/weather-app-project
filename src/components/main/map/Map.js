import "./map.scss";

function Map() {
    const westerosiMap = "https://cdn.vox-cdn.com/thumbor/SxCKAhVp8PQ7utEQuXRyvgBsLYU=/51x0:977x617/920x613/filters:focal(51x0:977x617):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/50017015/Screen_Shot_2016-07-04_at_12.37.15_PM.0.0.png"

    return (
      <div className="map">
        <img src={westerosiMap} alt="map" width="100%" height="100%" />
      </div>
    );
  }
  
  export default Map;
  