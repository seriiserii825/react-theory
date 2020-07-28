import React from 'react';
import './App.css';
import './Car/Car';
import Car from "./Car/Car";

function App() {
	const divStyle = {
		textAlign: 'center',
	}
	return (
		<div style={divStyle}>
			<h1>Hello world!!!</h1>
			<Car name={'Audi'} year={2014} />
			<Car name={'Ford'} year={2017} >
				<p>Color: </p>
			</Car>
			<Car name={'Mazda'} year={2011}/>
			<Car name={'Toyota'} year={2014}/>
		</div>
	);
}

export default App;
