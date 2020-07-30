import React from "react";
import Auxiliary from "../hoc/Auxiliary";

export default class Counter extends React.Component {
	state = {
		counter: 0
	}

	addCounter = () => {
		this.setState({
			counter: this.state.counter + 1
		})
	}


	render() {
		const buttonStyle = {
			marginRight: 30,
			padding: '15px 50px',
			fontSize: 20,
			textAlign: 'center',
			cursor: 'pointer',
		}

		return (
			<Auxiliary>
				<h2>Counter</h2>
				<h4>{this.state.counter}</h4>
				<button style={buttonStyle} onClick={this.addCounter}>+</button>
				<button style={buttonStyle} onClick={() => {
					this.setState({counter: this.state.counter - 1})
				}}>-
				</button>
			</Auxiliary>
		)

		// return [
		// 	<h2 key={'1'}>Counter</h2>,
		// 	<h4 key={'2'}>{this.state.counter}</h4>,
		// 	<button key={'3'} style={buttonStyle} onClick={this.addCounter}>+</button>,
		// 	<button key={'4'} style={buttonStyle} onClick={() => {
		// 		this.setState({counter: this.state.counter - 1})
		// 	}}>-</button>,
		// ]
	}
}