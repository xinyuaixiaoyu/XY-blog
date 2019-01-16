import React, { Component } from 'react'
import './pagination.scss';

export default class Pagination extends Component {
	constructor(props){
		super(props);
		this.state = {
			current: 1
		}
	}

	changePage(current){
		this.setState({
			current
		});
		this.props.currentChange(current)
	}

	prevPage = async () => {
		const { current } = this.state;
		if(current > 1){
			this.setState({current: current - 1})
			this.props.currentChange(current - 1)
		}
	}

	nextPage = async () => {
		const { current} = this.state;
		const { total, pageSize } = this.props;
		const totalPage = Math.ceil(total/pageSize);
		if(current !== totalPage){
			this.setState({current: current + 1})
			this.props.currentChange(current + 1)
		}
	}

	render () {
		const { current } = this.state;
		const { total, pageSize } = this.props;
		const totalPage = Math.ceil(total/pageSize);
		const list = [];
		if(totalPage > 1) list.push(
			<li key={0} className={current !== 1 ? 'btn' : 'disabled-btn'} 
				onClick={this.prevPage}>
				上一页
			</li>
		)
		for(let i = 0;i < totalPage;i++){
			list.push(
			<li key={i + 1} onClick={() => this.changePage(i + 1)} className={current === i + 1 ? 'currentBtn' : 'btn'}>
				{i + 1}
			</li>)
		}
		if(totalPage > 1) list.push(
			<li key={totalPage + 2} className={current !== totalPage ? 'btn' : 'disabled-btn'} 
				onClick={this.nextPage}>
				下一页
			</li>
		)
		return (
			<div className="app-pagination">
				<ul className="pagination-content">
					{ list }
				</ul>
				<select>
					<option></option>
				</select>
			</div>
		)
	}
}
