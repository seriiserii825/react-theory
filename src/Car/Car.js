import React from "react";
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

export default () => (
	<div>
		<p>This is a component</p>
		<p>Number: <strong>{Math.round(Math.random() * 100)}</strong></p>
	</div>
);
