import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import './Map.css';

mapboxgl.accessToken = import.meta.env.VITE_REACT_MAPBOX_ACC_TOKEN;

const BoxMap = ({ setLongtitude, setLatitude, setLocate }) => {

  const mapContainerRef = useRef(null);

  const [lng, setLng] = useState(105.8333522);
  const [lat, setLat] = useState(21.004);
  const [zoom, setZoom] = useState(12.5);
  const [lngLat, setLngLat] = useState([lng, lat]);

  // Initialize map when component mounts
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom,
    }); 

    // Add navigation control (the +/- zoom buttons)
    map.addControl(new mapboxgl.NavigationControl(), 'top-right');

    // map.addControl(
    //   new MapboxGeocoder({
    //     accessToken: mapboxgl.accessToken,
    //     mapboxgl: mapboxgl
    //   }), "bottom-left"
    // );
    const geocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      mapboxgl: mapboxgl,
    });

    geocoder.on('keyup', (e) => {
      const locate = e.target.value;
      setLocate(locate);
    });

    map.addControl(geocoder, 'bottom-left');

    map.on('move', () => {
      setLng(map.getCenter().lng.toFixed(4));
      setLat(map.getCenter().lat.toFixed(4));
      setZoom(map.getZoom().toFixed(2));

      const newLngLat = map.getCenter();
      setLongtitude(newLngLat.lng.toFixed(4));
      setLatitude(newLngLat.lat.toFixed(4));
    });
    

    map.on('move', () => {
      setLngLat([map.getCenter().lng.toFixed(4), map.getCenter().lat.toFixed(4)]);
      setZoom(map.getZoom().toFixed(2));
    });

    map.on('result', (e) => {
      const { center } = e.result.geometry;
      setLngLat([center[0].toFixed(4), center[1].toFixed(4)]);
    });
    

    // Clean up on unmount
    return () => map.remove();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      <div className='main-css'>
      <div className='sidebarStyle bg-red-400'>
        <div>
          {/* Longitude: {lng} | Latitude: {lat}
           */}
           Longitude: {lngLat[0]} | Latitude: {lngLat[1]}
        </div>
      </div>
      <div className='map-container' ref={mapContainerRef} />
      </div>
    </div>
  );
};

export default BoxMap;