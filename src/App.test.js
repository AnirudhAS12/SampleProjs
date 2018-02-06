import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//1.
import {shallow} from 'enzyme';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

//2.describe - grouping all the test cases together
describe('<App/>',()=>{
  //3,. it for one particular test case and a random message
  it('renders div' , ()=>{

    //4.shallow - shallow copy of that component
    const a=shallow(<App/>);

    //5.expect - what output is expected
    expect(a.find('div.App').length).toEqual(1)
  });
  

  it('testing button functionality', ()=>
  {
    const b=shallow(<App />);

    var but=b.find('#odi');
    but.simulate('click');
    expect(b.state().flag).toEqual(false);

  })
});