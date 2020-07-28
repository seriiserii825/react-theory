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
			<Car />
			<Car/>
		</div>
	);
}

export default App;
