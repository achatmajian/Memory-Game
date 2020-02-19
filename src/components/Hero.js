import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
<section class="hero is-primary is-medium">
  <div class="hero-body">
    <div class="container">
      <h1 class="title">Memory Game</h1>
      <h2 class="subtitle">Click on an image to earn points, but don't click on any more than once!</h2>
      <h3 class="user-score"></h3><h3 class="top-score"></h3>
    </div>
  </div>
</section>
  );
}

export default Hero;
