import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // Simplified login logic - replace with your authentication mechanism
    if (username === 'your_username' && password === 'your_password') {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  };

  return (
    <div className="App">
      {isLoggedIn ? (
        <div>
          <h2>Welcome, {username}!</h2>
          <p>You are now logged in.</p>
        </div>
      ) : (
        <div>
          <h2>Login</h2>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button onClick={handleLogin}>Login</button>
          <p>{isLoggedIn ? '' : 'Invalid username or password. Please try again.'}</p>
        </div>
      )}
    </div>
  );
};

export default App;
