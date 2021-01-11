import React, { Component } from "react";
import Food from './Food';
import Snake from './Snake';

class App extends Component {

  state = {

    food: [
      [50, 50]
    ],
    snakeDots: [
      [0, 0],
      [2, 0],
      [4, 0]
    ]
  }


  render() {

    return (
      <div className="game-area">
        <Snake snakeDots={this.state.snakeDots} />
        <Food food={this.state.food} />
      </div>

    );

  }

}

export default App;
