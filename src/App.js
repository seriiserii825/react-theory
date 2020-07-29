import React from 'react';
import './App.css';
import './Car/Car';
import Car from "./Car/Car";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			cars: [
				{name: 'Ford', year: 2018},
				{name: 'Audi', year: 2016},
				{name: 'Nisan', year: 2014},
			],
			pageTitle: 'React components',
			showCars: false
		}
	}

	changeTitleHandler = (newTitle) => {
		this.setState({
			pageTitle: newTitle
		});
	}

	toggleCarsHandler = () => {
		this.setState({
			showCars: !this.state.showCars
		});
	}

	// handleInput = (event) => {
	// 	this.setState({
	// 		pageTitle: event.target.value
	// 	});
	// }

	render() {
		const divStyle = {
			textAlign: 'center',
		};

		let cars = null

		if (this.state.showCars) {
			cars = this.state.cars.map((car) => {
				return (
					<Car
						key={car.name}
						name={car.name}
						year={car.year}
						onChangeTitle={() => {
							this.changeTitleHandler(car.name)
						}}
					/>
				)
			})
		}

		return (
			<div style={divStyle}>
				<h1>{this.state.pageTitle}</h1>
				{/*<input type="text" onChange={this.handleInput}/>*/}
				<button onClick={this.toggleCarsHandler}>Toggle cars</button>

				{cars}
			</div>
		);
	}
}

export default App;
