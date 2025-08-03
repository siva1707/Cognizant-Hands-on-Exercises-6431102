import React, { useState } from 'react';
import './App.css';
import Greeting from './components/Greeting';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => {
    setIsLoggedIn(true);
  };

  const handleLogoutClick = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="App">
      <h1>✈️ Ticket Booking App</h1>
      {isLoggedIn ? (
        <LogoutButton onClick={handleLogoutClick} />
      ) : (
        <LoginButton onClick={handleLoginClick} />
      )}

      <Greeting isLoggedIn={isLoggedIn} />
    </div>
  );
}

export default App;
