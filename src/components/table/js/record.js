import React, { Component } from 'react';
import '../css/record.css';
class Record extends Component {

  render() {
    console.log(this.props);
    return(
      
          <tr className={this.props.player.grade}>
          <td>{this.props.player.jersey}</td>
          <td>{this.props.player.name}</td>
          <td>{this.props.player.ODI}</td>
          <td>{this.props.player.TEST}</td>
          <td>{this.props.player.T20}</td>
          <td>{this.props.player.matches}</td>
          <td>{this.props.player.total}</td>
          <td>{this.props.player.average}</td>
          <td>{this.props.player.grade}</td>
          <td>{this.props.player.award}</td>
          
          
          
    </tr>
    );
      
    
  }
}

export default Record;
