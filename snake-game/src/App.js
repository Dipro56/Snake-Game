import React, { Component } from "react";
import Food from './Food';
import Snake from './Snake';


const getRandomCoordinates=()=>{
  let min=1,max=98;
  let x=Math.floor((Math.random()*(max-min+1)+min)/2)*2;
  let y=Math.floor((Math.random()*(max-min+1)+min)/2)*2;
  console.log(x)
  console.log(y)
  return [x,y]
}


class App extends Component {

  state = {
    food: getRandomCoordinates(),
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
