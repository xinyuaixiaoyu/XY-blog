import React, { Component } from 'react';
import './Header.scss';
import { Icon } from 'antd';

export default class Header extends Component {
	render () {
		return (
			<div className="header">
				<div className="header-container">
					<p className="header-container-left">Call us: <i>820 820 820 888</i></p>
					<p className="header-container-right">
						<Icon type="user" className="icon" onClick={this.props.showLogin}/>
						<Icon type="weibo" className="icon"/>	
						<Icon type="wechat" className="icon"/>
						<Icon type="qq" className="icon"/>
						<Icon type="github" className="icon"/>
					</p>
				</div>
			</div>
		)
	}
}