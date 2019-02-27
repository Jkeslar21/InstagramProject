import React, { Component } from 'react';
import './App.css';
import PostPage from './components/PostsContainer/PostsPage';
import authenticate from './components/authentication/authenticate';
// import dummyData from './dummy-data';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <PostPage />
      </div>
    );
  }
}

export default authenticate(App);
