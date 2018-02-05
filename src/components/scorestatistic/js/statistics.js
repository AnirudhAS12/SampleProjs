import React, { Component } from 'react';
import '../../../Sass/style.scss'


class Statistics extends Component {
   
    getAverage=(list,key)=>{
       var sum= list.reduce((sum,item)=>sum+parseInt(item[key]),0);

       return ((sum)/list.length).toFixed(2);
    }
    getMaxMin=(flag,sortby,list)=>{
    
    list.sort(function(a,b) {
   
        if(flag)
        {
            let n=parseInt(a[sortby]);
        let m=parseInt(b[sortby]);
        console.log(n,m);
        return m-n;
    }
    else{
        let n=parseInt(a[sortby]);
        let m=parseInt(b[sortby]);
        console.log(n,m);
        return n-m;
    }
      
    
    });
    console.log(list);
    if(flag)
    {   console.log(list[0][sortby]);
        return list[0][sortby];
    }
    else{
       console.log(list[0][sortby]);
        return list[0][sortby];
    }
}
  render() {  
          var myList=this.props.list;
        //   let min=this.getMaxMin(true,'es6',myList);
          
    return (
        <div className="col-md-4">
<div className="container">
          <h4>Statictics</h4>
  <table className="table">
    <thead>
        <tr>
            <th id="th1">Game Formats</th>
            <th>Minimum</th>
            <th>Maximum</th>
            <th>Average</th>
        </tr>
    </thead>
    
    <tbody>
      <tr>
        <td>ODI</td>
        <td>{this.getMaxMin(false,'ODI',myList)}</td>
        <td>{this.getMaxMin(true,'ODI',myList)}</td>
        <td>{this.getAverage(myList,'ODI')}</td>
      </tr>
      <tr>
        <td>Test</td>
        <td>{this.getMaxMin(false,'TEST',myList)}</td>
        <td>{this.getMaxMin(true,'TEST',myList)}</td>
        <td>{this.getAverage(myList,'TEST')}</td>
      </tr>
      <tr>
        <td>T20</td>
        <td>{this.getMaxMin(false,'T20',myList)}</td>
        <td>{this.getMaxMin(true,'T20',myList)}</td>
        <td>{this.getAverage(myList,'T20')}</td>
      </tr>
      
    </tbody>
  </table>
</div>
</div>
         
    );
  }
}

export default Statistics;
