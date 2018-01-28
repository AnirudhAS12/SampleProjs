import React, { Component } from 'react';
import PlayerRecord from './playerrecord';


class PlayerList extends Component {
  render() {  
    var myList=this.props.player;
    return (
      
<div className="col-md-4">
<div className="container">
          
  <table className="table">
    <thead>
        <tr>
            <th>Name</th>
            <th>Average</th>
        </tr>
    </thead>
    
    <tbody>
      {myList.sort((a,b)=>{
          a=a.average;
          b=b.average;
        return b-a;
      })
      .slice(0,3)
    .map((val)=>{
        return <PlayerRecord record={val}/>
    })}
    </tbody>
  </table>
</div>
</div>
    );
  }
}

export default PlayerList;
