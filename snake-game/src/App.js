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

const initialState={
  food: getRandomCoordinates(),
  speed:50,
  direction: 'RIGHT',
  snakeDots: [
    [0, 0],
    [2, 0],
    [4, 0]
  ]
}



class App extends Component {

  state = initialState;
  componentDidMount() {
    setInterval(this.moveSnake, this.state.speed);
    document.onkeydown = this.onKeyDown;
  }
  
  componentDidUpdate(){
    this.checkIfOutOfBorders()
  }


  onKeyDown=(e)=>{
    e=e || window.event;
    switch (e.keyCode) {
      case 38:
        this.setState({direction: 'UP'});
        break;
      case 40:
        this.setState({direction: 'DOWN'});
        break;
      case 37:
        this.setState({direction: 'LEFT'});
        break;
      case 39:
        this.setState({direction: 'RIGHT'});
        break;
    }

  }

  moveSnake = () => {
    let dots = [...this.state.snakeDots];
    let head = dots[dots.length - 1];

    switch (this.state.direction) {
      case 'RIGHT':
        head = [head[0] + 2, head[1]];
        break;
      case 'LEFT':
        head = [head[0] - 2, head[1]];
        break;
      case 'DOWN':
        head = [head[0], head[1] + 2];
        break;
      case 'UP':
        head = [head[0], head[1] - 2];
        break;
    }
    dots.push(head);
    dots.shift();
    this.setState({
      snakeDots: dots
    })
  }

  checkIfOutOfBorders() {
    let head =this.state.snakeDots[this.state.snakeDots.length-1];
    if(head[0]>= 100 || head[1]>=100 || head[0]<0 || head[1]<0){
      this.onGameOver();
    }
  }

  onGameOver(){
    alert(`Game Over! Your snakes length is ${this.state.snakeDots.length}`);
    this.setState(initialState)
  }



  render() {
    return (
      <div className="game-area">
        <Snake snakeDots={this.state.snakeDots}/>
        <Food dot={this.state.food}/>
      </div>
    );
  }
}



export default App;
