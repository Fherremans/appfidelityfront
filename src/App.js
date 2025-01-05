import React, { useEffect, useState } from 'react';

const App = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Fetch data from the backend
    fetch('https://appfidelity-backend.onrender.com')
      .then((response) => response.text())
      .then((data) => setMessage(data))
      .catch((err) => console.error('Error fetching data:', err));
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Frontend Test</h1>
      <p>{message || 'Loading...'}</p>
    </div>
  );
};

export default App;
