import React, { Component } from 'react';
import Table from '../../table/js/table';
import Form from '../../form/js/form';
import data from './jsondata';
import PlayerList from '../../playerlist/js/playerlist';
import Statistics from '../../scorestatistic/js/statistics';
import FilterDivision from '../../filtergradewise/js/filterdivision';
class Main extends Component {
  constructor(props)
  {   super(props);
      this.state={
        playerList:data,
        startIndex: 0,
        endIndex: 5,
        rightbutton:false,
        leftbutton:true,
      
        
  }
  this.getMaxMin=this.prevPage.bind(this);
  this.nextPage=this.nextPage.bind(this);
  this.sortNumber=this.sortNumber.bind(this);
  this.sortName=this.sortName.bind(this);
  
        
}   

nextPage=()=>{
this.setState({leftbutton: false});
let len=this.state.playerList.length;
let end= this.state.endIndex;
this.setState({startIndex: end});
this.setState({endIndex: (end+5)})
console.log(this.state.endIndex+5,len);
if(this.state.endIndex+5>=len)
{
    this.setState({rightbutton: true});
}

}

prevPage=()=>{
    let len=this.state.playerList.length;
let start= this.state.startIndex;
this.setState({startIndex: start-5});
this.setState({endIndex: start});

var d=this.state.startIndex;
console.log(d,this.state.endIndex);
if(this.state.startIndex==5)
{
    this.setState({leftbutton: true});
    this.setState({rightbutton: false});
    
}


}


addPlayer = (obj) => {
    console.log(obj);
    let list =this.state.playerList;
    list.push(obj);
    
    this.setState({playerList: list});

    if(this.state.endIndex>=list.length)
{
    this.setState({rightbutton: true});
}
else{
    this.setState({rightbutton: false});
}


}

// sortbyRollno=(flag,sortby)=>{
//     let list=this.state.playerList;
//     console.log(flag);
//     list.sort((a,b)=> {
   
//         if(flag)
//         {
//             let n=parseInt(a[sortby]);
//         let m=parseInt(b[sortby]);
//         console.log(n,m);
//         return n-m;
//     }
//     else{
//         let n=parseInt(a[sortby]);
//         let m=parseInt(b[sortby]);
//         console.log(n,m);
//         return m-n;
//     }
      
    
//     });
//     console.log(list);
//     this.setState({playerList: list});
// }
// sortbyName=(flag,sortby)=>{
//     let list=this.state.playerList;
//     console.log(flag);
//     list.sort((a,b) => {
//          let n=a[`${sortby}`].toLowerCase();
//         let m=b[`${sortby}`].toLowerCase();
//         if(flag)
//         {
//         if(n>m)
//             return -1;
//         if(m>n)
//             return 1;
//         return 0
//     }
//     else{

//         if(n<m)
//             return 1;
//         if(m<n)
//             return -1;
//         return 0;
//     }
//     });


    
    // this.setState({playerList: list});
     sortNumber(event, sortKey)
 {
    // const players = this.state.players;
    let list=this.state.playerList;
    list.sort((a,b) => a[sortKey] - (b[sortKey]))
    this.setState({list})
  }
  sortName(event, sortKey)
 {
    // const players = this.state.players;
    let list=this.state.playerList;
    
    list.sort((a,b) => a[sortKey].localeCompare(b[sortKey]))
    this.setState({list})
  }

  


  render() {
    return (
      <div style={{backgroundColor : "#F0E68C"}}>
       
       <Form addPlayer={this.addPlayer}/>
       <Table playerList={this.state.playerList} start={this.state.startIndex} end={this.state.endIndex} next={this.nextPage} prev={this.prevPage} left={this.state.leftbutton} right={this.state.rightbutton} sort={(e)=>{this.sortbyRollno}} sortName={(e)=>{this.sortbyName}}/>
       <center>
       <div className="row" style={{paddingTop:'20pt',paddingLeft:'20%'}}>
       <PlayerList player={this.state.playerList}/>
       <Statistics list={this.state.playerList} />
       
       </div>
       <FilterDivision list={this.state.playerList}  />
       </center>        

      </div>
    );
  }
}

export default Main;
