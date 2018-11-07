import React, { Component } from 'react';
import './App.css';
import Nav from '../src/component/Nav/Nav';
import routes from './routes'


class App extends Component {
  
  
  render() {
    return (
      <div className="App">
      <Nav></Nav>
      {routes}
    
      </div>
    );
  }
}

export default App;
