import React from 'react'

import List from '../components/List/List';
import Map from '../components/Map/Map';

const MainPage = () => {
  return (
    <div className="grid grid-cols-3">
      {/* List Component */}
      <div className="col-span-3 md:col-span-1">
        <List />
      </div>
      
      {/* Map Component */}
      <div className="col-span-3 md:col-span-2">
        <Map />
      </div>
    </div>
  );
};

export default MainPage
