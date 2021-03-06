import React from 'react';
import './App.css';
import './Car/Car';
import Car from "./Car/Car";
import Counter from "./Counter/Counter";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";
// import Counter2 from "./Counter2/Counter2";
export const ClickedContext = React.createContext(false)

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			cars: [
				{name: 'Ford', year: 2018},
				{name: 'Audi', year: 2022},
				{name: 'Nisan', year: 2014},
			],
			pageTitle: 'React components',
			showCars: false,
			clicked: false
		}
	}

	changeTitleHandler = (newTitle) => {
		this.setState({
			pageTitle: newTitle
		});
	}
	onChangeName = (name, index) => {
		const car = this.state.cars[index]
		car.name = name
		const cars = [...this.state.cars]
		cars[index] = car
		this.setState({cars})
	}

	toggleCarsHandler = () => {
		this.setState({
			showCars: !this.state.showCars
		});
	}

	handleInput = (event) => {
		this.setState({
			pageTitle: event.target.value
		});
	}

	deleteHandler(index) {
		const cars = this.state.cars.concat()
		cars.splice(index, 1)
		this.setState({
			cars: cars
		})
	}


	render() {
		const divStyle = {
			textAlign: 'center',
		};

		let cars = null

		if (this.state.showCars) {
			cars = this.state.cars.map((car, index) => {
				return (
					<ErrorBoundary key={index}>
						<Car
							name={car.name}
							year={car.year}
							index={index}
							onChangeName={(event) => {
								this.onChangeName(event.target.value, index)
							}}
							onDelete={this.deleteHandler.bind(this, index)}
						/>
					</ErrorBoundary>
				)
			})
		}

		return (
			<div style={divStyle}>
				{/*<h1>{this.state.pageTitle}</h1>*/}
				<h1>{this.props.title}</h1>
				{/*<input type="text" onChange={this.handleInput}/>*/}
				<button onClick={this.toggleCarsHandler}>Toggle cars</button>
				<button onClick={() => this.setState({clicked: true})}>Change clicked</button>

				<ClickedContext.Provider value={this.state.clicked}>
				<hr/>
				<Counter/>
				<hr/>
				</ClickedContext.Provider>

				<div style={{
					width: 300,
					margin: 'auto',
				}}>{cars}</div>
			</div>
		);
	}
}

export default App;
