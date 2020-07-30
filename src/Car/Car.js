import React from "react"
import './Car.css'
import withClass from "../hoc/withClass"
import PropTypes from 'prop-types'

class Car extends React.Component {

	render() {

		let carsInput = ['input'];

		if (this.props.name !== '') {
			carsInput.push('green');
		} else {
			carsInput.push('red');
		}

		return (
			<React.Fragment>
				<h3>Car name: {this.props.name}</h3>
				<p>Year: <strong>{this.props.year}</strong></p>
				<input className={carsInput.join(' ')} type="text" onChange={this.props.onChangeName}
					   value={this.props.name}/>
				<button onClick={this.props.onDelete}>Delete</button>
			</React.Fragment>
		)
		// return (
		// 	<div className="Car">
		// 		<h3>Car name: {this.props.name}</h3>
		// 		<p>Year: <strong>{this.props.year}</strong></p>
		// 		<input className={carsInput.join(' ')} type="text" onChange={this.props.onChangeName}
		// 			   value={this.props.name}/>
		// 		<button onClick={this.props.onDelete}>Delete</button>
		// 	</div>
		// )
	}
}

Car.propTypes = {
	name: PropTypes.string,
	year: PropTypes.number.isRequired,
	onChangeYear: PropTypes.func,
	onDelete: PropTypes.func,
}

export default withClass(Car,'Car');
