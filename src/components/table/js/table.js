import React, { Component } from 'react';
import Record from './record';
// import arrow from '../arrow-left.svg';
import data from '../../playerlist/js/playerlist';

class Table extends Component {


    constructor(props)
  {
    super(props);
    this.state={
      sort_jersey: false,
    sort_ODI: false,
    sort_TEST: false,
    sort_T20: false,
    sort_matches: false,
    sort_total: false,
    sort_average: false, 
    sort_name: false,
    players : data
    }
  }

  state={
    sort_jersey: false,
    sort_ODI: false,
    sort_TEST: false,
    sort_T20: false,
    sort_matches: false,
    sort_total: false,
    sort_average: false, 
    sort_name: false,
  }

  sortNumber(event, sortKey)
 {
    const players = this.state.players;
    players.sort((a,b) => a[sortKey] - (b[sortKey]))
    this.setState({players})
  }
  sortName(event, sortKey)
 {
    const players = this.state.players;
    players.sort((a,b) => a[sortKey].localeCompare(b[sortKey]))
    this.setState({players})
  }
 
 
  render() {

    return (
      <center>
      <div className="col-md-10" style={{height:'250pt'}}>
       <table className="table"  >
        <thead>
      <tr>
      
        <th onClick={()=>{this.setState({sort_jersey: !this.state.sort_jersey});this.props.sort(!this.state.sort_jersey,'jersey')}}>Jersey</th>
        <th onClick={()=>{this.setState({sort_name: !this.state.sort_name});this.props.sortName(!this.state.sort_name,'name')}}>Name</th>
        <th onClick={()=>{this.setState({sort_ODI: !this.state.sort_ODI});;this.props.sort(!this.state.sort_ODI,'ODI')}}>ODI</th>
        <th onClick={()=>{this.setState({sort_TEST: !this.state.sort_TEST});this.props.sort(!this.state.sort_TEST,'TEST')}}>Test</th>
        <th onClick={()=>{this.setState({sort_T20: !this.state.sort_T20});this.props.sort(!this.state.sort_T20,'T20')}}>T20</th>
        <th onClick={()=>{this.setState({sort_matches: !this.state.sort_matches});this.props.sort(!this.state.sort_matches,'matches')}}>Matches</th>
        <th onClick={()=>{this.setState({sort_total: !this.state.sort_total});this.props.sort(!this.state.sort_total,'total')}}>Total</th>
        <th onClick={()=>{this.setState({sort_average: !this.state.sort_average});this.props.sort(!this.state.sort_average,'average')}}>Average</th>
        <th>Grade</th>
        <th>Award</th>
        

      </tr>
    </thead>
    <tbody>
      {this.props.playerList.filter((value,index)=>{ return index>=this.props.start && index<this.props.end}).map(value=>
        { 
        return <Record player={value} />
      })}
    </tbody>
  </table>
      </div>
      <button disabled={this.props.left} type="button" className="btn btn-success" style={{marginRight: "5px"}}  onClick={this.props.prev}>prev</button>
      <button disabled={this.props.right} type="button" className="btn btn-success" onClick={this.props.next}>next</button>
   
  </center>
 
    );
  }
}

export default Table;
