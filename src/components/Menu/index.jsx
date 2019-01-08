import React, { Component } from 'react';
import './Menu.scss';
import { Icon } from 'antd';

export default class Menu extends Component {
	render () {
		return (
			<div className="menu">
				<ul>
					<li>
						<p><Icon type="home" theme="filled" /></p>
						<h2>Home</h2>
					</li>
					<li>
						<p><Icon type="user" /></p>
						<h2>About Us</h2>
					</li>
					<li>
						<p><Icon type="camera" theme="filled" /></p>
						<h2>Gallery</h2>
					</li>
					<li>
						<p><Icon type="mail" theme="filled" /></p>
						<h2>Contact</h2>
					</li>
				</ul>
			</div>
		)
	}
}