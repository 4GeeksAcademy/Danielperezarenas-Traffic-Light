import React, { useState } from "react";

//include images into your bundle



//create your first component
const Home = () => {
	const [shine, setShine] = useState("red");

	const shineRed = () => {
		if (shine === "red") {
		  setShine("glow");
		} else {
		  setShine("red");
		}
	  }

	const shineYellow = () => {
		if (shine === "yellow") {
			setShine("glow");
		} else {
			setShine("yellow");
		}
	}

	const shineGreen = () => {
		if (shine === "green") {
			setShine("glow");
		} else {
			setShine("green");
		}
	}


	return (
		<div className="container">
			<div className="traffic-light">
				<div className={"light red" + (shine === "red" ? " glow" : "")} onClick={shineRed}></div>
				<div className={"light yellow" + (shine === "yellow" ? " glow" : "")} onClick={shineYellow}></div>
				<div className={"light green" + (shine === "green" ? " glow" : "")} onClick={shineGreen}></div>
			</div>
		</div>
	);
};

export default Home;
