import React from "react";
import './Car.css';
// function Car() {
// 	return (
// 		<div>This is a component</div>
// 	);
// }

// const car = () => {
// 	return (
// 		<div>This is a component</div>
// 	);
// }

// const car = () => (
// <div>
// 	This is a component
// 	<strong>test</strong>
// </div>);
//
// export default car;


class Car extends React.Component {

	render() {

		if (Math.random() > 0.7) {
			throw new Error('Car random failed')
		}

		let carsInput = ['input'];

		if (this.props.name !== '') {
			carsInput.push('green');
		} else {
			carsInput.push('red');
		}

		return (
			<div className="Car">
				<h3>Car name: {this.props.name}</h3>
				<p>Year: <strong>{this.props.year}</strong></p>
				<input className={carsInput.join(' ')} type="text" onChange={this.props.onChangeName}
					   value={this.props.name}/>
				<button onClick={this.props.onDelete}>Delete</button>
			</div>
		)
	}
}

export default Car;

// export default props => {
// 	let carsInput = ['input'];
//
// 	if(props.name !== ''){
// 		carsInput.push('green');
// 	}else{
// 		carsInput.push('red');
// 	}
//
//
// 	return (
// 		<div className="Car">
// 			<h3>Car name: {props.name}</h3>
// 			<p>Year: <strong>{props.year}</strong></p>
// 			<input className={carsInput.join(' ')} type="text" onChange={props.onChangeName} value={props.name}/>
// 			<button onClick={props.onDelete}>Delete</button>
// 		</div>
// 	)
// };
