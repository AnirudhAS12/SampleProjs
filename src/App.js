import React, { Component } from 'react';

import './App.css';
import Header from './components/header/js/header';
import Main from './components/maincomponent/js/main';
class App extends Component {
  constructor()
  {
    super();
   this.state={
     flag : true
   }
  }
  handle=()=>
  {
    this.setState({
      flag:false
    })
  }
  render() {  
    return (
      <div className="App">
        <Header />
        <Main/> 
        <button id="odi" className="btn btn-primary" onClick={this.handle}>
          ODI
        </button>
      </div>
    );
  }
}

export default App;
