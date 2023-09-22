import React from 'react'
import GoogleMapReact from 'google-map-react'

export default function Map(){
  const defaultProps = {
    center: {
      lat: 21.01754463,
      lng: 105.82812337
    },
    zoom: 12
  };

  const handleClick = (e) => {
    console.log('Latitude: ', e.lat, 'Longitude: ', e.lng);
  };
  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAsWH3YQDjNRMFCxoKXKEXbsjvT_NONNh8" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        margin={[50, 50, 50, 50]}
        onClick={handleClick}
      >
      </GoogleMapReact>
    </div>
  );
}
