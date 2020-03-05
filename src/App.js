import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Score from "./components/Score";
import images from "./images.json";
import "./App.css";

class App extends Component {
  // Setting state
  state = {
    images,
    clickedId: [],
    score: 0,
    goal: 8,
    status: ""
  };

  // Shuffle logic when image is clicked
  shuffleScoreCard = id => {
    let clickedId = this.state.clickedId;

    if(clickedId.includes(id)){
      this.setState({ clickedId: [], score: 0, status: "You Lose" });
      return;
    }else{
      clickedId.push(id)

      if(clickedId.length === 8){
        this.setState({score: 8, status: "You Win", clickedId: []});
        console.log('You Win');
        return;
      }

      this.setState({ images, clickedId, score: clickedId.length, status: " " });

      for (let i = images.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [images[i], images[j]] = [images[j], images[i]];
      }
    }
  }

  // Renders cards using .map from json objects array
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Pied Piper Memory Game</h1>
          <p className="App-intro">
          Click on an image to earn points, but don't click on any more than once!
          </p>
          <br></br>
          <Score total={this.state.score}
               goal={8}
               status={this.state.status}
               />
        </header>

        <Wrapper>
          {this.state.images.map(images => (
            <Card
              shuffleScoreCard={this.shuffleScoreCard}
              id={images.id}
              name={images.name}
              image={images.url}
            />
          ))}
        </Wrapper>
    </div>
    );
  }
}

export default App;
