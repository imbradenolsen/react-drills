import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()

    this.state = {
      text: "hello"
    }
  }

  updateText(value){
    this.setState({
      text: value
    })
  }

  render() {
    return (
      <div className="App">
        <input onChange={e => this.updateText(e.target.value)} value={this.state.text}/>
        <p>{this.state.text}</p>
      </div>
    );
  }
}

export default App;