import React, { Component } from 'react';
import { NavLink,Switch,BrowserRouter as Router,Route,Redirect } from 'react-router-dom';
import Home from './component/home'
import About from './component/about.js';
import Choice from './component/choice.js';
import Detail from './component/detail';
// import logo from './logo.svg';
import './App.css';
// import Parent from './parent';
class App extends Component {
  constructor(){
    super()
  }
//   async timeout(){ 
//     const result1 = await  this.doubleAfter2seconds(30)
//     const result2 = await  this.doubleAfter2seconds(40)
//     const result3 = await  this.doubleAfter2seconds(50)
//     console.log(result1+result2+result3)
//   }
//   doubleAfter2seconds(num) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(2 * num)
//         }, 2000);
//     } )
// }
  render() {
  //  this.timeout()
    return (
          <Router>
            <div>
                <NavLink to="/" exact>主页</NavLink>
                <NavLink to="/about">关于页面</NavLink>
                <NavLink to="/choice">选择页面</NavLink>
              <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route path="/about" component={About}></Route>
                <Route path="/choice" component={Choice}></Route>
                <Redirect to="/"></Redirect>
              </Switch>
               <Route path="/choice/:cid" component={Detail}></Route>
             </div>
          </Router>
    );
  }
}

export default App;
