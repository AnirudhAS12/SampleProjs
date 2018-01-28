import React, { Component } from 'react';

class Form extends Component {
    constructor(props)
    {
      super(props);
      this.state={};
      this.handleSubmit=this.handleSubmit;
    }
    
    handleSubmit=(event)=>{
        event.preventDefault();
       
        let total=parseInt(this.state.ODI,10)+parseInt(this.state.TEST,10)+parseInt(this.state.T20,10);
        let matches = parseInt(this.state.matches,10)
        let average=(total/matches);
        let grade='';
        let classRow='';
        let award='';
        
        console.log(total);
        this.setState()
      if(average>=50)
        {
            grade="A";
            classRow="divisionA";
            award='Rs.2,00,00,000';
           

        }
        else if(average>=40 && average<=50)
        {
            grade="B";
            classRow="divisionB";
             award="Rs.1,00,00,000";
          
            

        }
         else 
        {
             grade="C";
            classRow="divisionC";
            award="Rs.50,00,000";
           

        }
        var data={
            jersey: this.state.jersey,
            name: this.state.name,
            ODI: this.state.ODI,
            TEST: this.state.TEST,
            T20: this.state.T20,
            matches: this.state.matches,
            total: total,
            grade: grade,
            award: award,
            average: average,
            classRow: classRow
        }
        console.log(this.state);
        this.props.addPlayer(data);
        this.setState({
            jersey: '',
            name: '',
            ODI: '',
            TEST: '',
            T20: '',
            matches: '',
            total: '',
            grade: '',
            award: '',
            average: '',
            classRow: ''
        });
        console.log("working");
        console.log(data);
        
        // document.getElementById("close").click();

    }
  render() {
    return (
      <div >
      
<div className="container sample" >
  
  <div style={{padding:'10px'}}>
  <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal" >
  Add New Player
  </button> 
</div>
 
  <div className="modal fade" id="myModal">
    <div className="modal-dialog modal-lg">
      <div className="modal-content">
      
        
        <div className="modal-header">
          <div id="errors"></div>
          <button type="button" className="close" data-dismiss="modal">&times;</button>
        </div>
        
       
        <div className="modal-body">
         <div  style={{padding:'20pt'}}>
   <form onSubmit={(e)=>this.handleSubmit(e)}>
  <div className="form-group">
    
    <input placeholder="Jersey" type="number" className="form-control" value={this.state.jersey} id="jersey" onChange={(event)=>{this.setState({jersey: event.target.value})}} required/>
  </div>
  <div className="form-group">
    
    <input placeholder="Name" min="0" type="text" className="form-control" value={this.state.name} id="name" onChange={(event)=>{this.setState({name: event.target.value})}}/>
  </div>
   <div className="form-group">
    
    <input placeholder="ODI total" min="0" type="number" className="form-control" id="ODI" value={this.state.ODI} onChange={(event)=>{this.setState({ODI: event.target.value})}}/>
  </div>
  <div className="form-group">
  
    <input  placeholder="Test total" min="0" type="number" className="form-control" id="TEST" value={this.state.TEST} onChange={(event)=>{this.setState({TEST: event.target.value})}}/>
  </div>
   <div className="form-group">
    
    <input placeholder="T20 total" min="0" type="number" className="form-control" id="T20" value={this.state.T20} onChange={(event)=>{this.setState({T20: event.target.value})}}/>
  </div>
  <div className="form-group">
    
    <input placeholder="total matches" min="0" type="number" className="form-control" id="matches" value={this.state.matches} onChange={(event)=>{this.setState({matches: event.target.value})}}/>
  </div>
 
  <button type="submit" className="btn btn-primary"  >Submit</button>
</form>
      </div>
        </div>
        
        
        <div className="modal-footer">
          <button id="close" type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
        
      </div>
    </div>
  </div>
  
</div>

      
      </div>
      
    );
  }
}

export default Form;
