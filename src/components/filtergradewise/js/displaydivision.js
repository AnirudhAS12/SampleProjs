import React, { Component } from 'react';
class DisplayDivision extends Component {
  render() {  
      let myList=this.props.list;
      console.log("display",myList);
    return (
      
           
            <div className="modal fade" id={this.props.target}>
  <div className="modal-dialog modal-lg">
    <div className="modal-content">

     
      

      <div className="modal-body">
        <table class="table">
    <thead>
      <tr>
        <th>Jersey</th>
        <th>Name</th>
        <th>ODI</th>
        <th>Test</th>
        <th>T20</th>
        <th>Matches</th>
        <th>Total</th>
        <th>Average</th>
        <th>Award</th>
        </tr>
    </thead>
    <tbody>
        {myList.map(v=>{
            var data= <tr className={v.classRow}>
        <td>{v.jersey}</td>
        <td>{v.name}</td>
        <td>{v.ODI}</td>
        <td>{v.TEST}</td>
        <td>{v.T20}</td>
        <td>{v.matches}</td>
        <td>{v.total}</td>
        <td>{v.average}</td>
        <td>{v.award}</td>
        
        
        
      </tr>
            return data;
        })}
     
      
    </tbody>
  </table>
      </div>

      
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>

    </div>
  </div>
</div>
            
    );
  }
}

    export default DisplayDivision;
