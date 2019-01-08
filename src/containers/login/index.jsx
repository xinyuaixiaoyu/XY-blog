import React, { Component } from 'react';
import './Login.scss';
import { Icon } from 'antd';

export default class Login extends Component {
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
                            <a href="#">Get Started</a>
                        </div>
                        <p className="main-content-right">
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}