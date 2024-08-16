import React, { useState, useContext } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/user/login', {
        email,
        password,
      });
      // console.log(response.data);
      login(response.data.data.user, response.data.data.token);
      // console.log('Navigating to /todo');
      navigate('/todo');
    } catch (err) {
      setError(err.response?.data?.message || 'An error occurred');
      console.log(err);
    }
  };

  return (
    <div className='bg-white rounded-lg p-8 shadow-lg w-full max-w-md'>
      <h1 className='text-2xl font-bold mb-6 text-center'>Login</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleLogin}>
        <div className='mb-4'>
          <label className='block text-gray-700'>
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className='w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-indigo-200'
          />
        </div>
        <div className='mb-4'>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className='w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-indigo-200'
          />
        </div>
        <button 
          type="submit"
          className="w-full bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-200"
        >
          Login
        </button>
      </form>
      <p className='pt-3 text-center'>Don't have an account <Link to={'/signup'} className='underline-offset-2 text-orange-500'>Sign up</Link></p>
    </div>
  );
};

export default LoginPage;
