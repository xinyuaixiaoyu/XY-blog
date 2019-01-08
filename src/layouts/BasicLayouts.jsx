import React, { Component } from 'react';
import Header from '../components/Header/index.jsx';
import Menu from '../components/Menu';
// import { Route, Switch, Redirect } from 'react-router-dom';
import './BasicLayouts.scss';

class BasicLayouts extends Component {
	render () {
		return (
			<div className="app-container">
				<Header></Header>
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
		)
	}
}

export default BasicLayouts;