import React from 'react';

const PlaceDetail = ({ place }) => {
  const formattedRating = (place.rating / 5) * 100;

  return (
    <div>
      <div className='flex justify-content items-center'>
        <h1> {place.name} </h1>
        <div className='ml-2 flex items-center'>
          <span className='mr-1'>{place.rating.toFixed(1)}/5</span>
          {place.rating >= 4.5 ? (
            <svg className="h-6 w-6 text-red-500"  viewBox="0 0 24 24"  fill="red"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
          ) : place.rating >= 4 ? (
            <svg className="h-8 w-8 text-yellow-200"  viewBox="0 0 24 24"  fill="yellow"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
            
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default PlaceDetail;
