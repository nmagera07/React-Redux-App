import React from 'react';
import Pictures from './components/Pictures'
import NavBar from './components/NavBar'
import './App.css';
import 'semantic-ui-css/semantic.min.css'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Pictures />
    </div>
  );
}

export default App;
