import React from 'react';
import SocialLoginButtons from './components/SocialLoginButtons';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Social Login Demo</h1>
        <p>Choose your preferred login method</p>
        <SocialLoginButtons />
      </header>
    </div>
  );
}

export default App;