import React , { Component } from 'react';
import {BrowserRouter as Router,Switch,NavLink,Route} from 'react-router-dom';
class Choice extends Component{
   constructor(props){
       super(props);
       this.tolink=this.tolink.bind(this)
   }
   tolink(){
       this.props.history.push('/choice/6666')
   }
   render(){
       return(
               <div>
                   <ul>
                       <li><NavLink to="/choice/10086">1</NavLink></li>
                       <li><NavLink to="/choice/10010">2</NavLink></li>
                       <li><NavLink to="/choice/123456">3</NavLink></li>
                       <li onClick={()=>this.tolink()}>4</li>
                   </ul>
               </div>
       )
   }
}
export default Choice;