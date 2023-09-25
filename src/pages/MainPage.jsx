import React, { useState, useEffect } from 'react';
import List from '../components/List/List';
import Map from '../components/Map/Map';
import { getRestaurantList } from '../api/index';

const MainPage = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [coordinates, setCoordinates] = useState({ lat: 21.01754463, lng: 105.82812337 });
  const [bounds, setBounds] = useState({});

  useEffect(() => {
    if (bounds.sw && bounds.ne) {
      getRestaurantList(bounds.sw, bounds.ne)
        .then((data) => {
          setRestaurants(data);
        })
        .catch((error) => {
          console.error('Error fetching restaurant data:', error);
        });
    }
  }, [bounds]);

  return (
    <div className="grid grid-cols-3 flex">
      {/* List Component */}
      <div className="col-span-3 md:col-span-1">
        {/* Pass the fetched restaurant data as a prop to the List component */}
        <List restaurants={restaurants} />
      </div>

      {/* Map Component */}
      <div className="col-span-3 md:col-span-2">
        <Map
          setCoordinates={setCoordinates}
          setBounds={setBounds}
          coordinates={coordinates}
          places={restaurants}
        />
      </div>
    </div>
  );
};

export default MainPage;
