import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import axios from 'axios';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true;

const client = axios.create({
  baseURL: 'http://localhost:8000',
});

const Header = () => {
  const { currentUser, updateUser } = useAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    navigate('/login')
    localStorage.removeItem('token');
    const response = await client.get('/api/logout/');
    console.log(response);
    updateUser(null);
  };

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <nav className="bg-white-500 p-4">
      <div className="container mx-auto grid grid-cols-3 items-center">
        {/* Left Column */}
        <div className="col-span-2 flex items-center">
          <div className="text-black text-2xl font-semibold">My Restaurant</div>
          {/* Search bar here */}
          <div className="ml-4 flex items-center space-x-2">
            <input
              type="text"
              placeholder="Search..."
              className="border rounded px-2 py-1"
            />
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 rounded-md transition duration-300">
              Search
            </button>
          </div>
          {/* End of search bar */}
        </div>

        {/* Right Column */}
        <div className="flex justify-end">
          {!currentUser ? (
            <button
              onClick={handleLogin}
              className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md mr-4 transition duration-300"
            >
              Login
            </button>
          ) : (
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md transition duration-300"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
