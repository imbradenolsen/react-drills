import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Login extends Component {
  constructor(){
    super()

    this.state = {
      username: '',
      password: ''
    }
    this.handleLogin = this.handleLogin.bind(this)
  }

  handleUpdateUser(value){
    this.setState({
      username: value
    })
  }

  handleUpdatePassword(value){
    this.setState({
      password: value
    })
  }
  
  handleLogin(){
    alert(`Username: ${this.state.username} Password: ${this.state.password}`)
  }
  render() {
    return (
      <div className="App">
        <input className="username-box" onChange={event => this.handleUpdateUser(event.target.value)} type="text"/>
        <input className="login-box" onChange={event => this.handleUpdatePassword(event.target.value)}type="text"/>
        <button onClick={this.handleLogin}>Login</button>
      </div>
    );
  }
}

export default Login;
