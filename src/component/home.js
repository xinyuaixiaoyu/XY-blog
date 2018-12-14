import React , { Component } from 'react';
import { connect } from 'react-redux';
class Home extends Component{
   constructor(){
       super()
       console.log(this.props)
   }
   render(){
       return(
           <div>
               <button onClick={()=>this.props.add()}>加</button>
               <i>{this.props.num}</i>
               <button onClick={()=>this.props.reduce()}>减</button>
           </div>
       )
   }
}
var HomeNum = connect((state)=>{
     return{
         num : state.num
     }
},(dispatch)=>{
     return{
         add(){
            dispatch({type:'ADD_NUM'})
         },
         reduce(){
            dispatch({type:'REDUCE_NUM'})
         }
     }
})(Home)
export default HomeNum;
