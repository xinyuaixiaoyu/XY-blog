import React, { Component } from 'react'
import './pagination.scss';

export default class Pagination extends Component {
	constructor(props){
		super(props);
		this.state = {
			current: 1,
			currentPageSize: 5,
			defaultPageList: [5,10,15],
			inputValue: ''
		}
	}
	
	changePage(current){
		const { currentPageSize } = this.state;
		this.setState({
			current
		});
		this.props.currentChange(current, currentPageSize)
	}

	prevPage = async () => {
		const { current, currentPageSize } = this.state;
		if(current > 1){
			this.setState({current: current - 1})
			this.props.currentChange(current - 1, currentPageSize)
		}
	}

	nextPage = async () => {
		const { current, currentPageSize } = this.state;
		const { total } = this.props;
		const totalPage = Math.ceil(total/currentPageSize);
		if(current !== totalPage){
			this.setState({current: current + 1})
			this.props.currentChange(current + 1, currentPageSize)
		}
	}
	
	handelChange = (e) => {
		this.setState({
				inputValue: e.target.value
		})
	}
	
	selectedChange = (e) => {
		this.setState({
			currentPageSize: e.target.value,
			current: 1
		})
		this.props.currentChange(1, e.target.value)
	}

	quickJump = () => {
		const { currentPageSize, inputValue } = this.state;
		const { total } = this.props;
		const totalPage = Math.ceil(total/currentPageSize);
		if(inputValue !== '' && 0 <= inputValue && inputValue < totalPage){
			this.setState({current: Number(inputValue)})
			this.props.currentChange(inputValue, currentPageSize)
		}
	}

	render () {
		const { current, currentPageSize, defaultPageList, inputValue } = this.state;
		const { total, pageList, showTotal, showQuickJumper } = this.props;
		const totalPage = Math.ceil(total/currentPageSize);
		const list = [];
		const ellipsisList = [];
		for(let i = 0;i < totalPage;i++){
			list.push(
			<li key={i + 1} onClick={() => this.changePage(i + 1)} className={current === i + 1 ? 'currentBtn' : 'btn'}>
				{i + 1}
			</li>)
		}
		if(totalPage > 7 && current < 5) {
			for(let i = 1; i <= 5; i++){
				ellipsisList.push(
					<li key={i} onClick={() => this.changePage(i)} className={current === i ? 'currentBtn' : 'btn'}>
						{i}
					</li>
				)
			}
			ellipsisList.push(
				<li key={totalPage - 1}>
					...
				</li>
			)
			ellipsisList.push(
				<li key={totalPage} onClick={() => this.changePage(totalPage)} className={current === totalPage ? 'currentBtn' : 'btn'}>
					{totalPage}
				</li>
			)
		}
		if(totalPage > 7 && current >= totalPage - 4){
			ellipsisList.push(
				<li key={1} onClick={() => this.changePage(1)} className={current === 1 ? 'currentBtn' : 'btn'}>
					{1}
				</li>
			)
			ellipsisList.push(
				<li key={2}>
					...
				</li>
			)
			for(let i = totalPage - 4; i <= totalPage; i++){
				ellipsisList.push(
					<li key={i} onClick={() => this.changePage(i)} className={current === i ? 'currentBtn' : 'btn'}>
						{i}
					</li>
				)
			}
		}
		if(totalPage > 7 && current >= 5 && current < totalPage - 4){
			ellipsisList.push(
				<li key={1} onClick={() => this.changePage(1)} className={current === 1 ? 'currentBtn' : 'btn'}>
					{1}
				</li>
			)
			ellipsisList.push(
				<li key={current - 2}>
					...
				</li>
			)
			for(let i = current - 1; i <= current + 1; i++){
				ellipsisList.push(
					<li key={i} onClick={() => this.changePage(i)} className={current === i ? 'currentBtn' : 'btn'}>
						{i}
					</li>
				)
			}
			ellipsisList.push(
				<li key={current + 2}>
					...
				</li>
			)
			ellipsisList.push(
				<li key={totalPage} onClick={() => this.changePage(totalPage)} className={current === totalPage ? 'currentBtn' : 'btn'}>
					{totalPage}
				</li>
			)
		}
		return (
			<div className="app-pagination">
				<ul className="pagination-content">
					{
						totalPage > 1 && 
						<li key={0} className={current !== 1 ? 'btn' : 'disabled-btn'} 
							onClick={this.prevPage}>
							{'<'}
					    </li>
					}
					{
						totalPage <= 7 ? list : ellipsisList
					}
					{
						totalPage > 1 && 
						<li key={totalPage + 2} className={current !== totalPage ? 'btn' : 'disabled-btn'} 
							onClick={this.nextPage}>
							{'>'}
						</li>
					}
				</ul>
				<div className="show-current-page"><i>{current}</i>/{totalPage}</div>
				{
					showQuickJumper && <div className="quicker-jump">
						<input onChange={this.handelChange} defaultValue={inputValue}></input>
						<a onClick={this.quickJump}>jump</a>
					</div>
				}
				<select className="select" value={currentPageSize} onChange={this.selectedChange}>
					{
						pageList && Array.isArray(pageList) && pageList.length > 0 && pageList.map((item, index) => {
							return(
								<option key={index} value={item} selected={item === currentPageSize ? 'selected' : ''}>{item}</option>
							)
						})
					}
					{
						!pageList && defaultPageList.map((item, index) => {
							return(
								<option key={index} value={item} selected={item === currentPageSize ? 'selected' : ''}>{item}</option>
							)
						})
					}
				</select>
				{
					showTotal && <p className="total">总计：<i>{total}</i> 条</p>
				}
			</div>
		)
	}
}
