import React,{ Component } from 'react';
 class Todos extends Component{
     constructor(){
         super();
         this.state = {
             list:[]
         }
     }
     remove(index){
       this.state.list.splice(index,1)
       this.setState({
           list:this.state.list
       })
     }
     pressEnter(ev){
         if(ev.keyCode===13){
             this.state.list.push(this.refs.msg.value)
             this.setState({
                 list:this.state.list
             })
         }
     }
     render(){
         var toDoList = this.state.list.map((item,index)=>
                           <li key={index}>{item}<button onClick={()=>this.remove(index)}>X</button></li>
                        )
         return(
             <div>
                 <p>我是todolist</p>
                 <input type="text"  ref="msg" onKeyDown={(ev)=>this.pressEnter(ev)}></input>
                 <ul>{toDoList}</ul>
             </div>
         )
     }
 }
 export default Todos;