import React, { useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../contexts/AuthContext';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';


const client = axios.create({
  baseURL: 'http://localhost:8000'
});

const UserPage = () => {

  const navigate = useNavigate();
  const { currentUser, updateUser } = useAuth()
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await client.post('/api/login/', {
        username,
        password
      },
      {withCredentials: true});
      console.log(response);
      updateUser(response.data);
    } catch (err) {
      setError('Invalid username or password.');
    }
  };

  const toMainPage = () => {
    navigate('/')
  }

  const handleLogout = async () => {
    navigate('/login')
    localStorage.removeItem('token');
    const response = await client.get('/api/logout/', {withCredentials: true});
    console.log(response);
    updateUser(null);
  };

  return(
    <div className="flex justify-center items-center h-screen">
      {currentUser ? (
        <div>
          <h1 className="text-2xl font-bold mb-3">Welcome {currentUser.username}!</h1>
          <button
            className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={handleLogout}
          >
            Logout
          </button>
          <button onClick={toMainPage} className='bg-green-500 hover:bg-green-600 text-white py-2 px-5 rounded-md ml-4 transition duration-300'> 
            To main page 
          </button>
        </div>
      ) : (
        <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-xl">
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={handleLogin}
            >
              Login
            </button>
          </div>
        </div>
      )}
    </div>
  )
};

export default UserPage;