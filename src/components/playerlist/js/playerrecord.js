import React, { Component } from 'react';


class PlayerRecord extends Component {
  render() {  
    return (
        <tr> 
            <td>{this.props.record.name}</td>
            <td>{this.props.record.average}</td>
        </tr>   
    );
  }
}

export default PlayerRecord;
