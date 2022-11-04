import "./map.scss";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import React, { useMemo } from "react";
import { useState, useEffect, useRef } from "react";



const MapElement = ({location, center}) => {
  const ref = useRef(null);
  // const centerRef = useRef({lat: 40.71, lng: -74.01});
  const [map, setMap] = useState();
  const [zoom, setZoom] = useState(9);
  const defaultCenter = {lat: 40.71, lng: -74.01}

  // const lat = location ? location.results ? location.results[0].geometry.location.lat : 40.71 : 40.71;
  // const lng = location ? location.results ? location.results[0].geometry.location.lng : -74.01: -74.01;
  // const center = useMemo(() => (location ? location.results ? {lat: lat, lng: lng} : {lat: 40.71, lng: -74.01} : {lat: 40.71, lng: -74.01}), []);
  // const center = location ? location.results ? {lat: lat, lng: lng} : {lat: 40.71, lng: -74.01} : {lat: 40.71, lng: -74.01}
  // const centerObject = () => {
  //   if (location && location.results) {
  //     setCenter({...center, lat: lat, lng: lng})
  //   }
  // } 
  useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, {zoom: zoom, center: defaultCenter}));
    }

    // if (centerRef.current) {
    //   setMap(new window.google.maps.Map(ref.current, {zoom: zoom, center: center}));
    // }
    if (map) {
      map.setCenter(center)
    }

  }, [ref, map, center]);

  return (
    <>
      <div className="map-element" ref={ref} />
      {/* {lat}
      {lng} */}
      {center.lng}
    </>
  )

};

function Map({location}) {
    // const westerosiMap = "https://cdn.vox-cdn.com/thumbor/SxCKAhVp8PQ7utEQuXRyvgBsLYU=/51x0:977x617/920x613/filters:focal(51x0:977x617):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/50017015/Screen_Shot_2016-07-04_at_12.37.15_PM.0.0.png"
    const lat = location ? location.results ? location.results[0].geometry.location.lat : 40.71 : 40.71;
    const lng = location ? location.results ? location.results[0].geometry.location.lng : -74.01: -74.01;
    const center = location ? location.results ? {lat: lat, lng: lng} : {lat: 40.71, lng: -74.01} : {lat: 40.71, lng: -74.01}

    return (
      <div className="map">
        {/* <img src={westerosiMap} alt="map" width="100%" height="100%" /> */}
        <Wrapper apiKey={"AIzaSyB2Ib34DcxqVCSWDbGEfdil5Lu8m67i3FY"}>
          <MapElement location={location} center={center}/>
        </Wrapper>
      </div>
    );
  }
  
export default Map;
  