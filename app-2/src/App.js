import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()

    this.state = {
      foods: ["Apple", "Banana", "Peach", "Orange", "Plum"]
    }
  }


  render() {
    return (
      <div>
        {this.state.foods.map((element) => (
          <h2>{element}</h2>
        ))}
      </div>
    );
  }
}

export default App;