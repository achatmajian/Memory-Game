import React from "react";

function Hero(props) {
  return (
<section className="hero is-primary is-medium">
  <div className="hero-body">
    <div className="container">
      <h1 className="title">Pied Piper Memory Game</h1>
      <h2 className="subtitle">Click on an image to earn points, but don't click on any more than once!</h2>
  <h3 className="userScore">{props.userScore}></h3><h3 className="topScore">{props.topScore}></h3>
    </div>
  </div>
</section>
  );
}

export default Hero;
