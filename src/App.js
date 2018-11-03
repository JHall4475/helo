import React, { Component } from 'react';
import './App.css';
import Nav from '../src/component/Nav/Nav';
import Auth from '../src/component/Auth/Auth';
import Dashboard from '../src/component/Dashboard/Dashboard';
import Form from '../src/component/Form/Form';
import Post from '../src/component/Post/Post';


class App extends Component {
  render() {
    return (
      <div className="App">
      <Nav></Nav>
      <Auth></Auth>
      <Dashboard></Dashboard>
      <Form></Form>
      <Post></Post>

      </div>
    );
  }
}

export default App;
