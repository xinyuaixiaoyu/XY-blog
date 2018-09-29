import React, { Component } from 'react';
import Children  from './children';
class Lifecycle extends Component{
    //加载阶段start
    constructor(){//构造函数
        super()//继承父类的this
        this.state = {
            lifeList:[],
            message:'hi',
            count:0,
        }
        console.log('constructor')
    }
    componentWillMount(){
        console.log('componentWillMount')
    }
    componentDidMount(){
        console.log('componentDidMount')
    }
    //加载阶段end
    //视图更新阶段start
    shouldComponentUpdate(newProps, newState){//该生命周期返回boolean值，可以设置组件视图是否更新（性能优化非常重要的一个阶段，组件接收新的state和props，
        //跟前后props和state进行对比，如果不变则返回false不进行视图的更新，进行diff算法，节省性能）
        // console.log('shouldComponentUpdate')
        console.log(newProps,newState)
        return true;
    }
    componentWillReceiveProps(newProps){//只有接收到新的props才会触发该函数   参数为传来的props
        console.log('componentWillReceiveProps')
    }
    componentWillUpdate(nextProps, nextState){//参数为后面的state和props
        console.log(nextProps,nextState)
        console.log('componentWillUpdate')
    }
    componentDidUpdate(prevProps, prevState){//参数为前面的state和props  该阶段可以获取dom
        console.log(prevProps,prevState)
        console.log('componentDidUpdate')
    }
    componentDidCatch(){
        console.log('componentDidCatch')
    }
    //视图更新阶段end
    //组件卸载
    componentWillUnmount(){//通过判断或者三目来卸载或者显示组件，不显示时该生命周期执行（一般在该生命周期内清除事件监听和定时器）
        console.log('componentWillUnmount')
    }
    changeMessage(){
        this.setState({
            message:'hello'
        })
    }
    add(){
        var a = this.state.count+1
        this.setState({
            count:a
        })
    }
    render(){
        console.log('render')
        return(
            <div>
                <h2 onClick={()=>this.changeMessage()}>生命周期(钩子函数)</h2>
                {this.state.count}<button onClick={()=>this.add()}>+</button>
                {this.state.message}
                <p>{this.state.count % 3===0 ?'':<Children message={this.state.message}/>}</p>
            </div>
        )
    }
}
export default Lifecycle;