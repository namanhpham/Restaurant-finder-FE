import React from 'react'
import GoogleMapReact from 'google-map-react'

export default function Map ( {setCoordinates, setBounds, coordinates, places} ) {
  const defaultProps = {
    center: {
      lat: 21.01754463,
      lng: 105.82812337
    },
    zoom: 14
  };

  const handleClick = (e) => {
    console.log('Latitude: ', e.lat, 'Longitude: ', e.lng);
  };
  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_API_KEY }}
        defaultCenter={defaultProps.center}
        center={coordinates}
        defaultZoom={defaultProps.zoom}
        margin={[50, 50, 50, 50]}
        onClick={handleClick}
        onChange={(e) => {
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
      >
       {places?.map((place, index) => (
        <div
          key={index}
          lat={Number(place.latitude)}
          lng={Number(place.longitude)}
          className="relative"
        >
          {place.photo ? (<div className="bg-white p-4 rounded-md shadow-md w-32 absolute top-0 left-0 hover:visible hover:opacity-100 hover:w-48 hover:z-10 transition-all duration-300">
            <div className="mb-2">
              {/* Place image */}
              <img
                src={place.photo ? place.photo.images.large.url : ''}
                alt={place.name}
                className="w-full h-full rounded-md"
              />
            </div>

            {/* Place name */}
            <h6 className="font-mooli text-lg mb-2">{place.name}</h6>

            {/* Place rating */}
            <div className="text-yellow-400">
              {place.rating >= 4.5 ? '⭐⭐⭐⭐⭐' : place.rating >= 4 ? '⭐⭐⭐⭐' : null}
            </div>
          </div>): null}
        </div>
      ))}
      </GoogleMapReact>
    </div>
  );
}
