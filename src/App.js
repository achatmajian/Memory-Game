import React from 'react';
import Grid from "./components/Grid.js";
import './App.css';

var imgUrls = [
  {url: "test"},
  {url: "test"},
  {url: "test"},
  {url: "test"},
];

function App() {
  const shuffleCards = () => {
    //shuffle logic goes in here!!!!
  }
  return (
    <div className="App">
      <Grid imgUrls={imgUrls}/>
    </div>

  );
}

export default App;
