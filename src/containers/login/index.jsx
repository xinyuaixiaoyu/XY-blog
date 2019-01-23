import React, { Component } from 'react';
import './Login.scss';
import { Icon } from 'antd';

export default class Login extends Component {
    constructor(props){
        super(props);
    }
    
    state = {
        menuNum: 1
    }

    changeMenuNum(menuNum){
        this.setState({
            menuNum
        })
    }

    render () {
        return (
            <div className="login-containers">
                <div className="login-content">
                    <div className="main-menu">
                        <h2>
                            <i></i>
                            <b>XinYuBlog</b>
                        </h2>
                        <ul>
                            <li><Icon type="weibo" className="icon"/></li>
                            <li><Icon type="wechat" className="icon"/></li>
                            <li><Icon type="qq" className="icon"/></li>
                            <li><Icon type="github" className="icon"/></li>
                        </ul>
                    </div>
                    <div className="main-content">
                        <div className="main-content-left">
                            <h6>AWAY FROM MONOTONOUS LIFE</h6>
                            <h1>MAGICAL TRAVEL</h1>
                            <p>Welcome to my blog, Children without umbrellas must run hard,visitors please click this button to enter my life</p>
                            <a href="#" onClick={this.props.hideLogin}>Get Started</a>
                        </div>
                        <div className="main-content-right">
                            <h3>
                                <button onClick={ () => this.changeMenuNum(1) } className={this.state.menuNum === 1 ? 'btn-choose' : 'btn'}>login</button>
                                <button onClick={ () => this.changeMenuNum(2) } className={this.state.menuNum === 2 ? 'btn-choose' : 'btn'}>register</button>
                                <button onClick={ () => this.changeMenuNum(3) } className={this.state.menuNum === 3 ? 'btn-choose' : 'btn'}>forget password</button>
                            </h3>
                            {
                                this.state.menuNum === 1 && 
                                <form>
                                    <input type="text" placeholder="请输入用户名"></input>
                                    <input type="password" placeholder="请输入密码"></input>
                                    <button className="login-btn">登录</button>
                                </form>
                            }
                            {
                                this.state.menuNum === 2 && 
                                <form>
                                    <input type="text" placeholder="啦啦啦"></input>
                                    <input type="text" placeholder="请输入用户名"></input>
                                    <input type="password" placeholder="请输入密码"></input>
                                    <input type="password" placeholder="请重复输入密码"></input>
                                    <button className="register-btn">注册</button>
                                </form>
                            }
                            {
                                this.state.menuNum === 3 && 
                                <div style={{padding:'30px',color:'red',background:'#fff',textAlign:'center'}}>暂无该功能,请联系博主进行密码重置</div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}