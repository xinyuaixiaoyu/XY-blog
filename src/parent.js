import React,{Component} from 'react';
import Child from './children';
class Parent extends Component{
    constructor(props){
        super(props);
        this.user = 'xinyu'
        this.fromParent = this.fromParent.bind(this)
        this.state = {
            message:'父子组件todolist',
            list:[]
        }
        this.changeMsg=this.changeMsg.bind(this)
    }
    changeMsg(ev,value){
      if(ev.keyCode===13){
          this.state.list.push(value)
          this.setState({
              list:this.state.list
          })
      }
    }
    remove(index){
      this.state.list.splice(index,1)
      this.setState({list:this.state.list},()=>{
          console.log('已经更改了state')
      })
    //   this.setState((preState,props)=>{
    //       console.log(preState)
    //       return {list:preState.list}
    //   })
      this.children.getChildren();
    }
    fromParent(msg){
     setTimeout(
         () => this.setState({
             message:msg
         }),2000)
    }
    render(){
        var todolist=this.state.list.map((item,index)=>
        <li key={index}>{item}<button onClick={()=>this.remove(index)}>X</button></li>
    )
        return (
            <div>
                <h2>我是父组件</h2>
                <p>{this.state.message}</p>
                <ul>{todolist}</ul>
                <Child userInfo = {this.user} fromParent = {this.fromParent} changeMsg={this.changeMsg} ref={(child)=> { this.children = child }}/>
            </div>
        )
    }
}
export default Parent;