import React from 'react';

const PlaceDetail = ({ place }) => {
  // eslint-disable-next-line no-unused-vars

  return (
    <div>
      {/* Photo */}
      {place.photo ? (<div className="bg-white rounded-md p-4 mb-4">
        <div className="mb-2">
            <img
              src={place.photo.images.large.url}
              className="w-full h-auto rounded-md"
              alt="Restaurant"
            />
        </div>
        {/* Name */}
        <div className="ml-2 flex items-center">
          <h3 className="pr-3 font-semibold font-mooli">{place.name}</h3>
        </div>
        {/* Rating */}
        <div className="ml-2 flex justify-between">
          <h3 className=''>Rating:</h3>
          <div className='pr-3'>
            {place.rating ? (
              <div>
                <span className="text-yellow-400"> &#9733; </span>
                <span className="mr-1 font-normal">{place.rating}</span>
              </div>
            ) : (<h1>(No rating)</h1>)}
          </div>
        {/* Price */}
        </div>
        <div className="ml-2 flex justify-between">
          <h3 className=''>Price:</h3>
          <h3 className="pr-3 ">{place.price_level}</h3>
        </div>
        {/* Ranking */}
        <div className="ml-2 flex justify-between">
          <h3 className=''>Ranking:</h3>
          {place.ranking ? (<h3 className="pr-3 ">{place.ranking}</h3>) : (<h1>(No ranking)</h1>)}
        </div>
        {/* Chips */}
        <div className="ml-2 mt-2">
          {place.cuisine && place.cuisine.length > 0 && (
              <div className="flex flex-wrap">
                {place.cuisine.map(({ name }, index) => (
                  <span
                    key={index}
                    className="bg-white-500 hover:bg-gray-200 border border-black text-gray px-3 py-1 rounded-full m-1 text-sm text-light transition duration-300 ease-in-out cursor-pointer"
                  >
                    {name}
                  </span>
                ))}
              </div>
          )}
        </div>
        {/* Address */}
        <div className="ml-2 mt-2">
          {place.address && (
            <div className="flex justify-between">
              <svg class="h-6 w-6 text-black"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
              <h3 className="text-xs">{place.address}</h3>
            </div>
          )}
        </div>
        {/* Phone */}
        <div className="ml-2 mt-2">
          {place.phone && (
            <div className="flex justify-between">
              <svg class="h-6 w-6 text-black"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              <h3 className="text-xs">{place.phone}</h3>
            </div>
          )}
        </div>
      </div>) : null}
    </div>
  );
};

export default PlaceDetail;
