import React from 'react';
import Hero from "./components/Hero.js";
import Grid from "./components/Grid.js";
import images from "./images.json";
import './styles/App.css';

// images.map, then generate picture into a div

function App() {
  const shuffle = () => {
    // Shuffle logic goes here
  };
  const imageClick = () => {
    // Image click logic goes here
  };
  const gameOver = () => {
    // Game over logic goes here
  };
  return (
    <div className="App">
      <Hero />
      <Grid pickle={images}/>
    </div>

  );
}

export default App;
