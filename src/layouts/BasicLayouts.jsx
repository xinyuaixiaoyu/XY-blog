import React, { Component } from 'react';
import Header from '../components/Header/index.jsx';
import Menu from '../components/Menu';
import Login from '../containers/login';
// import { Route, Switch, Redirect } from 'react-router-dom';
import './BasicLayouts.scss';

class BasicLayouts extends Component {

	state = {
		isLogin: false
	}

	showLogin = () => {
		this.setState({isLogin: false})
	}

	hideLogin = () => {
		this.setState({isLogin: true})
	}

	render () {
		const { isLogin } = this.state
		return (
			<div className="app-container">
				<div className="tab-home">
					<Header showLogin={this.showLogin}></Header>
					<div className="container">
						<div className="content">
							<p className="content-left">
							</p>
							<div className="content-right">
								<Menu></Menu>
							</div>
						</div>
					</div>
				</div> 
				<div className={isLogin ? 'login-hide' : 'login-show'}>
					<Login hideLogin={this.hideLogin}></Login>
				</div>
			</div>
		)
	}
}

export default BasicLayouts;