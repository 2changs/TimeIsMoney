import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import Cards from './Cards.js';

class App extends Component {
  render() {
    return (
      <div className="App">
		<Header />
		<Cards />
      </div>
    );
  }
}

export default App;
