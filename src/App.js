import React, { Component } from 'react';

import './App.css';
import Header from './components/header/js/header';
import Main from './components/maincomponent/js/main';
class App extends Component {
  render() {  
    return (
      <div className="App">
        <Header />
        <Main/> 
      </div>
    );
  }
}

export default App;
