import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()

    this.state = {
      foods: ["Apple", "Banana", "Orange", "Pear", "Plum"],
      text: ''
    }
  }

  handleChange(value){
    this.setState({
      text: value
    })
  }

  render() {
    const filteredArray = this.state.foods.filter((element) => {
      return element.includes(this.state.text)
    })
    return (
      <div className="App">
        {filteredArray.map(element => {
          return (
            <h1>{element}</h1>
          )
        })}
       <input onChange={event => this.handleChange(event.target.value)}/>
      </div>
    );
  }
}

export default App;
