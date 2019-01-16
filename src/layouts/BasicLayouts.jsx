import React, { Component } from 'react';
import Header from '../components/Header/index.jsx';
import Menu from '../components/Menu';
import Login from '../containers/login';
import axios from 'axios';
// import { Route, Switch, Redirect } from 'react-router-dom';
import Pagination from '../components/Pagination';
import './BasicLayouts.scss';

class BasicLayouts extends Component {

	state = {
		isLogin: false,
		total: 0,
		listData: [],
		pageSize: 5
	}

  componentWillMount () {
		this.currentChange(1)
	}

	showLogin = () => {
		this.setState({isLogin: false})
	}

	hideLogin = () => {
		this.setState({isLogin: true})
	}
	
	currentChange = (current) => {
		const { pageSize } = this.state;
		axios.post('http://localhost:8888/userList',{current, pageSize},{
			headers:{
				contentType: "application/json",
				charset:"UTF-8"
			}
		})
		.then(res => {
			this.setState({
				total: res.data.total,
				listData: res.data.data
			})
		}).catch(err => {
			console.log(err)
		})
	}

	render () {
		const { isLogin, total, listData, pageSize } = this.state
		return (
			<div className="app-container">
				<div className="tab-home">
					<Header showLogin={this.showLogin}></Header>
					<div className="container">
						<div className="content">
							<div className="content-left">
							<ul>
								{
								Array.isArray(listData) && listData.length !== 0 &&
									listData.map((item, index) => {
										return(
											<li key={index}>{item.name}</li>
										)
									}) 
								}
							</ul>
							{
								total > 0 && 
								<Pagination total={total} pageSize={pageSize} currentChange={this.currentChange}></Pagination>
							}
							</div>
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