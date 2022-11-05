import { Wrapper } from "@googlemaps/react-wrapper";
import { useState, useEffect, useRef } from "react";
import "./map.scss";


const MapElement = ({ center }) => {
  const ref = useRef(null);

  const [map, setMap] = useState();
  const [marker, setMarker] = useState();

  const zoom = 12;
  const defaultCenter = {lat: 40.71, lng: -74.01}


  useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, {zoom: zoom, center: defaultCenter}));
      if (!marker) {
        setMarker(new window.google.maps.Marker())
      }
    }

    if (map) {
      map.setCenter(center)
    }

    if (marker) {
      marker.setOptions({position: center, map: map});
    }

  }, [ref, map, center]);

  return <div className="map-element" ref={ref} />
};

function Map({location}) {
    const lat = location ? location.results ? location.results[0].geometry.location.lat : 40.71 : 40.71;
    const lng = location ? location.results ? location.results[0].geometry.location.lng : -74.01: -74.01;
    const center = location ? location.results ? {lat: lat, lng: lng} : {lat: 40.71, lng: -74.01} : {lat: 40.71, lng: -74.01}

    return (
      <div className="map">
        <Wrapper apiKey={"AIzaSyB2Ib34DcxqVCSWDbGEfdil5Lu8m67i3FY"}>
          <MapElement center={center}/>
        </Wrapper>
      </div>
    );
  }
  
export default Map;
  