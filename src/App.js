import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [isLogin, setIsLogin] = useState(true); // Toggle between Login and Signup
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = isLogin
        ? 'https://appfidelity-backend.onrender.com/login'
        : 'https://appfidelity-backend.onrender.com/signup';

      const response = await axios.post(url, { email, password });

      if (isLogin) {
        // Save token locally for authenticated requests
        localStorage.setItem('test', response.data.token);
        setMessage('Login successful!');
      } else {
        setMessage('Signup successful!');
      }

      // Clear the form
      setEmail('');
      setPassword('');
    } catch (error) {
      setMessage(error.message || 'An error occurred.');
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>{isLogin ? 'Login' : 'Signup'}</h1>
      <form onSubmit={handleSubmit} style={{ maxWidth: '300px', margin: '0 auto' }}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ display: 'block', width: '100%', margin: '10px 0', padding: '10px' }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ display: 'block', width: '100%', margin: '10px 0', padding: '10px' }}
        />
        <button type="submit" style={{ padding: '10px 20px', margin: '10px 0' }}>
          {isLogin ? 'Login' : 'Signup'}
        </button>
      </form>
      <button
        onClick={() => setIsLogin(!isLogin)}
        style={{ padding: '5px 10px', margin: '10px 0' }}
      >
        {isLogin ? 'Switch to Signup' : 'Switch to Login'}
      </button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default App;
