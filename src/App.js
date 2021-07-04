import { Component } from 'react';

class App extends Component{
  render() {
      return (
          <div>
              <h1>Welcome to my React App</h1>
              <div>
              <a href="home">Home</a>
              <a href="registration">Registration</a>
              <a href="login">Login</a>
              <a href="assignItem">Assign Item</a>
              </div>
          </div>
      )
  }
}

export default App;
