import React from 'react';
import logo from '../logo.svg';

const Welcome = props => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome
        </p>
      </header>
    </div>
  );
}

export default Welcome;