import React, { Component } from 'react';
import DisplayDivision from './displaydivision';
class FilterDivision extends Component {
  render() {  
        console.log("myList");
      
        var myList=this.props.list;
        console.log(myList);
    return (
      <div className="FilterDivision">
            
            <div className="row" style={{paddingLeft: '40%'}}>
            <div style={{paddingRight: '10pt'}}>
            <button type="button" className="btn btn-success" data-toggle="modal" data-target="#A" >Grade A Players</button>
            </div>
            <div style={{paddingRight: '10pt'}}>
            <button type="button" className="btn btn-warning" data-toggle="modal" data-target="#B" >Grade B Players</button>
            </div>
            <button type="button" className="btn btn-danger"  data-toggle="modal" data-target="#C">Grade C Players</button>
            </div>
            <DisplayDivision target="A" list={myList.filter(v=>v.grade=='A')}/>
            <DisplayDivision target="B" list={myList.filter(v=>v.grade=='B')}/>
            <DisplayDivision target="C" list={myList.filter(v=>v.grade=='C')}/>
            

      </div>
    );
  }
}

export default FilterDivision;
