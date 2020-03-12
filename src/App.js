import React from 'react';
import logo from './logo.svg';
import './App.css';

//function Component
function FirstComponent() {
  return (
      <div className="FirstComponent">
        <h1>First Component</h1>
      </div>
  );
}

function SComponent() {
  return (
      <div className="SComponent">
        <h2>S Component</h2>
        <p>My name is Kalpa</p>
      </div>
  );
}

function App() {
  return (
      <div className="App">
        <h1>Hello World</h1>
        <FirstComponent/>
        <SComponent/>
      </div>
  );
}

export default App;
