import React, { useState } from 'react';
import PlaceDetail from '../PlaceDetails/PlaceDetail';
const List = () => {
  // Define your restaurant data (for demonstration purposes)
  const restaurants = [
    { name: 'Bistro Deluxe', rating: 4.754 },
    { name: 'Cafe Riviera', rating: 3.256 },
    { name: 'Gourmet Kitchen', rating: 5 },
    { name: 'Sushi Delight', rating: 4.213 },
    { name: 'Steakhouse Grill', rating: 5 },
  ];

  // State to track the selected rating
  const [selectedRating, setSelectedRating] = useState('');

  // Handle rating change
  const handleRatingChange = (e) => {
    setSelectedRating(e.target.value);
  };

  // Filter restaurants based on the selected rating
  const filteredRestaurants = restaurants.filter((restaurant) => {
    if (!selectedRating) {
      // If no rating is selected, show all restaurants
      return true;
    }
    // Filter by selected rating
    return restaurant.rating >= parseInt(selectedRating, 10);
  });

  return (
    <div className="p-4 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-semibold text-gray-800 mb-4">Restaurant List</h1>
      <div className="mb-4">
        <label htmlFor="ratingSelect" className="block text-gray-700 font-bold mb-2">
          Select Rating:
        </label>
        <select
          id="ratingSelect"
          value={selectedRating}
          onChange={handleRatingChange}
          className="border rounded px-4 py-2 w-48 focus:outline-none focus:ring focus:border-blue-300"
        >
          <option value="">All Ratings</option>
          <option value="1">&#9733;</option>
          <option value="2">&#9733;&#9733;</option>
          <option value="3">&#9733;&#9733;&#9733;</option>
          <option value="4">&#9733;&#9733;&#9733;&#9733;</option>
          <option value="5">&#9733;&#9733;&#9733;&#9733;&#9733;</option>
        </select>
      </div>
      <div>
        {/* Display the filtered restaurants */}
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Filtered Restaurants:</h2>
        <ul className="list-disc pl-6">
          {filteredRestaurants.map((restaurant, index) => (
            <li
              key={index}
              className="text-gray-700 mb-2 flex items-center"
            >
              <PlaceDetail place={restaurant}/>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default List;
