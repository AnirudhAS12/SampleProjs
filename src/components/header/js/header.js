import React, { Component } from 'react';
import logo from '../../../logo.svg';   
class Header extends Component {
  render() {
    return (
     <div>
     
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
  
  <a className="navbar-brand" href="#"><div style={{backgroundColor: "white",borderRadius: "100%",  }}><img src="https://upload.wikimedia.org/wikipedia/en/thumb/8/8d/Cricket_India_Crest.svg/1200px-Cricket_India_Crest.svg.png" className="App-logo" alt="logo" /></div></a>
  

  <ul className="navbar-nav">
    <h1 style={{color:'	#ffffff'}}>The Board of Control for Cricket in India (BCCI)</h1>
    
  </ul>
</nav>
      </div>
    );
  }
}

export default Header;
