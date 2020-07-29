import React from 'react';
import './App.css';
import './Car/Car';
import Car from "./Car/Car";

class App  extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			cars: [
				{name: 'Ford', year: 2018},
				{name: 'Audi', year: 2016},
				{name: 'Nisan', year: 2014},
			],
			pageTitle: 'React components'
		}
	}

	changeTitleHandler = () => {
		console.log('Click');
	}

	render() {
		const divStyle = {
			textAlign: 'center',
		};

		const cars = this.state.cars;

		return (
			<div style={divStyle}>
				<h1>{this.state.pageTitle}</h1>
				<button onClick={this.changeTitleHandler}>Change title</button>
				<Car name={this.state.cars[0].name} year={this.state.cars[0].year}/>
				<Car name={this.state.cars[1].name} year={this.state.cars[1].year}/>
				<Car name={this.state.cars[2].name} year={this.state.cars[2].year}/>
			</div>
		);
	}
}

export default App;
