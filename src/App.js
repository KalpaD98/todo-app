import React from 'react';
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

function TComponent() {
    return (
        <div className="SComponent">
            <h2>TComponent</h2>
            <p>My age is 21</p>
        </div>
    );
}

function App() {
  return (
      <div className="App">
        <h1>Hello World</h1>
          <FirstComponent></FirstComponent>
          <SComponent> </SComponent>
          <TComponent></TComponent>
      </div>
  );
}

export default App;
