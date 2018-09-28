import React, { Component } from 'react';
class Child extends Component{
    constructor(props){
        super(props);
        this.message = "啦啦啦，我是卖报的小行家"
    }
    render(){
        return(
            <div>
                <h2 onClick={()=>this.props.fromParent(this.message)}>点击我改变父组件哦</h2>
                <p>{this.props.userInfo}</p>
                <input type="text" ref="msg" onKeyDown={(ev)=>this.props.changeMsg(ev,this.refs.msg.value)}></input>
            </div>
        )
    }
}
export default Child;